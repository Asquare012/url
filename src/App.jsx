import "./App.scss";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Url from "./components/Url";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Url />
    </div>
  );
};

export default App;
