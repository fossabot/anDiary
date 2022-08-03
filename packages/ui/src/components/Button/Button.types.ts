import { MouseEventHandler } from 'react'
import PropTypes from 'prop-types'

export interface ButtonProps {
	text?: string
	disabled?: boolean
	size?: typeof PropTypes.oneOf
	classes?: string
	onClick?: MouseEventHandler<HTMLButtonElement>
}
