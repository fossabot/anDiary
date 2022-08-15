import Head from "next/head"
import { FC } from 'react'

interface HeaderProps {
	title: string
}

const Header : FC<HeaderProps> = ({title}) => {
	return <>
		<Head>
			<title>{title} - anDiary</title>
		</Head>
	</>
}

export default Header
