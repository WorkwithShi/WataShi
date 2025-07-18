import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Work from './components/Work';
import Layout from "./components/Layout";
import Bio from './components/Bio';
import Footer from "./components/Footer";
import SmartCampusDemo from "./pages/SmartCampusDemo";
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Layout>
                <Bio />
                <Work />
              </Layout>
              <Footer />
            </>
          }
        />

        <Route
          path="/smart-campus-demo"
          element={
            <>
              <SmartCampusDemo />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
