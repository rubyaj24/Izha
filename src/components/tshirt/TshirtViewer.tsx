import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export function TshirtViewer({
  textureCanvas,
  shirtColor,
}: {
  textureCanvas: HTMLCanvasElement | null;
  shirtColor: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const [loading, setLoading] = useState(true);
  const [progress] = useState(100);

  const applyMaterial = (model: THREE.Group) => {
    model.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        if (mesh.material) {
          (mesh.material as THREE.Material).dispose();
        }
        if (textureCanvas) {
          const texture = new THREE.CanvasTexture(textureCanvas);
          texture.needsUpdate = true;
          mesh.material = new THREE.MeshStandardMaterial({
            map: texture,
            roughness: 0.5,
            metalness: 0.05,
            side: THREE.DoubleSide,
          });
        } else {
          mesh.material = new THREE.MeshStandardMaterial({
            color: shirtColor,
            roughness: 0.5,
            metalness: 0.05,
            side: THREE.DoubleSide,
          });
        }
      }
    });
  };

  // One-time setup: create scene, camera, renderer, and a default cube.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let animationFrameId = 0;
    let disposed = false;

    const initializeScene = () => {
      if (disposed) return;

      const width = container.clientWidth;
      const height = container.clientHeight;

      if (width === 0 || height === 0) {
        animationFrameId = window.requestAnimationFrame(initializeScene);
        return;
      }

      const scene = new THREE.Scene();
      scene.background = new THREE.Color("#ffffff");
      sceneRef.current = scene;

      const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 100);
      camera.position.set(0, 1, 4);
      cameraRef.current = camera;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        preserveDrawingBuffer: true,
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.domElement.style.display = "block";
      renderer.domElement.style.width = `${width}px`;
      renderer.domElement.style.height = `${height}px`;
      container.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enablePan = false;
      controls.minDistance = 2;
      controls.maxDistance = 8;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 1.5;
      controls.minPolarAngle = Math.PI / 4;
      controls.maxPolarAngle = Math.PI / 1.8;
      controls.target.set(0, 0, 0);
      controlsRef.current = controls;

      const ambient = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambient);

      const mainLight = new THREE.DirectionalLight(0xffffff, 2);
      mainLight.position.set(5, 5, 5);
      mainLight.castShadow = true;
      mainLight.shadow.mapSize.width = 1024;
      mainLight.shadow.mapSize.height = 1024;
      scene.add(mainLight);

      const fillLight = new THREE.DirectionalLight(0xffffff, 0.5);
      fillLight.position.set(-3, 3, -3);
      scene.add(fillLight);

      const rimLight = new THREE.DirectionalLight(0xffffff, 0.3);
      rimLight.position.set(0, -3, 2);
      scene.add(rimLight);

      const cube = new THREE.Mesh(
        new THREE.BoxGeometry(1.5, 1.5, 1.5),
        new THREE.MeshStandardMaterial({
          color: shirtColor,
          roughness: 0.45,
          metalness: 0.08,
        }),
      );
      cube.castShadow = true;
      cube.receiveShadow = true;

      const cubeGroup = new THREE.Group();
      cubeGroup.add(cube);
      modelRef.current = cubeGroup;
      scene.add(cubeGroup);
      setLoading(false);

      const animate = () => {
        if (disposed) return;
        animationFrameId = window.requestAnimationFrame(animate);
        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.012;
        controls.update();
        renderer.render(scene, camera);
      };
      animate();

      const onResize = () => {
        if (disposed) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        if (w === 0 || h === 0) return;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener("resize", onResize);

      const cleanup = () => {
        window.removeEventListener("resize", onResize);
        renderer.dispose();
        controls.dispose();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      };

      return cleanup;
    };

    const cleanup = initializeScene();

    return () => {
      disposed = true;
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
      if (cleanup) {
        cleanup();
      }
    };
  }, []);

  // Texture/material update: apply to the default cube.
  useEffect(() => {
    const model = modelRef.current;
    if (!model) return;

    applyMaterial(model);
  }, [textureCanvas, shirtColor]);

  return (
    <div
      ref={containerRef}
      className="relative h-full w-full overflow-hidden rounded-2xl"
    >
      {loading && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-2">
          <div className="h-1 w-32 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-[#ea2525] transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-[12px] uppercase tracking-wider text-white/50">
            {progress}%
          </p>
        </div>
      )}
    </div>
  );
}
