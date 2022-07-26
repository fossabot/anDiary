import React from "react"

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button className="btn btn-ghost">{props.label}</button>;
}

export default Button
