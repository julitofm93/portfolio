import { useContext } from 'react';
import './App.css';
import Intro from './components/intro/intro';
import About from './components/about/about';
import ProductList from './components/productList/productList';
import Contact from './components/contact/contact';
import Toggle from './components/toggle/toggle';
import { ThemeContext } from './context';
import Footer from './components/footer/footer';

const App = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div style={{backgroundColor:darkMode ? "#192229" : "#EFF3F5", color:darkMode ? "#EFF3F5" : "#192229"}}>
        <Toggle/>
        <Intro/>
        <About/>
        <ProductList/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
