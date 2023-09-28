import ProjectsCard from './ProjectsCard'
import { projects } from '../data'
import SectionTitle from './SectionTitle'
const Projects = () => {
	return (
		<section
			className='py-20 dark:bg-slate-900 md:scroll-mt-20 scroll-mt-16'
			id='projects'
		>
			<div className='section-container'>
				<SectionTitle text='web creations' />
				<div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
					{projects.map(project => {
						return <ProjectsCard key={project.id} {...project} />
					})}
				</div>
			</div>
		</section>
	)
}
export default Projects
