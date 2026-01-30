'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Pipe() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.1
    }
  })

  return (
    <group>
      {/* Main pipe */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <torusGeometry args={[2, 0.4, 16, 100]} />
        <MeshDistortMaterial
          color="#9196db"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      
      {/* Floating droplets */}
      <mesh position={[1.5, 1, 0]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#0891b2" transparent opacity={0.6} />
      </mesh>
      
      <mesh position={[-1.5, -1, 0]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial color="#06b6d4" transparent opacity={0.6} />
      </mesh>
    </group>
  )
}

export default function PipeAnimation() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#0891b2" />
        <Pipe />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}