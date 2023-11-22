// Configurar la escena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Configurar el renderizador con alpha: true para fondo transparente
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear geometría y material
const geometry = new THREE.BoxGeometry();
// Configurar material con transparencia
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.7 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Configurar interactividad con el mouse
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

document.addEventListener('mousemove', onMouseMove, false);

function onMouseMove(event) {
  // Normalizar las coordenadas del mouse
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

  // Actualizar el raycaster
  raycaster.setFromCamera(mouse, camera);

  // Intersectar con objetos
  const intersects = raycaster.intersectObjects(scene.children);

  if (intersects.length > 0) {
    // Hacer algo con el objeto intersectado (por ejemplo, cambiar color)
    intersects[0].object.material.color.set(0xff0000);
  }
}

// Configurar la cámara
camera.position.z = 5;

// Animar la escena
const animate = function () {
  requestAnimationFrame(animate);

  // Rotar el cubo
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Renderizar la escena
  renderer.render(scene, camera);
};

// Iniciar la animación
animate();
