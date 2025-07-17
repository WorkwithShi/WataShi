import Work from './components/Work';
import Layout from "./components/Layout";
import Bio from './components/Bio';
import Footer from "./components/Footer";
import './index.css'


function App() {
	return(
	<>
	<Layout>
		<Bio />
		<Work />
	</Layout>
	<Footer/>
	</>
	 
    );
}

export default App;
