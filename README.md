# Malayalam Mozhi Keyman Keybaord
## mlym-mozhi-Keyman
Mozhi is one of most popular phonetic keyboarding scheme for Malayalam script. It was originally designed by Cibu for the Varamozhi project and he still maintains the [Mozhi specification](https://sites.google.com/site/cibu/mozhi/mozhi2).

## Keyman
This project implements the Mozhi layout in [Keyman 9](https://keyman.com/), the popular keyboarding application. Starting from release Keyman 9.0.528.0, the program is again made available as a free program by [SIL International](www.sil.org) after they [acquired Tavoultesoft](https://keyman.com/sil-acquisition/), the company that owned Keyman. This keyboard will support all the Malayalam Characters available in [Unicode 10](http://unicode.org/charts/PDF/U0D00.pdf).

## How to collaborate on this project
You are welcomed to collaborate in this project. The Keyman keybaord development is not a big task. So even if you are not a developer, you can still contribute to this project. To participate in this project you'll need the Keyman Developer application, which can be downloaded from [here](https://keyman.com/developer/). Once you download and install Keyman desktop on your computer, visit the [Developer Support page](https://help.keyman.com/developer/9.0/guides/) and [Keyman Keyboard Languge page](https://help.keyman.com/developer/language/) to learn more about how to write Keyman Keybaords.

### Setting up your system for collaboration
We will use the [Git Forking Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows#forking-workflow) for this project. Take a moment to read through this link and learn the workflow and philosophy. If you are new you git and version controlling system, you may want to take the interactive training offered on the [Atlasian Website](https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud).

Here is an overview of the workflow
  - Fork this repository.
  - Clone your copy into a convenient location on your computer. (If you haven't already installed a git client download and install one. Once you have a git client installed, open a Command Window (Right click on your folder while holding down the `Shift` key, and select the option, `Open Command Window Here`.
  
![Open Command Window](./_img/cmd.png "How to open a command line window on Windows")

```shell
C:\Users\<your windows user name>\Documents\Work\mlym-mozhi-Keyman> git clone https://github.com/<your github account name>/mlym-mozhi-Keyman.git
```
> Note: You can alternatively use [Git for Windows, "mingw"](https://git-for-windows.github.io/) if you are more familiar with a linux like terminal.

  - The Forking workflow requires two remotes (links to the public server repo). One to your own repo, which is already created when you cloned your personal public repo to your local system in the previous step. This remote is normally called the `origin`. Make a new remote `upstream` which will allow you to stay updated with the `official repo`. 
  
```shell
C:\Users\<your windows user name>\Documents\Work\mlym-mozhi-Keyman> git remote add upstream https://github.com/beniza/mlym-mozhi-Keyman.git
```
> Now, go ahead and list the remotes to see if everything looks good!

```shell
C:\Users\<your windows user name>\Documents\Work\mlym-mozhi-Keyman> git remote -v

origin  https://github.com/<your github account name>/mlym-mozhi.git (fetch)
origin  https://github.com/<your github account name>/mlym-mozhi.git (push)
upstream  https://github.com/beniza/mlym-mozhi.git (fetch)
upstream  https://github.com/beniza/mlym-mozhi.git (push)

```
  - Decide on an issue you wanted to contribute.
    - Please see the Issues page of this repo to see the pending issues. Please make an issue on the repo, if you haven't find the issue you are planning to contribute.
  - Create a new branch
  ```shell
  C:\Users\<your windows user name>\Documents\Work\mlym-mozhi-Keyman> git branch issue-#
  C:\Users\<your windows user name>\Documents\Work\mlym-mozhi-Keyman> git checkout issue-#
 ```
  > In `issue-#` replace # with the issue number you are trying to fix.

Now you are ready to make changes to the project. Open the Keyboard file using Keyman Developer. Add necessary changes to the code or documentation. The next step is to check in the changes you have made. Git will keep the track of the changes you are making to the project. By using the following commands, you can let git know that you have finished working on something, and also why you made that change. 
```shell
  C:\Users\<your windows user name>\Documents\Work\mlym-mozhi-Keyman> git status # This will list all the files you have made changes.
  C:\Users\<your windows user name>\Documents\Work\mlym-mozhi-Keyman> git add <filename> # <filename> specifies the name of the file you have edited.
  C:\Users\<your windows user name>\Documents\Work\mlym-mozhi-Keyman> git commit -m "A brief message answering the question, why you made this change" # <filename> specifies the name of the file you have edited.
```
> If you have changed the code, make sure that you test it thoroughly. Refer to the section explaining the [testing of a Keyman Keyboard](https://help.keyman.com/developer/9.0/guides/test/how-to-test-your-keyboard-layout-with-keyman-developer-9-touch-and-desktop) to learn how to test your Keyboard.

  - Once you are satisfied with the changes made, check in your changes. This is done in several steps. 
  
    - Save your work
    - Open or switch to your `terminal window`
    - List the files got changed in during the editing process
    
```shell
  C:\Users\<your windows user name>\Documents\Work\mlym-mozhi-Keyman> git status
```
> This step can help you remind about the changes you've made during your editing process.

    - `commit` your changes
```shell
  C:\Users\<your windows user name>\Documents\Work\mlym-mozhi-Keyman> git commit -a
```
> This will open up a new window, where you can give a commit message describing the changes you have made. Depending on the type of change you are making, this commit message can be a single line summary of the change or a very detailed explanation. For any major updates, we recommend that you include a good commit message that answer three questions about your patch:

> **Why is it necessary?** It may fix a bug, it may add a feature, it may improve performance, reliabilty, stability, or just be a change for the sake of correctness.

> **How does it address the issue?** For short obvious patches this part can be omitted, but it should be a high level description of what the approach was.

> **What effects does the patch have?** (In addition to the obvious ones, this may include benchmarks, side effects, etc.)
[Read more on Commit messages](http://who-t.blogspot.in/2009/12/on-commit-messages.html)

    - Update your `master` branch
    
    - `push` your commit to the remote `origin`
    - Create a `pull request` to the `upstream`
    
> Once we receive a pull request, one of us will review the changes and all the relevant changes will be integrated into the project.