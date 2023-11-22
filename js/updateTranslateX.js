function updateTranslateX() {
  const width = window.innerHeight;
  let newTranslateX;

  if (width === 1368) {
    newTranslateX = -145;
  } else if (width === 768) {
    newTranslateX = -110;
  } else if (width === 1180) {
    newTranslateX = -127.9;
  } else if (width === 1024) {
    newTranslateX = -112;
  } else {
    // Calcula el valor proporcional si no se cumple ninguna de las condiciones
    const minWidth = 1180;
    const maxWidth = 1368;
    const minTranslateX = -127.9;
    const maxTranslateX = -145;

    // Asegúrate de que el ancho esté dentro del rango antes de calcular la proporción
    if (width < minWidth) {
      width = minWidth;
    } else if (width > maxWidth) {
      width = maxWidth;
    }

    // Calcula la proporción lineal entre los valores mínimos y máximos
    const proportion = (width - minWidth) / (maxWidth - minWidth);
    newTranslateX = minTranslateX + proportion * (maxTranslateX - minTranslateX);
  }

  // Aplica el nuevo valor al estilo CSS
  document.getElementById('main-nav').style.transform = `rotate(-90deg) translateX(${newTranslateX}%)`;
}

// Llama a la función inicialmente
updateTranslateX();

// Agrega un evento de redimensionamiento solo si se cumple la condición
if (window.matchMedia("(min-width: 768px) and (max-width: 1368px) and (orientation: portrait)").matches) {
  window.addEventListener('resize', updateTranslateX);
}
