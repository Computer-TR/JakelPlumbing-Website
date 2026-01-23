// 'use client'

// import { useRef } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
// import { OrbitControls, Sphere, Torus, Environment } from '@react-three/drei'
// import * as THREE from 'three'

// function PipeSystem() {
//   const mainPipe = useRef<THREE.Mesh>(null)
//   const secondaryPipe = useRef<THREE.Mesh>(null)
//   const dropletsA = useRef<THREE.Group>(null)
//   const dropletsB = useRef<THREE.Group>(null)

//   useFrame((_, delta) => {
//     if (mainPipe.current) {
//       mainPipe.current.rotation.y += delta * 0.12
//     }
//     if (secondaryPipe.current) {
//       secondaryPipe.current.rotation.y -= delta * 0.08
//     }
//     if (dropletsA.current) {
//       dropletsA.current.rotation.y += delta * 0.35
//     }
//     if (dropletsB.current) {
//       dropletsB.current.rotation.y -= delta * 0.25
//     }
//   })

//   return (
//     <group>
//       <mesh ref={mainPipe}>
//         <torusGeometry args={[2.5, 0.45, 32, 140]} />
//         <meshPhysicalMaterial
//           color="#d1d5db"
//           metalness={1}
//           roughness={0.25}
//           clearcoat={0.4}
//           clearcoatRoughness={0.15}
//         />
//       </mesh>

//       <mesh ref={secondaryPipe}>
//         <torusGeometry args={[1.8, 0.32, 32, 120]} />
//         <meshPhysicalMaterial
//           color="#b87333"
//           metalness={1}
//           roughness={0.35}
//         />
//       </mesh>

//       <Torus args={[1.2, 0.18, 24, 80]} rotation={[Math.PI / 2, 0, 0]}>
//         <meshPhysicalMaterial color="#c9a227" metalness={1} roughness={0.3} />
//       </Torus>

//       <mesh rotation={[Math.PI / 2, 0, 0]}>
//         <cylinderGeometry args={[0.22, 0.22, 4, 32]} />
//         <meshPhysicalMaterial color="#9ca3af" metalness={1} roughness={0.4} />
//       </mesh>

//       <mesh rotation={[0, 0, Math.PI / 2]}>
//         <cylinderGeometry args={[0.18, 0.18, 4, 32]} />
//         <meshPhysicalMaterial color="#b87333" metalness={1} roughness={0.4} />
//       </mesh>

//       <group ref={dropletsA}>
//         {[ [3,0,0], [-3,0,0], [0,3,0] ].map((p, i) => (
//           <Sphere key={i} args={[0.22, 32, 32]} position={p as any}>
//             <meshPhysicalMaterial
//               color="#bfefff"
//               transmission={0.95}
//               thickness={0.6}
//               ior={1.33}
//               roughness={0}
//               transparent
//               opacity={0.9}
//               depthWrite={false}
//             />
//           </Sphere>
//         ))}
//       </group>

//       <group ref={dropletsB}>
//         {[ [2.5,1.5,0], [-2,-1.5,1], [1,-2,-1.5] ].map((p, i) => (
//           <Sphere key={i} args={[0.18, 32, 32]} position={p as any}>
//             <meshPhysicalMaterial
//               color="#bfefff"
//               transmission={0.9}
//               thickness={0.5}
//               ior={1.33}
//               roughness={0}
//               transparent
//               opacity={0.85}
//               depthWrite={false}
//             />
//           </Sphere>
//         ))}
//       </group>

//       <Sphere args={[0.45, 32, 32]}>
//         <meshPhysicalMaterial
//           color="#444"
//           emissive="#ff6b3d"
//           emissiveIntensity={0.15}
//           metalness={0.8}
//           roughness={0.4}
//         />
//       </Sphere>
//     </group>
//   )
// }

// export default function PipeAnimation() {
//   return (
//     <div className="w-full h-full">
//       <Canvas
//         dpr={1}
//         linear
//         flat
//         camera={{ position: [0, 1.2, 8], fov: 45 }}
//         gl={{ antialias: true, powerPreference: 'high-performance' }}
//       >
//         <color attach="background" args={['#0b0b0b']} />

//         <ambientLight intensity={0.25} />
//         <directionalLight position={[8, 10, 5]} intensity={1.4} />
//         <directionalLight position={[-6, -4, -4]} intensity={0.5} />
//         <pointLight position={[0, 3, 6]} intensity={0.6} />

//         <Environment preset="studio" />

//         <PipeSystem />

//         <OrbitControls
//           enableZoom={false}
//           enablePan={false}
//           minPolarAngle={Math.PI / 3}
//           maxPolarAngle={Math.PI / 1.6}
//         />
//       </Canvas>
//     </div>
//   )
// }


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