import { FC } from 'react'
import Tilt from 'react-parallax-tilt'
import bg from '@/assets/bg.png'
import firstMount from '@/assets/firstMount.png'
import secondMount from '@/assets/secondMount.png'
import { Box, Typography } from '@mui/material'
import { textVariant } from '@/utils/motion'
import { motion } from 'framer-motion'
import { useScroll } from '@/components/hooks/useScroll'


const ParallaxSection: FC = () => {
	const scrollTop = useScroll()


	return (
		<div className='parallax'>
			<Tilt
				tiltMaxAngleX={2}
				tiltMaxAngleY={2}
				perspective={2000}
				transitionSpeed={30}
				gyroscope={false}
			>
				<Box
					display='flex'
					justifyContent='center'
					alignItems='center'
					minHeight='100vh'
				>
					<motion.div
						className='title'
						variants={textVariant('0.2')}
						initial='hidden'
						whileInView='show'
						viewport={{ once: true, amount: 0.25 }}
					>
						<Typography
							position='absolute'
							top={scrollTop}
							zIndex={60}
							color='white'
							fontWeight='bold'
							variant='h1'>
							Welcome to Ha Long
						</Typography>
					</motion.div>
				</Box>
				<img
					className='bg-parallax'
					src={bg}
					alt='bg' />
				<img
					className='first-mount'
					src={firstMount}
					alt='firstMount' />
				<img
					className='second-mount'
					src={secondMount}
					alt='secondMount'
				/>
			</Tilt>
		</div>

	)
}

export default ParallaxSection