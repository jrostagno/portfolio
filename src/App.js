import { Container } from "@chakra-ui/react";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Sections/Hero/Hero";

import About from "./components/Sections/About/About";
import Work from "./components/Sections/Work/Work";
import Experience from "./components/Sections/Experience/Experience";
import Contact from "./components/Sections/Contacts/Contact";

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
