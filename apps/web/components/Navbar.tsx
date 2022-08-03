import Link from 'next/link'
import React from 'react'
import { Button } from 'ui'

export default function Navbar() {
	return (
		<>
			<div className="navbar h-20 bg-base-100 px-5 shadow-md">
				<div className="flex-1">
					<a className="btn btn-ghost normal-case text-xl hover:bg-transparent">
						anDiary
					</a>
				</div>
				<div className="flex-none">
					{/* <li tabindex="0">
							<a>
								Parent
								<svg
									className="fill-current"
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24">
									<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
								</svg>
							</a>
							<ul className="p-2 bg-base-100">
								<li>
									<a>Submenu 1</a>
								</li>
								<li>
									<a>Submenu 2</a>
								</li>
							</ul>
						</li> */}
					<Link href="/components">
						<a>
							<Button classes="text-white">Components</Button>
						</a>
					</Link>
				</div>
			</div>
		</>
	)
}
