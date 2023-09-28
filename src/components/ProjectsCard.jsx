import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'
const ProjectsCard = ({ url, img, github, title, text }) => {
	return (
		<article className='relative bg-white pb-10 dark:bg-slate-700 rounded-lg shadow-md block hover:shadow-xl duration-300'>
			<img
				src={img}
				alt={title}
				className='w-full object-cover rounded-t-lg h-64 '
			/>
			<div className='p-8'>
				<h2 className='text-xl text-darkGrayishBlue dark:text-emerald-100 tracking-wide font-medium capitalize'>
					{title}
				</h2>
				<p className='mt-4 text-grayishBlue dark:text-emerald-50 leading-loose'>
					{text}
				</p>
				<div className='absolute bottom-8 left-8 mt-6 flex gap-x-4'>
					<a href={url} target='_blank'>
						<TbWorldWww className='h-8 w-8 text-grayishBlue hover:text-emerald-600 hover:dark:text-emerald-500 dark:text-emerald-100 duration-300' />
					</a>

					<a href={github} target='_blank'>
						<FaGithubSquare className='h-8 w-8 text-grayishBlue hover:text-emerald-600 hover:dark:text-emerald-500 dark:text-emerald-100 duration-300' />
					</a>
				</div>
			</div>
		</article>
	)
}
export default ProjectsCard
