'use strict'

import React from 'react'
import './vertnavbar.css'

/**
 * @pre             len(props.titles) === len(props.links).
 * @pre             len(props.titles) || len(props.links) !== 0.
 * @param {*} props The default React props object. In addition, should be provided:
 *                      - {Array<string>} props.titles  The text(s) that is to be displayed
 *                                                      as titles in the navbar.
 *                      - {Array<string>} props.links   The ith link corresponds to the ith item in props.titles.
 *                      - {string}        props.height  A React-CSS value to determine the height of the vert. navbar.
 */
function VertNavbar (props: any) {
  const height: string = props.height
  const titles: Array<string> = props.titles
  const links: Array<string> = props.links

  const vertNavbarStyles = {
    height: height
  }

  const titlesAndLinks = titles.map((_, index) => {
    return ({
      title: titles[index],
      link: links[index]
    })
  })

  return (
        <nav data-cy='vert-navbar' className='vert-navbar' style={vertNavbarStyles}>
            {titlesAndLinks.map(titleAndLink =>
                <div>
                    <a href={titleAndLink.link}>{titleAndLink.title}</a>
                </div>
            )}
        </nav>
  )
}

export default VertNavbar
