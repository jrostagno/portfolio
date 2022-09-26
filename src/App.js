import { Box } from "@chakra-ui/react";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Box height="100vh" bgColor="primary">
        esto seria section
      </Box>
      <Box height="100vh" bgColor="gray.200">
        esto seria section
      </Box>
    </Layout>
  );
}

export default App;
