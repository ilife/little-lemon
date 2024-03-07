import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Main from './Components/Main';
import BookingForm from './Components/BookingForm';

function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
      <BookingForm onSubmit={values => console.log(values)}/>
    </>
  );
}

export default App;
