import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Suspense, useState } from "react";
import "./App.css";
import WordSphere from "./components/WordSphere"

const Container = styled(motion.div)`
  width: 200px;
  height: 200px;
`

function App() {

  return (
        <Container layout>
          <Suspense fallback={null}>
            <WordSphere/>
          </Suspense>
        </Container>
  );
}

export default App;
