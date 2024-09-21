import * as THREE from  'three';

const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Add geometries (similar to the ones in the image)
    const geometry1 = new THREE.IcosahedronGeometry(); // For polyhedrons
    const material1 = new THREE.MeshBasicMaterial({ color: 0x9933ff, wireframe: true });
    const icosahedron = new THREE.Mesh(geometry1, material1);
    scene.add(icosahedron);

    const geometry2 = new THREE.TorusGeometry(5, 1, 16, 100); // Torus shape
    const material2 = new THREE.MeshBasicMaterial({ color: 0x0099ff, wireframe: true });
    const torus = new THREE.Mesh(geometry2, material2);
    torus.position.set(-10, 0, 0);
    scene.add(torus);

    const geometry3 = new THREE.SphereGeometry(2, 32, 16); // Rounded shape
    const material3 = new THREE.MeshBasicMaterial({ color: 0xff33cc, wireframe: true });
    const sphere = new THREE.Mesh(geometry3, material3);
    sphere.position.set(10, 0, 0);
    scene.add(sphere);

    // Set camera position
    camera.position.z = 20;

    // Animation function
    function animate() {
      requestAnimationFrame(animate);

      // Rotate the objects
      icosahedron.rotation.x += 0.01;
      icosahedron.rotation.y += 0.01;

      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;

      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;

      // Render the scene
      renderer.render(scene, camera);
    }

    // Start the animation
    animate();