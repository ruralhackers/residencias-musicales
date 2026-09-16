"use client";

import { useEffect, useRef } from "react";

export function Logo3D({ compact = false }: { compact?: boolean }) {
  const host = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let disposed = false;
    let cleanup = () => {};
    void Promise.all([import("three"), import("three/examples/jsm/loaders/OBJLoader.js")]).then(([THREE, { OBJLoader }]) => {
      if (disposed || !host.current) return;
      const container = host.current;
      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); }
      catch { return; }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      container.appendChild(renderer.domElement);
      renderer.domElement.style.touchAction = "pan-y";
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
      camera.position.z = 5;
      scene.add(new THREE.AmbientLight(0xffffff, 0.5));
      for (const [color, intensity, x, y, z] of [[0xfff0e8, 2.2, 4, 6, 5], [0xffcf8f, 0.8, -4, 0, 3], [0xff6a1a, 1.4, -3, -3, -4]]) {
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(x, y, z);
        scene.add(light);
      }
      const point = new THREE.PointLight(0xf97316, 3.5, 14);
      point.position.set(0, 1, 4);
      scene.add(point);
      const material = new THREE.MeshStandardMaterial({
        color: 0xf97316, emissive: 0xf97316, emissiveIntensity: 0.14, metalness: 0.3, roughness: 0.4,
      });
      const pivot = new THREE.Group();
      scene.add(pivot);
      const release = (obj: InstanceType<typeof THREE.Object3D>) => {
        obj.traverse(child => {
          if (child instanceof THREE.Mesh) child.geometry.dispose();
        });
      };
      new OBJLoader().load("/logos/ruralhackers.obj", obj => {
        if (disposed) { release(obj); return; }
        obj.traverse(child => {
          if (child instanceof THREE.Mesh) {
            const original = Array.isArray(child.material) ? child.material : [child.material];
            original.forEach(m => m.dispose());
            child.material = material;
            child.geometry.computeVertexNormals();
          }
        });
        const box = new THREE.Box3().setFromObject(obj);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        const scale = 2 / Math.max(size.x, size.y, size.z);
        obj.scale.setScalar(scale);
        obj.position.copy(center.multiplyScalar(-scale));
        pivot.add(obj);
      });
      const resize = new ResizeObserver(() => {
        const { width, height } = container.getBoundingClientRect();
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      });
      resize.observe(container);
      let dragging = false;
      let lastX = 0;
      const down = (e: PointerEvent) => {
        dragging = true; lastX = e.clientX;
        renderer.domElement.setPointerCapture(e.pointerId);
      };
      const move = (e: PointerEvent) => {
        if (!dragging) return;
        pivot.rotation.y += (e.clientX - lastX) * 0.01;
        lastX = e.clientX;
      };
      const up = () => { dragging = false; };
      renderer.domElement.addEventListener("pointerdown", down);
      renderer.domElement.addEventListener("pointermove", move);
      renderer.domElement.addEventListener("pointerup", up);
      renderer.domElement.addEventListener("pointercancel", up);
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
      let visible = true;
      const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
      observer.observe(container);
      const clock = new THREE.Clock();
      renderer.setAnimationLoop(() => {
        const delta = Math.min(clock.getDelta(), 0.05);
        if (!visible || document.hidden) return;
        if (!dragging && !reduced.matches) pivot.rotation.y += delta * 0.3;
        renderer.render(scene, camera);
      });
      cleanup = () => {
        resize.disconnect(); observer.disconnect();
        renderer.setAnimationLoop(null);
        release(pivot); material.dispose(); renderer.dispose();
        renderer.domElement.remove();
      };
    });
    return () => { disposed = true; cleanup(); };
  }, []);
  return <div ref={host} role="img" aria-label="Logo 3D de Rural Hackers"
    className={compact
      ? "h-[160px] w-[160px] cursor-grab active:cursor-grabbing"
      : "h-[140px] w-[140px] cursor-grab active:cursor-grabbing lg:h-[300px] lg:w-[300px]"} />;
}
