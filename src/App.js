import { Container } from "@chakra-ui/react";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Sections/Hero";

import About from "./components/Sections/About";

function App() {
  return (
    <Layout>
      <Container maxWidth="1050px">
        <Hero />
        <About />
      </Container>
    </Layout>
  );
}

export default App;
