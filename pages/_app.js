import Navbar from '../Components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
		<>
		<Navbar/>
		<h1>DEPLOY TEST</h1>
		<Component {...pageProps} /></>
	)
}

export default MyApp
