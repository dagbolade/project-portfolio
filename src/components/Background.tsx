import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, OrbitControls } from '@react-three/drei';
import * as random from 'maath/random';
import { useRef, useState } from 'react';
import { Suspense } from 'react';
import * as THREE from 'three';

function Stars(props) {
  const ref = useRef();
  const [sphere] = useState(() => {
    const positions = random.inSphere(new Float32Array(5000), { radius: 1.5 });
    // Filter out any NaN values
    for (let i = 0; i < positions.length; i++) {
      if (isNaN(positions[i])) {
        positions[i] = 0;
      }
    }
    return positions;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function GlowingSphere() {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(time / 4);
      meshRef.current.rotation.y = Math.sin(time / 2);
      const scale = 1 + Math.sin(time * 2) * 0.2;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <torusGeometry args={[1, 0.3, 16, 100]} />
      <meshPhongMaterial
        color={hovered ? "#ff0080" : "#8800ff"}
        wireframe
        transparent
        opacity={0.3}
        emissive={hovered ? "#ff0080" : "#8800ff"}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

function FloatingParticles() {
  const count = 100;
  const ref = useRef();
  const [positions] = useState(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.1;
      ref.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#ff88cc"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black pointer-events-none" />
      <Canvas
        camera={{ position: [0, 0, 3], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Stars />
          <GlowingSphere />
          <FloatingParticles />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff0080" />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}