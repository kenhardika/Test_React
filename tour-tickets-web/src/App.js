import './App.css';
import { Header } from './Header';
import { Main } from './Main';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main text = "this is from props"/>
    </div>
  );
}

export default App;
