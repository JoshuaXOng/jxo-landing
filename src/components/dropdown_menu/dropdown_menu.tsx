'use strict'

import React, { useState, useEffect, ReactElement } from 'react'
import './dropdown_menu.css'
import { v4 as uuidv4 } from 'uuid'

interface DropDownMenuProps {
    children?: ReactElement,
    source?: ReactElement,
    position?: Position
}

/**
 * A React component, however, it does not function as a stand-alone component.
 * This component modifiers the behaviour of other components; it appends
 * a drop down behaviour to a component.
 *
 * @param children  This is a default attribute of a React components props object.
 * @param source    The React component that is to have a drop down menu.
 * @param position  An object containing x and y attributes that have CSS values;
 *                  the values determine where the drop down popup appears in absolute
 *                  positioning to the top-left of the drop down container.
*/
function DropDownMenu ({ children = null, source = null, position = null }: DropDownMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const id = uuidv4()
  const [popupStyle, setPopupStyle]: [any, any] = useState(position
    ? {
        top: position.y,
        left: position.x
      }
    : {}
  )

  useEffect(() => {
    const popup = document.getElementById(id)
    const popupRect = popup.getBoundingClientRect()
    const X = 20
    if (popupRect.right > window.outerWidth) {
      const shift = window.outerWidth - popupRect.right - X
      setPopupStyle({ ...popupStyle, transform: `translateX(${shift}px)` })
    } else if (popupRect.left < 0) {
      const shift = window.outerWidth - popupRect.left + X
      setPopupStyle({ ...popupStyle, transform: `translateX(${shift}px)` })
    }
  }, [isOpen])

  return (
        <div className="jxo__drop-down-menu-container">
            <div onClick={() => setIsOpen(!isOpen)}>
                {source}
            </div>
            <div id={id} className="jxo__drop-down-menu-container__menu" style={popupStyle}>
                {isOpen && children} {/* CAN ALSO DO SOMETHING LIKE jxo__drop-down-menu-container__menu--is-open */}
            </div>
        </div>
  )
}

export default DropDownMenu
