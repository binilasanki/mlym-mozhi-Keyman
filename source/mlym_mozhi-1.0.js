KeymanWeb.KR(new Keyboard_mlym_mozhi());
function Keyboard_mlym_mozhi()
{
  this.KI="Keyboard_mlym_mozhi";
  this.KN="Malayalam Mozhi Keyboard";
  this.KV=null;
  this.KH='';
  this.KM=0;
  this.KBVER="1.0";
  this.s_vowelsKeyStrokes="aAiIuUReEoOmH";
  this.s_vowelsMlym="അആഇഈഉഊഋഎഏഒഓംഃ";
  this.s_vowelsMatraKeyStrokes="AiIuUReEoOmH";
  this.s_vowelMatrasMlym="ാിീുൂൃെേൊോംഃ";
  this.s_simpleConsKeyStrokes="kgjTdDpbyvzsh";
  this.s_simpleConsMlym="കഗജടദഡപബയവശസഹ";
  this.s_unAspiratedConsMlym="കഗചജടതദഡപബ";
  this.s_aspiratedConsMlym="ഖഘഛഝഠഥധഢഫഭ";
  this.s_fluidsMlym="യരറലളഴവശഷസഹ";
  this.s_consMlym="കഗചജടതദഡപബഖഘഛഝഠഥധഢഫഭയരറലളഴവശഷസഹ";
  this.s_chilluKeyStrokes="NnrlLc";
  this.s_chilluMlym="ൺൻർൽൾൿ";
  this.s_chilluBase="ണനരലളക";
  this.s_chilluExtended="ംൺൻർൽൾൿ";
  this.s_chilluExtendedBase="മണനരലളക";
  this.KVER="9.0.526.0";
  this.gs=function(t,e) {
    return this.g_main(t,e);
  };
  this.g_main=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e,16400,222)&&k.KCM(1,t,"“",1)) {   // Line 92
      r=m=1;
      k.KO(1,t,"”");
    }
    else if(k.KKM(e,16400,222)&&k.KCM(1,t,"”",1)) {   // Line 93
      r=m=1;
      k.KO(1,t,"\"");
    }
    else if(k.KKM(e,16400,222)&&k.KCM(1,t,"\"",1)) {   // Line 94
      r=m=1;
      k.KO(1,t,"“");
    }
    else if(k.KKM(e,16400,222)) {   // Line 91
      r=m=1;
      k.KO(0,t,"“");
    }
    else if(k.KKM(e,16400,51)&&k.KCM(1,t,"ർ",1)) {   // Line 88
      r=m=1;
      k.KO(1,t,"ൎ");
    }
    else if(k.KKM(e,16400,56)&&k.KCM(1,t,"\\",1)) {   // Line 78
      r=m=1;
      k.KO(1,t,"×");
    }
    else if(k.KKM(e,16384,189)&&k.KCM(1,t,"\\",1)) {   // Line 80
      r=m=1;
      k.KO(1,t,"−");
    }
    else if(k.KKM(e,16384,191)&&k.KCM(2,t,"//",2)) {   // Line 85
      r=m=1;
      k.KO(2,t,"/");
    }
    else if(k.KKM(e,16384,191)&&k.KCM(1,t,"\\",1)) {   // Line 79
      r=m=1;
      k.KO(1,t,"÷");
    }
    else if(k.KKM(e,16384,191)&&k.KCM(1,t,"/",1)) {   // Line 83
      r=m=1;
      k.KO(1,t,"ഽ");
    }
    else if(k.KKM(e,16384,191)&&k.KCM(1,t,"ഽ",1)) {   // Line 84
      r=m=1;
      k.KO(1,t,"//");
    }
    else if(k.KKM(e,16400,65)&&k.KA(0,k.KC(2,1,t),this.s_unAspiratedConsMlym)&&k.KCM(1,t,"്",1)) {   // Line 63
      r=m=1;
      k.KIO(2,this.s_unAspiratedConsMlym,1,t);
      k.KO(-1,t,"ാ");
    }
    else if(k.KKM(e,16400,65)&&k.KA(0,k.KC(2,1,t),this.s_aspiratedConsMlym)&&k.KCM(1,t,"്",1)) {   // Line 64
      r=m=1;
      k.KIO(2,this.s_aspiratedConsMlym,1,t);
      k.KO(-1,t,"ാ");
    }
    else if(k.KKM(e,16400,65)&&k.KA(0,k.KC(2,1,t),this.s_fluidsMlym)&&k.KCM(1,t,"്",1)) {   // Line 65
      r=m=1;
      k.KIO(2,this.s_fluidsMlym,1,t);
      k.KO(-1,t,"ാ");
    }
    else if(k.KKM(e,16400,65)&&k.KA(0,k.KC(1,1,t),this.s_chilluExtended)) {   // Line 62
      r=m=1;
      k.KIO(1,this.s_chilluExtendedBase,1,t);
      k.KO(-1,t,"ാ");
    }
    else if(k.KKM(e,16400,65)) {   // Line 55
      r=m=1;
      k.KO(0,t,"ആ");
    }
    else if(k.KKM(e,16400,68)) {   // Line 53
      r=m=1;
      k.KO(0,t,"ഡ്");
    }
    else if(k.KKM(e,16400,69)&&k.KA(0,k.KC(2,1,t),this.s_unAspiratedConsMlym)&&k.KCM(1,t,"്",1)) {   // Line 63
      r=m=1;
      k.KIO(2,this.s_unAspiratedConsMlym,1,t);
      k.KO(-1,t,"േ");
    }
    else if(k.KKM(e,16400,69)&&k.KA(0,k.KC(2,1,t),this.s_aspiratedConsMlym)&&k.KCM(1,t,"്",1)) {   // Line 64
      r=m=1;
      k.KIO(2,this.s_aspiratedConsMlym,1,t);
      k.KO(-1,t,"േ");
    }
    else if(k.KKM(e,16400,69)&&k.KA(0,k.KC(2,1,t),this.s_fluidsMlym)&&k.KCM(1,t,"്",1)) {   // Line 65
      r=m=1;
      k.KIO(2,this.s_fluidsMlym,1,t);
      k.KO(-1,t,"േ");
    }
    else if(k.KKM(e,16400,69)&&k.KA(0,k.KC(1,1,t),this.s_chilluExtended)) {   // Line 62
      r=m=1;
      k.KIO(1,this.s_chilluExtendedBase,1,t);
      k.KO(-1,t,"േ");
    }
    else if(k.KKM(e,16400,69)) {   // Line 55
      r=m=1;
      k.KO(0,t,"ഏ");
    }
    else if(k.KKM(e,16400,72)&&k.KA(0,k.KC(2,1,t),this.s_unAspiratedConsMlym)&&k.KCM(1,t,"്",1)) {   // Line 63
      r=m=1;
      k.KIO(2,this.s_unAspiratedConsMlym,1,t);
      k.KO(-1,t,"ഃ");
    }
    else if(k.KKM(e,16400,72)&&k.KA(0,k.KC(2,1,t),this.s_aspiratedConsMlym)&&k.KCM(1,t,"്",1)) {   // Line 64
      r=m=1;
      k.KIO(2,this.s_aspiratedConsMlym,1,t);
      k.KO(-1,t,"ഃ");
    }
    else if(k.KKM(e,16400,72)&&k.KA(0,k.KC(2,1,t),this.s_fluidsMlym)&&k.KCM(1,t,"്",1)) {   // Line 65
      r=m=1;
      k.KIO(2,this.s_fluidsMlym,1,t);
      k.KO(-1,t,"ഃ");
    }
    else if(k.KKM(e,16400,72)&&k.KA(0,k.KC(1,1,t),this.s_chilluExtended)) {   // Line 62
      r=m=1;
      k.KIO(1,this.s_chilluExtendedBase,1,t);
      k.KO(-1,t,"ഃ");
    }
    else if(k.KKM(e,16400,72)) {   // Line 55
      r=m=1;
      k.KO(0,t,"ഃ");
    }
    else if(k.KKM(e,16400,73)&&k.KA(0,k.KC(2,1,t),this.s_unAspiratedConsMlym)&&k.KCM(1,t,"്",1)) {   // Line 63
      r=m=1;
      k.KIO(2,this.s_unAspiratedConsMlym,1,t);
      k.KO(-1,t,"ീ");
    }
    else if(k.KKM(e,16400,73)&&k.KA(0,k.KC(2,1,t),this.s_aspiratedConsMlym)&&k.KCM(1,t,"്",1)) {   // Line 64
      r=m=1;
      k.KIO(2,this.s_aspiratedConsMlym,1,t);
      k.KO(-1,t,"ീ");
    }
    else if(k.KKM(e,16400,73)&&k.KA(0,k.KC(2,1,t),this.s_fluidsMlym)&&k.KCM(1,t,"്",1)) {   // Line 65
      r=m=1;
      k.KIO(2,this.s_fluidsMlym,1,t);
      k.KO(-1,t,"ീ");
    }
    else if(k.KKM(e,16400,73)&&k.KA(0,k.KC(1,1,t),this.s_chilluExtended)) {   // Line 62
      r=m=1;
      k.KIO(1,this.s_chilluExtendedBase,1,t);
      k.KO(-1,t,"ീ");
    }
    else if(k.KKM(e,16400,73)) {   // Line 55
      r=m=1;
      k.KO(0,t,"ഈ");
    }
    else if(k.KKM(e,16400,76)) {   // Line 54
      r=m=1;
      k.KO(0,t,"ൾ");
    }
    else if(k.KKM(e,16400,78)) {   // Line 54
      r=m=1;
      k.KO(0,t,"ൺ");
    }
    else if(k.KKM(e,16400,79)&&k.KA(0,k.KC(2,1,t),this.s_unAspiratedConsMlym)&&k.KCM(1,t,"്",1)) {   // Line 63
      r=m=1;
      k.KIO(2,this.s_unAspiratedConsMlym,1,t);
      k.KO(-1,t,"ോ");
    }
    else if(k.KKM(e,16400,79)&&k.KA(0,k.KC(2,1,t),this.s_aspiratedConsMlym)&&k.KCM(1,t,"്",1)) {   // Line 64
      r=m=1;
      k.KIO(2,this.s_aspiratedConsMlym,1,t);
      k.KO(-1,t,"ോ");
    }
    else if(k.KKM(e,16400,79)&&k.KA(0,k.KC(2,1,t),this.s_fluidsMlym)&&k.KCM(1,t,"്",1)) {   // Line 65
      r=m=1;
      k.KIO(2,this.s_fluidsMlym,1,t);
      k.KO(-1,t,"ോ");
    }
    else if(k.KKM(e,16400,79)&&k.KA(0,k.KC(1,1,t),this.s_chilluExtended)) {   // Line 62
      r=m=1;
      k.KIO(1,this.s_chilluExtendedBase,1,t);
      k.KO(-1,t,"ോ");
    }
    else if(k.KKM(e,16400,79)) {   // Line 55
      r=m=1;
      k.KO(0,t,"ഓ");
    }
    else if(k.KKM(e,16400,82)&&k.KA(0,k.KC(2,1,t),this.s_unAspiratedConsMlym)&&k.KCM(1,t,"്",1)) {   // Line 63
      r=m=1;
      k.KIO(2,this.s_unAspiratedConsMlym,1,t);
      k.KO(-1,t,"ൃ");
    }
    else if(k.KKM(e,16400,82)&&k.KA(0,k.KC(2,1,t),this.s_aspiratedConsMlym)&&k.KCM(1,t,"്",1)) {   // Line 64
      r=m=1;
      k.KIO(2,this.s_aspiratedConsMlym,1,t);
      k.KO(-1,t,"ൃ");
    }
    else if(k.KKM(e,16400,82)&&k.KA(0,k.KC(2,1,t),this.s_fluidsMlym)&&k.KCM(1,t,"്",1)) {   // Line 65
      r=m=1;
      k.KIO(2,this.s_fluidsMlym,1,t);
      k.KO(-1,t,"ൃ");
    }
    else if(k.KKM(e,16400,82)&&k.KCM(1,t,"ഋ",1)) {   // Line 45
      r=m=1;
      k.KO(1,t,"ൠ");
    }
    else if(k.KKM(e,16400,82)&&k.KA(0,k.KC(1,1,t),this.s_chilluExtended)) {   // Line 62
      r=m=1;
      k.KIO(1,this.s_chilluExtendedBase,1,t);
      k.KO(-1,t,"ൃ");
    }
    else if(k.KKM(e,16400,82)) {   // Line 55
      r=m=1;
      k.KO(0,t,"ഋ");
    }
    else if(k.KKM(e,16400,84)) {   // Line 53
      r=m=1;
      k.KO(0,t,"ട്");
    }
    else if(k.KKM(e,16400,85)&&k.KA(0,k.KC(2,1,t),this.s_unAspiratedConsMlym)&&k.KCM(1,t,"്",1)) {   // Line 63
      r=m=1;
      k.KIO(2,this.s_unAspiratedConsMlym,1,t);
      k.KO(-1,t,"ൂ");
    }
    else if(k.KKM(e,16400,85)&&k.KA(0,k.KC(2,1,t),this.s_aspiratedConsMlym)&&k.KCM(1,t,"്",1)) {   // Line 64
      r=m=1;
      k.KIO(2,this.s_aspiratedConsMlym,1,t);
      k.KO(-1,t,"ൂ");
    }
    else if(k.KKM(e,16400,85)&&k.KA(0,k.KC(2,1,t),this.s_fluidsMlym)&&k.KCM(1,t,"്",1)) {   // Line 65
      r=m=1;
      k.KIO(2,this.s_fluidsMlym,1,t);
      k.KO(-1,t,"ൂ");
    }
    else if(k.KKM(e,16400,85)&&k.KA(0,k.KC(1,1,t),this.s_chilluExtended)) {   // Line 62
      r=m=1;
      k.KIO(1,this.s_chilluExtendedBase,1,t);
      k.KO(-1,t,"ൂ");
    }
    else if(k.KKM(e,16400,85)) {   // Line 55
      r=m=1;
      k.KO(0,t,"ഊ");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(1,t,"−",1)) {   // Line 97
      r=m=1;
      k.KO(1,t,"-");
    }
    else if(k.KKM(e,16384,220)&&k.KCM(1,t,"×",1)) {   // Line 100
      r=m=1;
      k.KO(1,t,"*");
    }
    else if(k.KKM(e,16384,65)&&k.KCM(1,t,"അ",1)) {   // Line 32
      r=m=1;
      k.KO(1,t,"ആ");
    }
    else if(k.KKM(e,16384,65)&&k.KA(0,k.KC(1,1,t),this.s_consMlym)) {   // Line 34
      r=m=1;
      k.KIO(1,this.s_consMlym,1,t);
      k.KO(-1,t,"ാ");
    }
    else if(k.KKM(e,16384,65)&&k.KCM(1,t,"്",1)) {   // Line 58
      r=m=1;
      k.KO(1,t,"");
    }
    else if(k.KKM(e,16384,65)&&k.KA(0,k.KC(1,1,t),this.s_chilluExtended)) {   // Line 61
      r=m=1;
      k.KIO(1,this.s_chilluExtendedBase,1,t);
    }
    else if(k.KKM(e,16384,65)) {   // Line 55
      r=m=1;
      k.KO(0,t,"അ");
    }
    else if(k.KKM(e,16384,66)) {   // Line 53
      r=m=1;
      k.KO(0,t,"ബ്");
    }
    else if(k.KKM(e,16384,67)) {   // Line 54
      r=m=1;
      k.KO(0,t,"ൿ");
    }
    else if(k.KKM(e,16384,68)) {   // Line 53
      r=m=1;
      k.KO(0,t,"ദ്");
    }
    else if(k.KKM(e,16384,69)&&k.KA(0,k.KC(2,1,t),this.s_unAspiratedConsMlym)&&k.KCM(1,t,"്",1)) {   // Line 63
      r=m=1;
      k.KIO(2,this.s_unAspiratedConsMlym,1,t);
      k.KO(-1,t,"െ");
    }
    else if(k.KKM(e,16384,69)&&k.KA(0,k.KC(2,1,t),this.s_aspiratedConsMlym)&&k.KCM(1,t,"്",1)) {   // Line 64
      r=m=1;
      k.KIO(2,this.s_aspiratedConsMlym,1,t);
      k.KO(-1,t,"െ");
    }
    else if(k.KKM(e,16384,69)&&k.KA(0,k.KC(2,1,t),this.s_fluidsMlym)&&k.KCM(1,t,"്",1)) {   // Line 65
      r=m=1;
      k.KIO(2,this.s_fluidsMlym,1,t);
      k.KO(-1,t,"െ");
    }
    else if(k.KKM(e,16384,69)&&k.KA(0,k.KC(1,1,t),this.s_chilluExtended)) {   // Line 62
      r=m=1;
      k.KIO(1,this.s_chilluExtendedBase,1,t);
      k.KO(-1,t,"െ");
    }
    else if(k.KKM(e,16384,69)) {   // Line 55
      r=m=1;
      k.KO(0,t,"എ");
    }
    else if(k.KKM(e,16384,71)&&k.KCM(1,t,"ൻ",1)) {   // Line 67
      r=m=1;
      k.KO(1,t,"ങ്");
    }
    else if(k.KKM(e,16384,71)) {   // Line 53
      r=m=1;
      k.KO(0,t,"ഗ്");
    }
    else if(k.KKM(e,16384,72)&&k.KCM(3,t,"റ്റ",3)) {   // Line 50
      r=m=1;
      k.KO(3,t,"ത്");
    }
    else if(k.KKM(e,16384,72)&&k.KCM(2,t,"ച്",2)) {   // Line 70
      r=m=1;
      k.KO(2,t,"ഛ്");
    }
    else if(k.KKM(e,16384,72)&&k.KCM(2,t,"സ്",2)) {   // Line 71
      r=m=1;
      k.KO(2,t,"ഷ്");
    }
    else if(k.KKM(e,16384,72)&&k.KCM(2,t,"ൻൿ",2)) {   // Line 72
      r=m=1;
      k.KO(2,t,"ഞ്ച്");
    }
    else if(k.KKM(e,16384,72)&&k.KA(0,k.KC(2,1,t),this.s_unAspiratedConsMlym)&&k.KCM(1,t,"്",1)) {   // Line 75
      r=m=1;
      k.KIO(2,this.s_aspiratedConsMlym,1,t);
      k.KO(-1,t,"്");
    }
    else if(k.KKM(e,16384,72)&&k.KCM(1,t,"ൿ",1)) {   // Line 69
      r=m=1;
      k.KO(1,t,"ച്");
    }
    else if(k.KKM(e,16384,72)) {   // Line 53
      r=m=1;
      k.KO(0,t,"ഹ്");
    }
    else if(k.KKM(e,16384,73)&&k.KA(0,k.KC(2,1,t),this.s_unAspiratedConsMlym)&&k.KCM(1,t,"്",1)) {   // Line 63
      r=m=1;
      k.KIO(2,this.s_unAspiratedConsMlym,1,t);
      k.KO(-1,t,"ി");
    }
    else if(k.KKM(e,16384,73)&&k.KA(0,k.KC(2,1,t),this.s_aspiratedConsMlym)&&k.KCM(1,t,"്",1)) {   // Line 64
      r=m=1;
      k.KIO(2,this.s_aspiratedConsMlym,1,t);
      k.KO(-1,t,"ി");
    }
    else if(k.KKM(e,16384,73)&&k.KA(0,k.KC(2,1,t),this.s_fluidsMlym)&&k.KCM(1,t,"്",1)) {   // Line 65
      r=m=1;
      k.KIO(2,this.s_fluidsMlym,1,t);
      k.KO(-1,t,"ി");
    }
    else if(k.KKM(e,16384,73)&&k.KCM(1,t,"അ",1)) {   // Line 33
      r=m=1;
      k.KO(1,t,"ഐ");
    }
    else if(k.KKM(e,16384,73)&&k.KA(0,k.KC(1,1,t),this.s_consMlym)) {   // Line 35
      r=m=1;
      k.KIO(1,this.s_consMlym,1,t);
      k.KO(-1,t,"ൈ");
    }
    else if(k.KKM(e,16384,73)&&k.KCM(1,t,"ഇ",1)) {   // Line 39
      r=m=1;
      k.KO(1,t,"ഈ");
    }
    else if(k.KKM(e,16384,73)&&k.KCM(1,t,"ി",1)) {   // Line 40
      r=m=1;
      k.KO(1,t,"ീ");
    }
    else if(k.KKM(e,16384,73)&&k.KA(0,k.KC(1,1,t),this.s_chilluExtended)) {   // Line 62
      r=m=1;
      k.KIO(1,this.s_chilluExtendedBase,1,t);
      k.KO(-1,t,"ി");
    }
    else if(k.KKM(e,16384,73)) {   // Line 55
      r=m=1;
      k.KO(0,t,"ഇ");
    }
    else if(k.KKM(e,16384,74)) {   // Line 53
      r=m=1;
      k.KO(0,t,"ജ്");
    }
    else if(k.KKM(e,16384,75)) {   // Line 53
      r=m=1;
      k.KO(0,t,"ക്");
    }
    else if(k.KKM(e,16384,76)) {   // Line 54
      r=m=1;
      k.KO(0,t,"ൽ");
    }
    else if(k.KKM(e,16384,77)&&k.KA(0,k.KC(2,1,t),this.s_unAspiratedConsMlym)&&k.KCM(1,t,"്",1)) {   // Line 63
      r=m=1;
      k.KIO(2,this.s_unAspiratedConsMlym,1,t);
      k.KO(-1,t,"ം");
    }
    else if(k.KKM(e,16384,77)&&k.KA(0,k.KC(2,1,t),this.s_aspiratedConsMlym)&&k.KCM(1,t,"്",1)) {   // Line 64
      r=m=1;
      k.KIO(2,this.s_aspiratedConsMlym,1,t);
      k.KO(-1,t,"ം");
    }
    else if(k.KKM(e,16384,77)&&k.KA(0,k.KC(2,1,t),this.s_fluidsMlym)&&k.KCM(1,t,"്",1)) {   // Line 65
      r=m=1;
      k.KIO(2,this.s_fluidsMlym,1,t);
      k.KO(-1,t,"ം");
    }
    else if(k.KKM(e,16384,77)&&k.KA(0,k.KC(1,1,t),this.s_chilluExtended)) {   // Line 62
      r=m=1;
      k.KIO(1,this.s_chilluExtendedBase,1,t);
      k.KO(-1,t,"ം");
    }
    else if(k.KKM(e,16384,77)) {   // Line 55
      r=m=1;
      k.KO(0,t,"ം");
    }
    else if(k.KKM(e,16384,78)&&k.KCM(1,t,"ൻ",1)) {   // Line 47
      r=m=1;
      k.KO(1,t,"ന്ന്");
    }
    else if(k.KKM(e,16384,78)) {   // Line 54
      r=m=1;
      k.KO(0,t,"ൻ");
    }
    else if(k.KKM(e,16384,79)&&k.KA(0,k.KC(2,1,t),this.s_unAspiratedConsMlym)&&k.KCM(1,t,"്",1)) {   // Line 63
      r=m=1;
      k.KIO(2,this.s_unAspiratedConsMlym,1,t);
      k.KO(-1,t,"ൊ");
    }
    else if(k.KKM(e,16384,79)&&k.KA(0,k.KC(2,1,t),this.s_aspiratedConsMlym)&&k.KCM(1,t,"്",1)) {   // Line 64
      r=m=1;
      k.KIO(2,this.s_aspiratedConsMlym,1,t);
      k.KO(-1,t,"ൊ");
    }
    else if(k.KKM(e,16384,79)&&k.KA(0,k.KC(2,1,t),this.s_fluidsMlym)&&k.KCM(1,t,"്",1)) {   // Line 65
      r=m=1;
      k.KIO(2,this.s_fluidsMlym,1,t);
      k.KO(-1,t,"ൊ");
    }
    else if(k.KKM(e,16384,79)&&k.KCM(1,t,"ഒ",1)) {   // Line 43
      r=m=1;
      k.KO(1,t,"ഊ");
    }
    else if(k.KKM(e,16384,79)&&k.KCM(1,t,"ൊ",1)) {   // Line 44
      r=m=1;
      k.KO(1,t,"ൂ");
    }
    else if(k.KKM(e,16384,79)&&k.KA(0,k.KC(1,1,t),this.s_chilluExtended)) {   // Line 62
      r=m=1;
      k.KIO(1,this.s_chilluExtendedBase,1,t);
      k.KO(-1,t,"ൊ");
    }
    else if(k.KKM(e,16384,79)) {   // Line 55
      r=m=1;
      k.KO(0,t,"ഒ");
    }
    else if(k.KKM(e,16384,80)) {   // Line 53
      r=m=1;
      k.KO(0,t,"പ്");
    }
    else if(k.KKM(e,16384,82)&&k.KCM(1,t,"ർ",1)) {   // Line 46
      r=m=1;
      k.KO(1,t,"റ്");
    }
    else if(k.KKM(e,16384,82)) {   // Line 54
      r=m=1;
      k.KO(0,t,"ർ");
    }
    else if(k.KKM(e,16384,83)) {   // Line 53
      r=m=1;
      k.KO(0,t,"സ്");
    }
    else if(k.KKM(e,16384,84)) {   // Line 49
      r=m=1;
      k.KO(0,t,"റ്റ");
    }
    else if(k.KKM(e,16384,85)&&k.KA(0,k.KC(2,1,t),this.s_unAspiratedConsMlym)&&k.KCM(1,t,"്",1)) {   // Line 63
      r=m=1;
      k.KIO(2,this.s_unAspiratedConsMlym,1,t);
      k.KO(-1,t,"ു");
    }
    else if(k.KKM(e,16384,85)&&k.KA(0,k.KC(2,1,t),this.s_aspiratedConsMlym)&&k.KCM(1,t,"്",1)) {   // Line 64
      r=m=1;
      k.KIO(2,this.s_aspiratedConsMlym,1,t);
      k.KO(-1,t,"ു");
    }
    else if(k.KKM(e,16384,85)&&k.KA(0,k.KC(2,1,t),this.s_fluidsMlym)&&k.KCM(1,t,"്",1)) {   // Line 65
      r=m=1;
      k.KIO(2,this.s_fluidsMlym,1,t);
      k.KO(-1,t,"ു");
    }
    else if(k.KKM(e,16384,85)&&k.KA(0,k.KC(1,1,t),this.s_consMlym)) {   // Line 36
      r=m=1;
      k.KIO(1,this.s_consMlym,1,t);
      k.KO(-1,t,"ൌ");
    }
    else if(k.KKM(e,16384,85)&&k.KCM(1,t,"അ",1)) {   // Line 38
      r=m=1;
      k.KO(1,t,"ഔ");
    }
    else if(k.KKM(e,16384,85)&&k.KCM(1,t,"ഉ",1)) {   // Line 41
      r=m=1;
      k.KO(1,t,"ഊ");
    }
    else if(k.KKM(e,16384,85)&&k.KCM(1,t,"ു",1)) {   // Line 42
      r=m=1;
      k.KO(1,t,"ൂ");
    }
    else if(k.KKM(e,16384,85)&&k.KA(0,k.KC(1,1,t),this.s_chilluExtended)) {   // Line 62
      r=m=1;
      k.KIO(1,this.s_chilluExtendedBase,1,t);
      k.KO(-1,t,"ു");
    }
    else if(k.KKM(e,16384,85)) {   // Line 55
      r=m=1;
      k.KO(0,t,"ഉ");
    }
    else if(k.KKM(e,16384,86)) {   // Line 53
      r=m=1;
      k.KO(0,t,"വ്");
    }
    else if(k.KKM(e,16384,88)) {   // Line 51
      r=m=1;
      k.KO(0,t,"്");
    }
    else if(k.KKM(e,16384,89)) {   // Line 53
      r=m=1;
      k.KO(0,t,"യ്");
    }
    else if(k.KKM(e,16384,90)) {   // Line 53
      r=m=1;
      k.KO(0,t,"ശ്");
    }
    return r;
  };
}
