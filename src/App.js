import { Container } from "@chakra-ui/react";
import Layout from "./components/Layout/Layout";
import Hero from "./components/Sections/Hero/Hero";

import About from "./components/Sections/About/About";
import Work from "./components/Sections/Work/Work";
import Experience from "./components/Sections/Experience/Experience";
import Contact from "./components/Sections/Contacts/Contact";
import { useEffect, useState } from "react";
import Loader from "./components/Loaders/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  window.addEventListener("load", function () {
    setLoading(false);
  });

  // useEffect(() => {
  //   setLoading(false);
  // }, []);

  if (loading) return <Loader />;

  return (
    <Layout>
      <Container paddingX="130px" maxWidth="1250px">
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
