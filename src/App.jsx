import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

const App = () => {
	const [theme, setTheme] = useState(null)
	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark')
		} else {
			setTheme('light')
		}
	}, [])

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [theme])

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}
	return (
		<>
			<Navbar theme={theme} handleThemeSwitch={handleThemeSwitch} />
			<Hero />
			<About />
			<Skills />
			<Projects />
			<Footer />
		</>
	)
}
export default App
