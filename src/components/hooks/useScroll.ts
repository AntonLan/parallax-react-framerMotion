import { useEffect, useState } from 'react'

export const useScroll = () => {
	const [scrollTop, setScrollTop] = useState('30%')

	useEffect(() => {
		const handleScroll = () => {
			let result = (30 + (window.scrollY * 2.5 / 100)) + '%'
			setScrollTop(result)
		}
		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return scrollTop
}