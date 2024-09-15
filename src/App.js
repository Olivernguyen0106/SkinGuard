import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Hero from './components/Hero/hero';
import AboutUs from './components/AboutUs/aboutus';
import Prediction from './components/Prediction/prediction';
import Tips from './components/Tips/tips';
import Footer from './components/Footer/footer';

function App() {
  const container = {
    maxWidth:"900px", 
    margin:"0 auto",
    display:'flex', flexDirection:'column', gap: '24px'
  }
  return (
    <div style={{display:'flex', flexDirection:'column', gap: '24px '}} className="App">
      <Header />
      <div style={container}>
        <Hero/>
        <AboutUs/>
        <Prediction/>
        <Tips/>
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
