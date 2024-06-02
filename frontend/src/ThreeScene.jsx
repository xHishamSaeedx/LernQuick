import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import space from "./space.jpg";
function ThreeScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    camera.position.setZ(30);
    camera.position.setX(-3);

    // Lights
    const pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.set(5, 5, 5);
    const ambientLight = new THREE.AmbientLight(0xffffff);
    scene.add(pointLight, ambientLight);

    // Stars
    const stars = [];
    function addStar() {
      const geometry = new THREE.SphereGeometry(0.25, 24, 24);
      const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const star = new THREE.Mesh(geometry, material);

      const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(100));

      star.position.set(x, y, z);
      stars.push(star);
      scene.add(star);
    }

    Array(200).fill().forEach(addStar);

    // Background
    const spaceTexture = new THREE.TextureLoader().load(space);
    scene.background = spaceTexture;

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);

      renderer.render(scene, camera);
    }

    animate();

    // Handle window resize
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener("resize", onWindowResize, false);

    // Move stars based on scroll
    function moveStars() {
      const scrollY = window.scrollY;
      stars.forEach((star) => {
        star.position.y = star.initialY + scrollY * 0.002;
      });
    }

    // Set initial y positions for stars
    stars.forEach((star) => {
      star.initialY = star.position.y;
    });

    document.addEventListener("scroll", moveStars);

    // Cleanup on component unmount
    return () => {
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", onWindowResize);
      document.removeEventListener("scroll", moveStars);
    };
  }, []);

  return <div className="three-scene" ref={mountRef} />;
}

export default ThreeScene;
