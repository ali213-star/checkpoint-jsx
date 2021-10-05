import logo from './logo.svg';
import './App.css';
import './Style.css';
import image from "./canada.jpg"
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="red">canada</h1>
          <br />
          <img src={image} />
          <br />
          <img src="../photo.jpg" />
        </div>
        <video width={320} height={240} controls>
          <source src="../cover.mp4" type="video/mp4" />
        </video>
      </div>
    </header>
    </div>
  );
}

export default App;
