import React from "react"

import {ButtonProps} from "./Button.types"

const Button = (props: ButtonProps) => {
  return (
		<button className="btn btn-ghost">{props.text}</button>
	)
}

export default Button