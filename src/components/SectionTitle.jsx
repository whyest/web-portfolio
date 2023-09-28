const SectionTitle = ({ text }) => {
	return (
		<div className='border-b border-gray-200 dark:border-emerald-100 pb-5'>
			<h2 className='text-3xl font-medium tracking-wider capitalize dark:text-emerald-100'>
				{text}
			</h2>
		</div>
	)
}
export default SectionTitle
