// tady je místo pro náš program


let nadpis = document.querySelector("h1");
nadpis.classList.add("zluty");

nadpis.classList.add("zluty");
let ctverecek = document.querySelector("div.zluty");

let pocitadlo = 0;
let odstavec = document.querySelector(".odstavec");



/*function zmenStyl(){

    let ctverecek = document.querySelector("div.zluty");

}
/*tlacitko = console.log("test" + pocitadlo);
    pocitadlo++; */

function ztucni() {
 
    odstavec.style.fontWeight = "bold"; 
}
  
  function odtucni() {
   
        odstavec.style.fontWeight = "normal";   
  }

function poKliknutiCerveny()  {

    let tlacitkoCervene = document.getElementById("cervene");
  
    tlacitkoCervene.style.backgroundColor = "red";
}

function poKliknutiVetsi() {
    let velikost1 = 11;
    let velikost2 = 21;
    let tlacitkoVetsi = document.getElementById("poKliknutiVetsi");
    tlacitkoVetsi.style.padding = velikost1 + "px" + velikost2 + "px";
    velikost1++;
    velikost2++;
}
  

function prehraj() {

    let audioFile = document.getElementById("zvukovaStopa");
    audioFile.play();
}

function zastav() {

    let audioFile = document.getElementById("zvukovaStopa");
   audioFile.pause();
}

function min() {

    let audioFile = document.getElementById("zvukovaStopa")
    audioFile.volume = 0;
    
  }

  function stred() {

    let audioFile = document.getElementById("zvukovaStopa")
    audioFile.volume = 0.5;
    
  }
  function max() {

    let audioFile = document.getElementById("zvukovaStopa")
    audioFile.volume = 1;
    
  }

  function vratSe() {

    let audioFile = document.getElementById("zvukovaStopa")
    audioFile.currentTime = 0;
    
  }