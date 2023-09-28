import { Fragment } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

const App = () => {
	return (
		<Fragment>
			<Navbar />
			<Hero />
			<About />
			<Skills />
			<Projects />
			<Footer />
		</Fragment>
	)
}
export default App
