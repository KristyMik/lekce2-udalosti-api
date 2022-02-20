


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

    // let tlacitkoCervene = document.getElementById("text");
    let tlacitkoCervene = document.querySelector(".odstavec");
    tlacitkoCervene.classList.toggle("cervenyText");
}

let velikostTextu = getComputedStyle(document.querySelector(".odstavec")).fontSize;
console.log(velikostTextu);

let velikost = 27;

function poKliknutiVetsi() {
    
   // let tlacitkoVetsi = document.getElementById("text");
    let tlacitkoVetsi = document.querySelector(".odstavec");
    tlacitkoVetsi.style.fontSize = velikost + "px";
    velikost++;
    
}

let audioFile = document.getElementById("zvukovaStopa");

function prehraj() {

    audioFile.play();
}

function zastav() {

    audioFile.pause();
}

function min() {

       audioFile.volume = 0;
    
  }

  function stred() {

    audioFile.volume = 0.5;
    
  }
  function max() {

    audioFile.volume = 1;
    
  }

  function vratSe() {

    audioFile.currentTime = 0;
    
  }