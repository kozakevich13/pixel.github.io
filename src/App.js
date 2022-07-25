import Icecream from '../src/components/Icecream'
import Shapes from './components/shapes/shapes';
import './App.css';
import Loader from './components/loader/loader';

function App() {
  return (
    <div className="App">
        <Icecream/>
        <Shapes/>
        <Loader/>
    </div>
  );
}

export default App;
