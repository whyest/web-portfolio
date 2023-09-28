const SkillsCard = ({ icon, title, text }) => {
	return (
		<article>
			<span className='h-16 w-16'>{icon}</span>
			<h4 className='mt-6 font-bold primary-clr dark:text-emerald-100'>
				{title}
			</h4>
			<p className='mt-2 text-grayishBlue tracking-wider dark:text-emerald-50'>
				{text}
			</p>
		</article>
	)
}
export default SkillsCard
