import Topbar from './components/Topbar';
import Home from './components/Home';
import About from './components/About';
import Carousel from './components/Carousel';
import Strengths from './components/Strengths';
import Materials from './components/Materials';
import Machinery from './components/Machinery';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[rgb(98,98,98)]">
      <Topbar />
      <main>
        <Home />
        <About />
        <Carousel />
        <Strengths />
        <Materials />
        <Machinery />
        <Contacts />
      </main>
      <Footer />
    </div>
  );
}

export default App;
