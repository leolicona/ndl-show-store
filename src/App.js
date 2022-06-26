import Header from './layout/Header';
import Hero from './layout/Hero';
import Footer from './layout/Footer';
import {globalStyles} from'./styles/main'
import {createUseStyles} from 'react-jss'

console.log(globalStyles )
const useStyles = createUseStyles(globalStyles)


function App() {

  const  classes = useStyles();

  return (
    <div className={classes.wrapperContainer}>
      <Header className={classes.wrapperContent}/>
      <Hero/>
      <Footer/>
      <p>Hello Noche de Leyendas</p>
    </div>
  );
}

export default App;
