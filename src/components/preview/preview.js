import React from 'react'
import './preview.css'

/**
 * A React component, representing a JXO preview tile.
 */
function Preview ({ children }) {
  return (
        <div className="jxo-preview-container">
            <img
                className="jxo-preview"
                src="https://avatars.githubusercontent.com/u/63457760?s=60&v=4"
            >
            </img>
            <img
                className="jxo-preview"
                src="https://avatars.githubusercontent.com/u/63457760?s=60&v=4"
            >
            </img>
            <img
                className="jxo-preview"
                src="https://avatars.githubusercontent.com/u/63457760?s=60&v=4"
            >
            </img>
        </div>
  )
}

export default Preview
