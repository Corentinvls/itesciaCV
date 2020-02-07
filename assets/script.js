//slider skills
var slideIndex = 1;
showClientsDivs(slideIndex);

function plusClientsDivs(n) {
    showClientsDivs(slideIndex += n);
}

function currentClientsDiv(n) {
    showClientsDivs(slideIndex = n);
}

function showClientsDivs(n) {
    let i;
    const x = document.getElementsByClassName("slidesClients");
    const dots = document.getElementsByClassName("indicatorClients");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" activeSliderIndicator", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " activeSliderIndicator";
}

/*------ Section nombre pour histoire vrai ------*/

const d1 = new Date(2019, 9, 9);
const d2 = new Date();
const dDiff = new Date(d2 - d1);
//dif en jour
let nbDay = (dDiff.getTime() / 86400000);
//nombre d'heure avant d'avoir intégrer itescia les vancances
let hcode = 80;

while (nbDay >= 1) {
    for (let i = 0; i <= 6; i++) {
        if (i !== 0 && i !== 6) {
            hcode += 8;
        }
    }
    nbDay -= 6;
}

//c'est vital
const nbCaf = Math.round(hcode / 3);

document.getElementById("codingHour").innerHTML = hcode;
document.getElementById("nbCaf").innerHTML = nbCaf;
