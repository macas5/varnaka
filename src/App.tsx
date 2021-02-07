import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Showcase from './components/Showcase/Showcase';
import NewItems from './components/NewItems/NewItems';
import Instagram from './components/Instagram/Instagram';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Showcase />
      <NewItems />
      <Instagram />
      <Footer />
    </div>
  );
}

export default App;
