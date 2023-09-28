import { links } from '../data'
const Navbar = () => {
	return (
		<nav className='bg-slate-50 dark:bg-slate-800 fixed top-0 left-0 w-full shadow-lg z-10'>
			<div className='section-container py-2 flex flex-col justify-between md:flex-row md:items-center md:py-8'>
				<h2 className='flex justify-center md:text-3xl text-2xl font-bold text-grayishBlue dark:text-emerald-50'>
					Web
					<span className='text-emerald-600'>Dev</span>
				</h2>
				<ul className='flex space-x-3 justify-center list-none'>
					{links.map(link => {
						const { id, href, text } = link
						return (
							<li key={id}>
								<a
									href={href}
									className='capitalize primary-clr dark:text-emerald-100 md:text-lg text-md px-1 py-1 tracking-wide hover:text-emerald-600 duration-300'
								>
									{text}
								</a>
							</li>
						)
					})}
				</ul>
			</div>
		</nav>
	)
}
export default Navbar
