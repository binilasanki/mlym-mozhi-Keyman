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
  this.s_simpleConsKeyStrokes="kgjTdDpbyvzsh";
  this.s_simpleConsMlym="കഗജടദഡപബയവശസഹ";
  this.s_chilluKeyStrokes="NnrlLc";
  this.s_chilluMlym="ൺൻർൽൾൿ";
  this.s_chilluBase="ണനരലളക";
  this.KVER="9.0.523.0";
  this.gs=function(t,e) {
    return this.g_main(t,e);
  };
  this.g_main=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e,16400,65)) {   // Line 30
      r=m=1;
      k.KO(0,t,"ആ");
    }
    else if(k.KKM(e,16400,68)) {   // Line 25
      r=m=1;
      k.KO(0,t,"ഡ്");
    }
    else if(k.KKM(e,16400,69)) {   // Line 30
      r=m=1;
      k.KO(0,t,"ഏ");
    }
    else if(k.KKM(e,16400,72)) {   // Line 30
      r=m=1;
      k.KO(0,t,"ഃ");
    }
    else if(k.KKM(e,16400,73)) {   // Line 30
      r=m=1;
      k.KO(0,t,"ഈ");
    }
    else if(k.KKM(e,16400,76)) {   // Line 26
      r=m=1;
      k.KO(0,t,"ൾ");
    }
    else if(k.KKM(e,16400,78)) {   // Line 26
      r=m=1;
      k.KO(0,t,"ൺ");
    }
    else if(k.KKM(e,16400,79)) {   // Line 30
      r=m=1;
      k.KO(0,t,"ഓ");
    }
    else if(k.KKM(e,16400,82)) {   // Line 30
      r=m=1;
      k.KO(0,t,"ഋ");
    }
    else if(k.KKM(e,16400,84)) {   // Line 25
      r=m=1;
      k.KO(0,t,"ട്");
    }
    else if(k.KKM(e,16400,85)) {   // Line 30
      r=m=1;
      k.KO(0,t,"ഊ");
    }
    else if(k.KKM(e,16384,65)&&k.KA(0,k.KC(2,1,t),this.s_simpleConsMlym)&&k.KCM(1,t,"്",1)) {   // Line 28
      r=m=1;
      k.KIO(2,this.s_simpleConsMlym,1,t);
    }
    else if(k.KKM(e,16384,65)&&k.KA(0,k.KC(1,1,t),this.s_chilluMlym)) {   // Line 29
      r=m=1;
      k.KIO(1,this.s_chilluBase,1,t);
    }
    else if(k.KKM(e,16384,65)) {   // Line 30
      r=m=1;
      k.KO(0,t,"അ");
    }
    else if(k.KKM(e,16384,66)) {   // Line 25
      r=m=1;
      k.KO(0,t,"ബ്");
    }
    else if(k.KKM(e,16384,67)) {   // Line 26
      r=m=1;
      k.KO(0,t,"ൿ");
    }
    else if(k.KKM(e,16384,68)) {   // Line 25
      r=m=1;
      k.KO(0,t,"ദ്");
    }
    else if(k.KKM(e,16384,69)) {   // Line 30
      r=m=1;
      k.KO(0,t,"എ");
    }
    else if(k.KKM(e,16384,71)) {   // Line 25
      r=m=1;
      k.KO(0,t,"ഗ്");
    }
    else if(k.KKM(e,16384,72)) {   // Line 25
      r=m=1;
      k.KO(0,t,"ഹ്");
    }
    else if(k.KKM(e,16384,73)&&k.KCM(1,t,"അ",1)) {   // Line 22
      r=m=1;
      k.KO(1,t,"ഐ");
    }
    else if(k.KKM(e,16384,73)) {   // Line 30
      r=m=1;
      k.KO(0,t,"ഇ");
    }
    else if(k.KKM(e,16384,74)) {   // Line 25
      r=m=1;
      k.KO(0,t,"ജ്");
    }
    else if(k.KKM(e,16384,75)) {   // Line 25
      r=m=1;
      k.KO(0,t,"ക്");
    }
    else if(k.KKM(e,16384,76)) {   // Line 26
      r=m=1;
      k.KO(0,t,"ൽ");
    }
    else if(k.KKM(e,16384,77)) {   // Line 30
      r=m=1;
      k.KO(0,t,"ം");
    }
    else if(k.KKM(e,16384,78)) {   // Line 26
      r=m=1;
      k.KO(0,t,"ൻ");
    }
    else if(k.KKM(e,16384,79)) {   // Line 30
      r=m=1;
      k.KO(0,t,"ഒ");
    }
    else if(k.KKM(e,16384,80)) {   // Line 25
      r=m=1;
      k.KO(0,t,"പ്");
    }
    else if(k.KKM(e,16384,82)) {   // Line 26
      r=m=1;
      k.KO(0,t,"ർ");
    }
    else if(k.KKM(e,16384,83)) {   // Line 25
      r=m=1;
      k.KO(0,t,"സ്");
    }
    else if(k.KKM(e,16384,85)&&k.KCM(1,t,"അ",1)) {   // Line 23
      r=m=1;
      k.KO(1,t,"ഔ");
    }
    else if(k.KKM(e,16384,85)) {   // Line 30
      r=m=1;
      k.KO(0,t,"ഉ");
    }
    else if(k.KKM(e,16384,86)) {   // Line 25
      r=m=1;
      k.KO(0,t,"വ്");
    }
    else if(k.KKM(e,16384,89)) {   // Line 25
      r=m=1;
      k.KO(0,t,"യ്");
    }
    else if(k.KKM(e,16384,90)) {   // Line 25
      r=m=1;
      k.KO(0,t,"ശ്");
    }
    return r;
  };
}
