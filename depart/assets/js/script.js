// ====================================================
// =  Déclaration des variables globales              =
// ====================================================

const inputMessage = document.getElementById("texte");
const inputTaille = document.getElementById("taille-texte");
const inputCouleur = document.getElementById("couleur-texte");
const inputPolice = document.getElementById('police-texte');
const inputShadow = document.getElementById('ombre-texte');
const inputImage = document.getElementById('choix-image-fond');
const affichageTexte = document.getElementById('affichage-texte');
const zoneAffichage = document.getElementById('zone-affichage');
const boutonGenerer = document.getElementById('bouton-generer');


// ====================================================
// =  Déclaration des événements                      =
// ====================================================

inputTaille.addEventListener('input', AfficherTailleTexte);
boutonGenerer.addEventListener('click', GenererTexte);

// ====================================================
// =  Code qui sera exécuté au chargement de la page  =
// ====================================================

console.log('Initialisation de script');
AfficherTailleTexte();

// ====================================================
// =  Déclaration des fonctions                       =
// ====================================================

function AfficherTailleTexte(){
    const afficheTaille = document.getElementById("affiche-taille");
    afficheTaille.innerHTML = inputTaille.value + "em";
}

function GenererTexte(){
    AfficherValeurInput();

    affichageTexte.innerHTML = inputMessage.value;
    affichageTexte.style.fontSize = inputTaille.value + "em";   // Affiche la taille du texte
    affichageTexte.style.color = inputCouleur.value;            // Affiche la couleur du texte
    affichageTexte.style.fontFamily = inputPolice.value;        // Affiche la police du texte, pour que ça fonctionne il faut que la police soit chargée dans le fichier CSS

    // Affiche l'ombre du texte si la case est cochée
    if (inputShadow.checked) {
        affichageTexte.style.textShadow = "4px 4px 2px rgba(0,0,0,0.6)";
    } else {
        affichageTexte.style.textShadow = "none";
    }

    // Affiche l'image de fond si la case est cochée
    if (inputImage.checked) {
        zoneAffichage.classList.remove('image-fond');
    } else {
        zoneAffichage.classList.add('image-fond');
    }
}

/**
 * Affiche les valeurs des champs de saisie dans la console
 */
function AfficherValeurInput() {
    console.clear();
    console.log('Message : ' + inputMessage.value);
    console.log('Taille : ' + inputTaille.value);
    console.log('Couleur : ' + inputCouleur.value);
    console.log('Police : ' + inputPolice.value);
    console.log('Ombre : ' + inputShadow.checked);
    console.log('Image : ' + inputImage.checked);
}

