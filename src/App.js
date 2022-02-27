import './App.css';
import Banner from './Pages/Banner/Banner';
import Experts from './Pages/Services/Experts/Experts';
import Home from './Pages/Services/Home/Home';

function App() {
  
  return (
    <div className='App'>
      <Home/>
      <Experts/>
      <Banner/>
    </div>
  );
}

export default App;
