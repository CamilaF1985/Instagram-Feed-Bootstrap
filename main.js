// Obtener las galerías de imágenes por su ID
var imageGallery = document.getElementById("imageGallery");
var blueSquareGallery = document.getElementById("blueSquareGallery");

// Obtener los botones de los iconos por su clase
var gridButton = document.querySelector(".fa-table-cells");
var blueSquareButton = document.querySelector(".fa-square");

// Mostrar la galería de grilla al cargar la página
imageGallery.style.display = "block";

// Agregar eventos de clic a los botones para mostrar la galería correspondiente y ocultar la otra
gridButton.addEventListener("click", function () {
    imageGallery.style.display = "block"; // Mostrar la galería de grilla
    blueSquareGallery.style.display = "none"; // Ocultar la galería del cuadrado celeste
});

blueSquareButton.addEventListener("click", function () {
    imageGallery.style.display = "none"; // Ocultar la galería de grilla
    blueSquareGallery.style.display = "block"; // Mostrar la galería del cuadrado celeste
});