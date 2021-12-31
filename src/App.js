import './App.scss';
import Advertiser from './Components/Advertiser/Advertiser';
import Banner from './Components/Banner/Banner';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Portfolio from './Components/Portfolio/Portfolio';
import Welcome from './Components/Welcome/Welcome';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Welcome />
      <Portfolio />
      <Advertiser />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
