import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const CameraExample = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeCamera, setActiveCamera] = useState<'perspective' | 'orthographic'>('perspective');

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setAnimationLoop(animate);
    renderer.setScissorTest(true);
    mountRef.current.appendChild(renderer.domElement);
    
    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return;
      
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      const aspect = width / height;
      
      renderer.setSize(width, height);
      
      // Update cameras
      camera.aspect = 0.5 * aspect;
      camera.updateProjectionMatrix();
      
      cameraPerspective.aspect = 0.5 * aspect;
      cameraPerspective.updateProjectionMatrix();
      
      cameraOrtho.left = -0.5 * frustumSize * aspect / 2;
      cameraOrtho.right = 0.5 * frustumSize * aspect / 2;
      cameraOrtho.top = frustumSize / 2;
      cameraOrtho.bottom = -frustumSize / 2;
      cameraOrtho.updateProjectionMatrix();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cameras
    const frustumSize = 600;
    const SCREEN_WIDTH = mountRef.current.clientWidth;
    const SCREEN_HEIGHT = mountRef.current.clientHeight;
    const aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
    
    // Main camera
    const camera = new THREE.PerspectiveCamera(50, 0.5 * aspect, 1, 10000);
    camera.position.z = 2500;
    
    // Perspective camera
    const cameraPerspective = new THREE.PerspectiveCamera(50, 0.5 * aspect, 150, 1000);
    const cameraPerspectiveHelper = new THREE.CameraHelper(cameraPerspective);
    scene.add(cameraPerspectiveHelper);
    
    // Orthographic camera
    const cameraOrtho = new THREE.OrthographicCamera(
      0.5 * frustumSize * aspect / -2,
      0.5 * frustumSize * aspect / 2,
      frustumSize / 2,
      frustumSize / -2,
      150,
      1000
    );
    cameraOrtho.rotation.y = Math.PI;
    cameraPerspective.rotation.y = Math.PI;
    
    const cameraOrthoHelper = new THREE.CameraHelper(cameraOrtho);
    scene.add(cameraOrthoHelper);
    
    // Camera rig
    const cameraRig = new THREE.Group();
    cameraRig.add(cameraPerspective);
    cameraRig.add(cameraOrtho);
    scene.add(cameraRig);
    
    // Active camera and helper
    let activeCam = cameraPerspective;
    let activeHelper = cameraPerspectiveHelper;
    
    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    
    // Meshes
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(100, 16, 8),
      new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true })
    );
    scene.add(mesh);
    
    const mesh2 = new THREE.Mesh(
      new THREE.SphereGeometry(50, 16, 8),
      new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
    );
    mesh2.position.y = 150;
    mesh.add(mesh2);
    
    const mesh3 = new THREE.Mesh(
      new THREE.SphereGeometry(5, 16, 8),
      new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true })
    );
    mesh3.position.z = 150;
    cameraRig.add(mesh3);
    
    // Particles
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    
    for (let i = 0; i < 10000; i++) {
      vertices.push(THREE.MathUtils.randFloatSpread(2000)); // x
      vertices.push(THREE.MathUtils.randFloatSpread(2000)); // y
      vertices.push(THREE.MathUtils.randFloatSpread(2000)); // z
    }
    
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const particles = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0x888888 }));
    scene.add(particles);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(3, 2, 1);
    scene.add(directionalLight);
    
    // Animation
    function animate() {
      const r = Date.now() * 0.0005;
      
      mesh.position.x = 700 * Math.cos(r);
      mesh.position.z = 700 * Math.sin(r);
      mesh.position.y = 700 * Math.sin(r);
      
      mesh.children[0].position.x = 70 * Math.cos(2 * r);
      mesh.children[0].position.z = 70 * Math.sin(r);
      
      if (activeCamera === 'perspective') {
        activeCam = cameraPerspective;
        activeHelper = cameraPerspectiveHelper;
        
        cameraPerspective.fov = 35 + 30 * Math.sin(0.5 * r);
        cameraPerspective.far = mesh.position.length();
        cameraPerspective.updateProjectionMatrix();
        
        cameraPerspectiveHelper.update();
        cameraPerspectiveHelper.visible = true;
        
        cameraOrthoHelper.visible = false;
      } else {
        activeCam = cameraOrtho;
        activeHelper = cameraOrthoHelper;
        
        cameraOrtho.far = mesh.position.length();
        cameraOrtho.updateProjectionMatrix();
        
        cameraOrthoHelper.update();
        cameraOrthoHelper.visible = true;
        
        cameraPerspectiveHelper.visible = false;
      }
      
      cameraRig.lookAt(mesh.position);
      
      // Render left side (active camera)
      activeHelper.visible = false;
      
      renderer.setClearColor(0x000000, 1);
      renderer.setScissor(0, 0, SCREEN_WIDTH / 2, SCREEN_HEIGHT);
      renderer.setViewport(0, 0, SCREEN_WIDTH / 2, SCREEN_HEIGHT);
      renderer.render(scene, activeCam);
      
      // Render right side (main camera)
      activeHelper.visible = true;
      
      renderer.setClearColor(0x111111, 1);
      renderer.setScissor(SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2, SCREEN_HEIGHT);
      renderer.setViewport(SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2, SCREEN_HEIGHT);
      renderer.render(scene, camera);
    }
    
    // Keyboard controls
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key.toLowerCase()) {
        case 'o':
          setActiveCamera('orthographic');
          break;
        case 'p':
          setActiveCamera('perspective');
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      particles.material.dispose();
      mesh.geometry.dispose();
      mesh.material.dispose();
      mesh2.geometry.dispose();
      mesh2.material.dispose();
      mesh3.geometry.dispose();
      mesh3.material.dispose();
    };
  }, [activeCamera]);
  
  return (
    <div className="w-full h-96 relative">
      <div ref={mountRef} className="w-full h-full" />
      <div className="absolute top-4 left-4 bg-black/70 text-white p-3 rounded text-sm">
        <p><strong>O</strong> - Orthographic Camera</p>
        <p><strong>P</strong> - Perspective Camera</p>
        <p className="mt-2">Current: <strong>{activeCamera === 'perspective' ? 'Perspective' : 'Orthographic'}</strong></p>
      </div>
    </div>
  );
};

export default CameraExample;