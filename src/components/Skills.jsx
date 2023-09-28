import SkillsCard from './SkillsCard'
import { skills } from '../data'
import SectionTitle from './SectionTitle'
const Skills = () => {
	return (
		<section
			className='py-20 dark:bg-slate-900 md:scroll-mt-20 scroll-mt-16'
			id='skills'
		>
			<div className='section-container'>
				<SectionTitle text='tech stack' />

				<div class='py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{skills.map(skill => {
						return <SkillsCard key={skill.id} {...skill} />
					})}
				</div>
			</div>
		</section>
	)
}
export default Skills
