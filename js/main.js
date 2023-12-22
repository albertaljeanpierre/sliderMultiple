// Paramétrage de l'application 
///////////////////////////////
const sliderWidth = "300px";        // Largeur du slider (en pixel)
const sliderHeigth = "300px";       // Hauteur du slider (en pixel)
const slidesBottom = "100px";        // Hauteur en dessous du slider (en pixel) = zone de séparation 
const imagesURL = [];               // Contient l'ensemble des URL des images





////////////////////////////////////
// NE PAS TOUCHER AU CODE CI-APRÉS 
///////////////////////////////////

const slidersElements = document.getElementsByClassName('slider');


function init(sliderNumber) {

    sliderContent = slidersElements[sliderNumber].querySelector('.slider-content');
    console.log(sliderContent);
    sliderContent.style.width = sliderWidth;
    sliderContent.style.height = sliderHeigth;
    sliderContent.style.marginBottom = slidesBottom;

    console.log(sliderWidth);



}

function sliders() {

    const nbSlider = slidersElements.length;

    for (let i = 0; i < nbSlider; i++) {
        // récupération de l'attribut data et passage en paramètre de la fonction init 
        init(i);

    }
}



sliders(); 