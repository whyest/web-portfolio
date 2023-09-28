import { nanoid } from 'nanoid'
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import project1 from './assets/project-1.jpg'
import project2 from './assets/project-2.png'
import project3 from './assets/project-3.jpg'

export const links = [
	{ id: nanoid(), href: '#home', text: 'home' },
	{ id: nanoid(), href: '#about', text: 'about' },
	{ id: nanoid(), href: '#skills', text: 'skills' },
	{ id: nanoid(), href: '#projects', text: 'projects' },
]

export const skills = [
	{
		id: nanoid(),
		title: 'HTML&CSS',
		icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
		text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
	},
	{
		id: nanoid(),
		title: 'Javascript',
		icon: <FaJs className='h-16 w-16 text-emerald-500' />,
		text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
	},
	{
		id: nanoid(),
		title: 'React',
		icon: <FaReact className='h-16 w-16 text-emerald-500' />,
		text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
	},
]

export const projects = [
	{
		id: nanoid(),
		img: project1,
		url: 'https://styled-comp-project.netlify.app',
		github: 'https://github.com/whyest/styled-comp-project',
		title: 'Fancy Logo React Website',
		text: 'The website is fully responsive. The main sections are reusable components. It includes ReactJS, Styled Components, React Router 6.',
	},
	{
		id: nanoid(),
		img: project2,
		url: 'https://speed-type-testing.netlify.app',
		github: 'https://github.com/whyest/speed-typing-game',
		title: 'Speed Typing Test',
		text: 'Test your speed using our free typing test. In includes HTML/CSS and ReactJS.',
	},
	{
		id: nanoid(),
		img: project3,
		url: 'https://mortgagecalculator-project.netlify.app',
		github: 'https://github.com/whyest/mortgage-calculator',
		title: 'Mortgage Calculator',
		text: 'A project of the mortgage calculator using ReactJS, Material UI and ChartJS.',
	},
]
