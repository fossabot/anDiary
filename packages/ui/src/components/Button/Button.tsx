import React from 'react'
import clsx from 'clsx'
import pt from 'prop-types'

const Button = (props:any) => {
	return (
		<>
			<a
				className={clsx(
					'btn',
					'bg-gradient-to-r from-cyan-500 to-blue-500 border-none',
					props.classes
				)}>
				{props.children}
			</a>
		</>
	)
}

Button.propTypes = {
	children: pt.node,
	disabled: pt.bool,
	size: pt.oneOf(['sm', 'md', 'lg']),
	type: pt.oneOf(['primary', 'outline']),
	classes: pt.string
}

export default Button
