import { FC } from 'react'
import SectionLayout from '@/components/layout/SectionLayout'
import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'

const About: FC = () => {
	return (
		<Box
			width={900}
			display='flex'
			flexDirection='column'
			justifyContent='center'
			alignItems='start'
			minHeight='100vh'
			zIndex={10}
			letterSpacing={2}
		>
			<motion.div variants={fadeIn('up', 'spring', '0.5', '1.5')}>
				<Typography
					mb={2}
					fontWeight='bold'
					color='white'
					variant='h5'
				>
					Ha Long Bay
				</Typography>
				<Typography
					mb={1}
					fontWeight='300'
					color='white'
					variant='h6'
				>
					Hạ Long Bay or Halong Bay is a UNESCO World Heritage Site and popular travel
					destination in Quảng Ninh Province, Vietnam. The name Hạ Long
					means "descending dragon". Administratively, the bay belongs to
					Hạ Long city, Cẩm Phả city, and is a part of Vân
					Đồn district. The bay features thousands of limestone karsts and
					isles in various shapes and sizes. Hạ Long Bay is a center of a larger
					zone which includes Bai Tu Long Bay to the northeast, and Cát Bà Island
					to the southwest. These larger zones share a similar geological, geographical,
					geomorphological, climate, and cultural characters.
				</Typography>
				<Typography
					mb={1}
					fontWeight='300'
					color='white'
					variant='h6'
				>
					Hạ Long Bay has an area of around 1,553 km2 (600 sq mi),
					including 1,960–2,000 islets, most of which are limestone.
					The core of the bay has an area of 334 km2 (129 sq mi) with a high
					density of 775 islets. The limestone in this bay has gone through
					500 million years of formation in different conditions and environments.
					The evolution of the karst in this bay has taken 20 million years under
					the impact of the tropical wet climate. The geo-diversity of the
					environment in the area has created biodiversity, including a tropical
					evergreen biosystem, oceanic and sea shore biosystem. Hạ Long Bay
					is home to 14 endemic floral species and 60 endemic faunal species.
				</Typography>
				<Typography
					mb={1}
					fontWeight='300'
					color='white'
					variant='h6'
				>
					Historical research surveys have shown the presence of prehistoric
					human beings in this area tens of thousands years ago. The successive
					ancient cultures are the Soi Nhụ culture around 18,000–7,000 BC, the
					Cái Bèo culture 7,000–5,000 BC and the Hạ Long culture 5,000–3,500
					years ago. Hạ Long Bay also marked some important events in Vietnamese
					history, with many artifacts found in Bài Thơ mountain, Đầu Gỗ cave, and Bãi Cháy.
				</Typography>
			</motion.div>
		</Box>
	)
}

export default SectionLayout(About, 'about')