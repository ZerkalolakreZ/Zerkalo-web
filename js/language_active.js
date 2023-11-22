document.addEventListener("DOMContentLoaded", function() {
    const englishButton = document.getElementById("translate-english");
    const russianButton = document.getElementById("translate-russian");
    
    // Establecer el idioma predeterminado (por ejemplo, inglés)
    englishButton.classList.add("active");

    // Evento de clic para cambiar el idioma
    englishButton.addEventListener("click", function() {
        englishButton.classList.add("active");
        russianButton.classList.remove("active");
        // Aquí puedes realizar las acciones para cambiar a inglés
    });

    russianButton.addEventListener("click", function() {
        russianButton.classList.add("active");
        englishButton.classList.remove("active");
        // Aquí puedes realizar las acciones para cambiar a ruso
    });
});
