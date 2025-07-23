import "./App.css";
import { Route, Routes } from "react-router";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Cities from "./Pages/Cities";
import GlobalWeather from "./Pages/GlobalWeather";
import Map from "./Pages/Map";
import News from "./Pages/News";


const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/globalweather" element={<GlobalWeather />} />
        <Route path="/map" element={<Map />} />
        <Route path="/news" element={<News />} />
      </Route>
    </Routes>
  );
};

export default App;
