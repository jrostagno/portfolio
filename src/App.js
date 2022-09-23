import "@fontsource/azeret-mono";
import { ChakraProvider, Text } from "@chakra-ui/react";
import { theme } from "./lib/theme";
import Fonts from "./Fonts/Fonts";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Text
        fontWeight="800"
        fontFamily="body"
        fontSize="80px"
        bgColor="primary"
      >
        Experience
      </Text>
    </ChakraProvider>
  );
}

export default App;
