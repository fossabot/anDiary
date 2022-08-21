import React from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext()
	return (
		<>
			<div className="hero min-h-screen bg-primary text-primary-content">
				<div className="hero-content text-center">
					<div className="max-w-md">
						<h1 className="text-5xl font-bold">{siteConfig.title}</h1>
						<p className="py-6">
							{siteConfig.tagline}
						</p>
						<button className={clsx("btn bg-transparent border border-primary-content",
						"hover:bg-primary-content hover:border-primary hover:text-primary",
						"")}>Get Started</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext()
	return (
		<Layout
			title={`Hello from ${siteConfig.title}`}
			description={siteConfig.tagline}>
			<HomepageHeader />
			<main className="container mx-auto p-5">Hello people 👋</main>
		</Layout>
	)
}
