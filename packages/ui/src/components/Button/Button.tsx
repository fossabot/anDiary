import React from 'react'

import { ButtonProps } from './Button.types'

const Button = ({ text }: ButtonProps) => {
	return <button className="btn btn-ghost">{text}</button>
}

export default Button
