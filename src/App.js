import './App.css';
import { Routes,Route } from 'react-router-dom';
import Header from './components/Header'



function App() {
  return (
    <div className="App">

      <main>
        <Routes>
   <Route path="/" element={<Header />}></Route>
   
   </Routes>
   </main>
    </div>
  );
}

export default App;
