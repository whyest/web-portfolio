import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'
const About = () => {
	return (
		<section
			class='bg-white dark:bg-slate-900 py-20 md:scroll-mt-20 scroll-mt-16'
			id='about'
		>
			<div class='section-container grid  md:grid-cols-2 items-center gap-16'>
				<img src={aboutSvg} className='w-full md:h-64 h-56' />
				<article>
					<SectionTitle text='code and coffee' />
					<p className='text-grayishBlue tracking-wider mt-8 leading-loose dark:text-emerald-50'>
						I'm a frontend developer based in Moscow, Russia. I love building
						apps that solve real-world problems, and that are delightful to use.
						My specialties include React JS, Tailwind CSS, and Styled
						Components.
					</p>
					<p className='text-grayishBlue tracking-wider mt-8 leading-loose dark:text-emerald-50'>
						My background is in teaching and travel, and I have a bachelors
						degree in English. I also have an adorable daughter.
					</p>
					<a
						href='mailto:whyest@gmail.com'
						target='_blank'
						class='inline-block mt-6 bg-emerald-500 text-emerald-50 border border-emerald-300 border-b-4 font-medium overflow-hidden relative px-6 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group'
					>
						<span class='bg-emerald-200 shadow-emerald-200 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]'></span>
						Send me a message
					</a>
				</article>
			</div>
		</section>
	)
}
export default About
