import Link from 'next/link'
import { Button } from 'ui'

export default function Web() {
	return (
		<div className="container mx-auto px-10 pt-10 grid grid-cols-4 gap-4">
			<Link href="/components/button">
			<a className="card shadow-lg hover:-translate-y-1 hover:scale-110 hover:cursor-pointer transition duration-300">
				<div className="card-body items-center text-center">
					<Button classes='' >Hello</Button>
				</div>
			</a>
			</Link>
		</div>
	)
}
