import { motion } from 'framer-motion'
import { staggerContainer } from '@/utils/motion'


const SectionLayout = (Component: any, idName: string) =>
	function HOC() {
		return (
			<motion.section
				variants={staggerContainer()}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.25 }}
			>
				<Component />
				<span id={idName}></span>
			</motion.section>
		)
	}

export default SectionLayout