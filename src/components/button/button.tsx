'use strict'

import React from 'react'
import './button.css'

/**
 * @param {*} props The default React props object. In addition,
 *                  can also contain the properties:
 *                      - {Size} props.size:            Defines the width and height of the button.
 *                      - {string} props.bColor:        The background color of the button; should be React-CSS value.
 *                      - {string} props.tColor:        The text color of the button; should be React-CSS value.
 *                      - {() => void} props.bColor:    Function that is called on button clicked.
 */
function Button (props: any) {
  const size: Size = props.size
  const bColor: string = props.bColor
  const tColor: string = props.tColor
  const onClick: () => void = props.onClick

  const buttonStyle = {
    width: size ? size.width : undefined,
    height: size ? size.height : undefined,
    backgroudColor: bColor,
    color: tColor
  }

  return (
        <button className="button" style={buttonStyle} onClick={() => onClick()}>
            {props.children}
        </button>
  )
}

export default Button
