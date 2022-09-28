import { Container } from "@chakra-ui/react";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Sections/Hero";

import About from "./components/Sections/About";
import Work from "./components/Sections/Work";
import Experience from "./components/Sections/Experience";

function App() {
  return (
    <Layout>
      <Container maxWidth="1050px">
        <Hero />
        <About />
        <Experience />
        <Work />
      </Container>
    </Layout>
  );
}

export default App;
