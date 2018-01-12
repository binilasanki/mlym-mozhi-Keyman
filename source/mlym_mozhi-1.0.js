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
  this.s_vowelMatrasMlym="ഽാിീുൂൃെേൊോംഃ";
  this.s_simpleConsKeyStrokes="kgjTDNnpbmyrlvzsh";
  this.s_simpleConsMlym="ക്ഗ്ജ്ട്ഡ്ൺൻപ്ബ്മ്യ്ർല്വ്ശ്സ്ഹ്";
  this.KVER="9.0.523.0";
  this.gs=function(t,e) {
    return this.g_main(t,e);
  };
  this.g_main=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    if(k.KKM(e,16400,65)) {   // Line 18
      r=m=1;
      k.KO(0,t,"ആ");
    }
    else if(k.KKM(e,16400,68)) {   // Line 22
      r=m=1;
      k.KO(0,t,"ജ");
    }
    else if(k.KKM(e,16400,69)) {   // Line 18
      r=m=1;
      k.KO(0,t,"ഏ");
    }
    else if(k.KKM(e,16400,72)) {   // Line 18
      r=m=1;
      k.KO(0,t,"ഃ");
    }
    else if(k.KKM(e,16400,73)) {   // Line 18
      r=m=1;
      k.KO(0,t,"ഈ");
    }
    else if(k.KKM(e,16400,78)) {   // Line 22
      r=m=1;
      k.KO(0,t,"്");
    }
    else if(k.KKM(e,16400,79)) {   // Line 18
      r=m=1;
      k.KO(0,t,"ഓ");
    }
    else if(k.KKM(e,16400,82)) {   // Line 18
      r=m=1;
      k.KO(0,t,"ഋ");
    }
    else if(k.KKM(e,16400,84)) {   // Line 22
      r=m=1;
      k.KO(0,t,"്");
    }
    else if(k.KKM(e,16400,85)) {   // Line 18
      r=m=1;
      k.KO(0,t,"ഊ");
    }
    else if(k.KKM(e,16384,65)) {   // Line 18
      r=m=1;
      k.KO(0,t,"അ");
    }
    else if(k.KKM(e,16384,66)) {   // Line 22
      r=m=1;
      k.KO(0,t,"ഡ");
    }
    else if(k.KKM(e,16384,69)) {   // Line 18
      r=m=1;
      k.KO(0,t,"എ");
    }
    else if(k.KKM(e,16384,71)) {   // Line 22
      r=m=1;
      k.KO(0,t,"്");
    }
    else if(k.KKM(e,16384,72)) {   // Line 22
      r=m=1;
      k.KO(0,t,"മ");
    }
    else if(k.KKM(e,16384,73)&&k.KCM(1,t,"അ",1)) {   // Line 19
      r=m=1;
      k.KO(1,t,"ഐ");
    }
    else if(k.KKM(e,16384,73)) {   // Line 18
      r=m=1;
      k.KO(0,t,"ഇ");
    }
    else if(k.KKM(e,16384,74)) {   // Line 22
      r=m=1;
      k.KO(0,t,"ഗ");
    }
    else if(k.KKM(e,16384,75)) {   // Line 22
      r=m=1;
      k.KO(0,t,"ക");
    }
    else if(k.KKM(e,16384,76)) {   // Line 22
      r=m=1;
      k.KO(0,t,"പ");
    }
    else if(k.KKM(e,16384,77)) {   // Line 18
      r=m=1;
      k.KO(0,t,"ം");
    }
    else if(k.KKM(e,16384,77)) {   // Line 22
      r=m=1;
      k.KO(0,t,"്");
    }
    else if(k.KKM(e,16384,78)) {   // Line 22
      r=m=1;
      k.KO(0,t,"ട");
    }
    else if(k.KKM(e,16384,79)) {   // Line 18
      r=m=1;
      k.KO(0,t,"ഒ");
    }
    else if(k.KKM(e,16384,80)) {   // Line 22
      r=m=1;
      k.KO(0,t,"്");
    }
    else if(k.KKM(e,16384,82)) {   // Line 22
      r=m=1;
      k.KO(0,t,"ൻ");
    }
    else if(k.KKM(e,16384,83)) {   // Line 22
      r=m=1;
      k.KO(0,t,"്");
    }
    else if(k.KKM(e,16384,85)&&k.KCM(1,t,"അ",1)) {   // Line 20
      r=m=1;
      k.KO(1,t,"ഔ");
    }
    else if(k.KKM(e,16384,85)) {   // Line 18
      r=m=1;
      k.KO(0,t,"ഉ");
    }
    else if(k.KKM(e,16384,86)) {   // Line 22
      r=m=1;
      k.KO(0,t,"്");
    }
    else if(k.KKM(e,16384,89)) {   // Line 22
      r=m=1;
      k.KO(0,t,"ൺ");
    }
    else if(k.KKM(e,16384,90)) {   // Line 22
      r=m=1;
      k.KO(0,t,"ബ");
    }
    return r;
  };
}
