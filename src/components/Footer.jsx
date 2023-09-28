import {
	FaGithubSquare,
	FaLinkedin,
	FaTelegram,
	FaWhatsappSquare,
} from 'react-icons/fa'

const Footer = () => {
	return (
		<footer className='bg-darkGrayishBlue dark:bg-slate-800 py-8'>
			<div className='section-container py-4 flex flex-row space-x-2 items-center justify-center md:py-8 md:space-x-4'>
				<a href='https://github.com/whyest/' target='_blank'>
					<FaGithubSquare className='h-8 w-8 text-slate-100 dark:text-emerald-100 hover:text-emerald-600 hover:dark:text-emerald-500 duration-300' />
				</a>
				<a href='https://linkedin.com/in/denis-galkin-47a01712' target='_blank'>
					<FaLinkedin className='h-8 w-8 text-slate-100 dark:text-emerald-100 hover:text-emerald-600 hover:dark:text-emerald-500 duration-300' />
				</a>
				<a href='https://t.me/whyest' target='_blank'>
					<FaTelegram className='h-8 w-8 text-slate-100 dark:text-emerald-100 hover:text-emerald-600 hover:dark:text-emerald-500 duration-300' />
				</a>
				<a href='tel:+79031762623' target='_blank'>
					<FaWhatsappSquare className='h-8 w-8 text-slate-100 dark:text-emerald-100 hover:text-emerald-600 hover:dark:text-emerald-500 duration-300' />
				</a>
			</div>
		</footer>
	)
}
export default Footer
