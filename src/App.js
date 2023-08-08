import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Services from './components/Services';



function App() {
  return (
    <div className="App">
<Header />
<Work />
<Banner />
<About/>
<Services />
    </div>
  );
}

export default App;
