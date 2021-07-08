import './App.css';
import Row from "./component/Row";
import requests from './helper/requests';

function App() {
  return (
    <div className="App">
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLarge/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
