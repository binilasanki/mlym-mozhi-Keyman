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
  this.KVER="9.0.523.0";
  this.gs=function(t,e) {
    return this.g_main(t,e);
  };
  this.g_main=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e,16400,65)) {   // Line 15
      r=m=1;
      k.KO(0,t,"ആ");
    }
    else if(k.KKM(e,16400,69)) {   // Line 15
      r=m=1;
      k.KO(0,t,"ഏ");
    }
    else if(k.KKM(e,16400,72)) {   // Line 15
      r=m=1;
      k.KO(0,t,"ഃ");
    }
    else if(k.KKM(e,16400,73)) {   // Line 15
      r=m=1;
      k.KO(0,t,"ഈ");
    }
    else if(k.KKM(e,16400,79)) {   // Line 15
      r=m=1;
      k.KO(0,t,"ഓ");
    }
    else if(k.KKM(e,16400,82)) {   // Line 15
      r=m=1;
      k.KO(0,t,"ഋ");
    }
    else if(k.KKM(e,16400,85)) {   // Line 15
      r=m=1;
      k.KO(0,t,"ഊ");
    }
    else if(k.KKM(e,16384,65)) {   // Line 15
      r=m=1;
      k.KO(0,t,"അ");
    }
    else if(k.KKM(e,16384,69)) {   // Line 15
      r=m=1;
      k.KO(0,t,"എ");
    }
    else if(k.KKM(e,16384,73)&&k.KCM(1,t,"അ",1)) {   // Line 16
      r=m=1;
      k.KO(1,t,"ഐ");
    }
    else if(k.KKM(e,16384,73)) {   // Line 15
      r=m=1;
      k.KO(0,t,"ഇ");
    }
    else if(k.KKM(e,16384,77)) {   // Line 15
      r=m=1;
      k.KO(0,t,"ം");
    }
    else if(k.KKM(e,16384,79)) {   // Line 15
      r=m=1;
      k.KO(0,t,"ഒ");
    }
    else if(k.KKM(e,16384,85)&&k.KCM(1,t,"അ",1)) {   // Line 17
      r=m=1;
      k.KO(1,t,"ഔ");
    }
    else if(k.KKM(e,16384,85)) {   // Line 15
      r=m=1;
      k.KO(0,t,"ഉ");
    }
    return r;
  };
}
