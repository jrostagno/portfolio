import { Container } from "@chakra-ui/react";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Sections/Hero";

import About from "./components/Sections/About";
import Work from "./components/Sections/Work";
import Experience from "./components/Sections/Experience";
import Contact from "./components/Sections/Contact";

function App() {
  return (
    <Layout>
      <Container maxWidth="1050px">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Contact />
      </Container>
    </Layout>
  );
}

export default App;
