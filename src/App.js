import Header from './layout/Header/Header';
import Hero from './layout/Hero/Hero'
import Footer from './layout/Footer';
import appStyles from './App.module.css';


function App() {
  return (
    <div className={appStyles.mainContainer}>
      <Header/>
      <Hero/>
      <p>Hola Mundo</p>
      <Footer/>
    </div>
  );
}

export default App;
