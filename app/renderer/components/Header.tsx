import Head from "next/head"
import { FC } from 'react'

interface HeaderProps {
	name: string
}

const Header = ({name}: HeaderProps) => {
	const heading = name + " - anDiary"
	return <>
		<Head>
			<title>{heading}</title>
		</Head>
	</>
}

export default Header
