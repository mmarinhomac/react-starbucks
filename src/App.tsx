import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './styles/theme';

import { Home } from "./pages/Home";
import { Header } from "./components/Header";

export default function App() {
  return (
    <ChakraProvider theme={theme}>      
      <Header />
      <Home />
    </ChakraProvider>
  );
}
