import React from "react"
import {render, screen } from '@testing-library/react'

import Button from "./Button";

describe("Running Test for Button", () => {

  test("Check Button Disabled", () => {
    render(<Button text="Button Test"/>)
    expect(screen.getByRole('button',{name:"Button Test"}));
  });

})