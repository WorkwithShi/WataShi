import Work from './components/Work';
import Layout from "./components/Layout";
import Bio from './components/Bio';
import './index.css'


function App() {
	return(
	 <Layout>
		<Bio />
		<Work />
	</Layout>
    );
}

export default App;
