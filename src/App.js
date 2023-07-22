import "./styles/App.scss";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from "./components/Header.jsx";
import "./styles/header.scss"
import Home from "./components/Home.jsx";
import Contact from './components/Contact.jsx';
import "./styles/home.scss"
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
