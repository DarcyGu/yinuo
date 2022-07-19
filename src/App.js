import love from './love.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <p>
          Yinuo
        </p> */}
        <img src={love} style={{maxWidth:'100%'}} alt='love is better than life' />
      </header>
    </div>
  );
}

export default App;
