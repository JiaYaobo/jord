import React from 'react'
import WordModel from './WordModel'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import styled from "@emotion/styled"
import { motion, MotionCanvas, LayoutCamera } from "framer-motion-3d"


const Container = styled(motion.div)`

  background-color: #ee1f1f;  
  width: 50vw;
  height: 50vh;
`


const WordSphere = () => {
  return (
    <Container>
        <WordModel/>
    </Container>
  )
}

export default WordSphere