import heroImg from '../assets/hero.svg'
import {
	FaGithubSquare,
	FaLinkedin,
	FaTelegram,
	FaWhatsappSquare,
} from 'react-icons/fa'
const Hero = () => {
	return (
		<section
			className='bg-emerald-100 dark:bg-slate-800 py-24 pt-44 md:scroll-mt-20 scroll-mt-16 hero'
			id='home'
		>
			<div className='section-container grid md:grid-cols-2 items-center gap-8'>
				<article>
					<h1 className='text-6xl dark:text-emerald-400 sm:text-7xl primary-clr font-bold tracking-wider'>
						I'm Denis
					</h1>
					<p className='mt-4 text-2xl dark:text-emerald-100 sm:text-3xl secondary-clr'>
						Front-end developer
					</p>
					<p className='mt-2 text-lg secondary-clr dark:text-emerald-100'>
						turning ideas into interactive reality
					</p>
					<div className='flex gap-x-4 mt-4'>
						<a href='https://github.com/whyest/' target='_blank'>
							<FaGithubSquare className='h-8 w-8 text-grayishBlue dark:text-emerald-100 hover:text-emerald-600 duration-300' />
						</a>

						<a
							href='https://linkedin.com/in/denis-galkin-47a01712'
							target='_blank'
						>
							<FaLinkedin className='h-8 w-8 text-grayishBlue dark:text-emerald-100 hover:text-emerald-600 duration-300' />
						</a>

						<a href='https://t.me/whyest' target='_blank'>
							<FaTelegram className='h-8 w-8 text-grayishBlue dark:text-emerald-100 hover:text-emerald-600 duration-300' />
						</a>
						<a href='tel:+79031762623' target='_blank'>
							<FaWhatsappSquare className='h-8 w-8 text-grayishBlue dark:text-emerald-100 hover:text-emerald-600 duration-300' />
						</a>
					</div>
				</article>

				<article className='hidden md:block '>
					<img src={heroImg} className='h-80 lg:h-96' />
				</article>
			</div>
		</section>
	)
}
export default Hero
