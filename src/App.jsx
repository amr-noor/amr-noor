import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Certs from "./pages/Certs";
import Details from "./components/Details";
import Error from "./pages/Error";

import get from "./scripts";

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    get.data().then(setData);
  }, []);

  return <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" index element={<Home data={data} />} />
      <Route path="/projects" element={<Projects data={data.projects} />} />
      <Route path="/projects/:id" element={<Details data={Object.values(data.projects || {}).flat()} />} />
      <Route path="/certs" element={<Certs data={data.certs} />} />
      <Route path="/certs/:id" element={<Details data={data.certs} />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </BrowserRouter>;
}

export default App;