import { OrbitControls, Preload, useGLTF, Html } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import CanvasLoader from '../Loader'
import { styles } from '../../styles'

const Computers = ({ isMobile }) => {
  const computer = useGLTF('/desktop_pc/scene.gltf')
  return (
    <mesh>
        <hemisphereLight intensity={0.15} groundColor="black" />
        <pointLight intensity={0.7} />
        <spotLight position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1} 
        intensity={1}
        castShadow
        shadow-mapSize={1024}
        />
        <primitive object={computer.scene} 
          scale={isMobile ? 0.2 : 0.3}
          position={isMobile ? [0, -3, -0.1] : [0, -3.25, -1.5]}
          rotation={isMobile ? [0, -0.5, 0] : [0, 0.2, 0]}
        />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // add event listener to the screen size
    const mediaQuery = window.matchMedia('(max-width: 600px)');
    // set the initial state
    setIsMobile(mediaQuery.matches);
    // define the event handler
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    }
    // add the event listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    // remove the event listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, []);
  
  return (
    <Canvas frameloop='demand' 
    shadows
    camera={{position:[20, 3, 5], fov:25}}
    gl={{preserveDrawingBuffer: true }}
    >
      <Html style={{position: "absolute", zIndex: -1}}>
     
      <div className='absolute z-0'>
        <div className={`${isMobile ? "-mx-44 w-[370px] my-10": "left-[-600px]"} absolute top-[-250px]`} 
            style={{ userSelect: 'none' }}>
          <h1 className={`${styles.heroHeadText} text-black my-3 z-0`}>Hi, I'm <span className='text-[#988272]'>Yi Geng</span></h1>
          <p className={`${styles.heroSubText} text-black-100`}>
              I'm a Junior full stack developer, based in Europe<br className='sm:block hidden' />
          </p>
        </div>
      </div>
      
      </Html>
      
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
        
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas