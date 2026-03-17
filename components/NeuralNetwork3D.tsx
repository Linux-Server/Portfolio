'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Nodes() {
  const groupRef = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, connections, linePositions } = useMemo(() => {
    const count = 80;
    const pos = new Float32Array(count * 3);
    const spread = 8;
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * spread;
      pos[i * 3 + 1] = (Math.random() - 0.5) * spread;
      pos[i * 3 + 2] = (Math.random() - 0.5) * spread;
    }

    // Build connections for nearby nodes
    const conns: number[] = [];
    const threshold = 2.8;
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        if (Math.sqrt(dx * dx + dy * dy + dz * dz) < threshold) {
          conns.push(i, j);
        }
      }
    }

    const linePos = new Float32Array(conns.length * 3);
    for (let i = 0; i < conns.length; i++) {
      const idx = conns[i];
      linePos[i * 3] = pos[idx * 3];
      linePos[i * 3 + 1] = pos[idx * 3 + 1];
      linePos[i * 3 + 2] = pos[idx * 3 + 2];
    }

    return { positions: pos, connections: conns, linePositions: linePos };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.06;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.15;
    }

    // Animate node positions slightly
    if (pointsRef.current) {
      const posAttr = pointsRef.current.geometry.attributes.position;
      const arr = posAttr.array as Float32Array;
      for (let i = 0; i < arr.length / 3; i++) {
        arr[i * 3 + 1] += Math.sin(state.clock.elapsedTime * 0.5 + i * 0.3) * 0.001;
      }
      posAttr.needsUpdate = true;
    }

    // Update line positions
    if (linesRef.current && pointsRef.current) {
      const nodePos = pointsRef.current.geometry.attributes.position.array as Float32Array;
      const lineAttr = linesRef.current.geometry.attributes.position;
      const lineArr = lineAttr.array as Float32Array;
      for (let i = 0; i < connections.length; i++) {
        const idx = connections[i];
        lineArr[i * 3] = nodePos[idx * 3];
        lineArr[i * 3 + 1] = nodePos[idx * 3 + 1];
        lineArr[i * 3 + 2] = nodePos[idx * 3 + 2];
      }
      lineAttr.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Connection lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#f97316" transparent opacity={0.12} />
      </lineSegments>

      {/* Nodes */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#fbbf24"
          size={0.06}
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

function FloatingRings() {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1.current) {
      ring1.current.rotation.x = t * 0.15;
      ring1.current.rotation.y = t * 0.1;
    }
    if (ring2.current) {
      ring2.current.rotation.x = t * 0.1 + 1;
      ring2.current.rotation.z = t * 0.12;
    }
    if (ring3.current) {
      ring3.current.rotation.y = t * 0.08;
      ring3.current.rotation.z = t * 0.15 + 2;
    }
  });

  return (
    <>
      <mesh ref={ring1} position={[3.5, 1, -2]}>
        <torusGeometry args={[1.2, 0.015, 16, 64]} />
        <meshBasicMaterial color="#f97316" transparent opacity={0.15} />
      </mesh>
      <mesh ref={ring2} position={[-3, -0.5, -1]}>
        <torusGeometry args={[0.9, 0.012, 16, 64]} />
        <meshBasicMaterial color="#fbbf24" transparent opacity={0.12} />
      </mesh>
      <mesh ref={ring3} position={[0, 2, -3]}>
        <torusGeometry args={[1.5, 0.01, 16, 64]} />
        <meshBasicMaterial color="#ff6b35" transparent opacity={0.1} />
      </mesh>
    </>
  );
}

function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 16;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={200}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial color="#f97316" size={0.025} transparent opacity={0.3} sizeAttenuation />
    </points>
  );
}

export default function NeuralNetwork3D() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <Nodes />
        <FloatingRings />
        <ParticleField />
      </Canvas>
    </div>
  );
}
