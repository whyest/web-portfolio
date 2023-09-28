import { links } from '../data'
import { FaMoon } from 'react-icons/fa'
import { BsSun } from 'react-icons/bs'
import { useState } from 'react'

const Navbar = ({ theme, handleThemeSwitch }) => {
	return (
		<nav className=' bg-slate-50 dark:bg-slate-800 fixed top-0 left-0 w-full shadow-lg z-10'>
			<div className='relative section-container py-2 flex flex-col justify-between md:flex-row md:items-center md:py-8'>
				<h2 className='flex justify-center md:text-3xl text-2xl font-bold text-grayishBlue dark:text-emerald-50'>
					Web
					<span className='text-emerald-600'>Dev</span>
				</h2>
				<ul className='flex space-x-3 justify-center list-none md:mr-32'>
					{links.map(link => {
						const { id, href, text } = link
						return (
							<li key={id}>
								<a
									href={href}
									className='capitalize primary-clr dark:text-emerald-100 md:text-lg text-md px-3 py-1 tracking-wide hover:text-emerald-600 hover:dark:text-emerald-500 duration-300'
								>
									{text}
								</a>
							</li>
						)
					})}
				</ul>
				<button
					className='absolute right-8 top-5 h-8 w-8 flex items-center justify-center md:top-8 text-darkGrayishBlue dark:text-emerald-100 border border-grayishBlue dark:border-emerald-100 px-2 py-1 rounded-md'
					onClick={handleThemeSwitch}
				>
					{theme === 'light' ? <BsSun /> : <FaMoon />}
				</button>
			</div>
		</nav>
	)
}
export default Navbar
