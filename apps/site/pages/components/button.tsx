import { Button } from 'ui/src'
import Navbar from '../../components/Navbar'

export default function Web() {
	return (
		<>
		<Navbar></Navbar>
		<div className='container mx-auto p-10 items-center text-center'>
			
			<a className="card shadow-lg h-72 bg-slate-100">
				<div className="card-body items-center place-content-center text-center">
					<Button classes='transform-gpu'>Button</Button>
				</div>
			</a>
		</div>
		</>
	)
}
