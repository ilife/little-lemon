import './App.css'
import theme from './Components/Theme'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'
import Home from './Components/Home'
import BookingForm from './Components/BookingForm'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="BookingForm" element={<BookingForm />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
