// Attendre que le DOM soit entièrement chargé
document.addEventListener('DOMContentLoaded', function () {
    // Sélectionner les éléments nécessaires
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');

    // Fonction pour générer une couleur aléatoire
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Ajouter un écouteur d'événements sur le bouton pour changer la couleur
    changeColorBtn.addEventListener('click', function () {
        const newColor = getRandomColor(); // Obtenir une couleur aléatoire
        colorBox.style.backgroundColor = newColor; // Appliquer la couleur à la boîte
    });
});