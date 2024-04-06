import Home from './Screens/Home';
import About from './Screens/About'
import Navbar from './Components/Navbar';
import ContactUs from './Screens/ContactUs';
import Footer from './Components/Footer.jsx';
import {Routes, Route } from "react-router-dom";
import Dash from './Screens/Dash.jsx';
// import FaceMask from './Components/FaceMask.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="deeplearningWebsiteClient/" element={<Home />} />
          <Route path="deeplearningWebsiteClient/contact" element={<ContactUs />} />
          <Route path="deeplearningWebsiteClient/about" element={<About />} />
          <Route path="deeplearningWebsiteClient/dash" element={<Dash />} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
      {/* <FaceMask /> */}
      <Footer />
    </div>
  );
}

export default App;
