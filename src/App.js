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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  // if (loading) return <Loader />;

  return (
    <h1>Error</h1>

    // <Layout>
    //   <Container
    //     paddingX={{ base: "10px", sm: "30px", md: "130px" }}
    //     maxWidth="1250px"
    //   >
    //     <Hero />
    //     <About />
    //     <Experience />
    //     <Work />
    //     <Contact />
    //   </Container>
    // </Layout>
  );
}

export default App;
