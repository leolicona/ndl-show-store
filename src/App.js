import Header from './layout/Header/Header';
import Hero from './layout/Hero/Hero'
import Footer from './layout/Footer/Footer';
import appStyles from './App.module.css';
import Main from './layout/Main/Main'


function App() {


  return (
    <div className={appStyles.mainContainer}>
      <Header/>
      <Hero/>
      <Main/>

    
      
      
      <Footer/>
    </div>
  );
}

export default App;
