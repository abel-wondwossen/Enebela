import './App.css';
import MealsProvider from './Contexts/MealsProvider';
import { ChakraProvider } from '@chakra-ui/react';
import Headers from './Component/Layouts/Headers/Headers';
import Tabview from './Component/Layouts/Tabview/Tabview';
import Intro from './Component/intro/Intro';
function App() {
  return (
<ChakraProvider>
  <MealsProvider >
    <Headers />
    <Intro />
    <Tabview />
  </MealsProvider>
</ChakraProvider>
  );
}

export default App;
