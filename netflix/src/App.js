import './App.css';
import Row from "./component/Row";
import requests from './helper/requests';
import Banner from "./component/Banner"
import Nav from "./component/Nav"

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLarge/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
