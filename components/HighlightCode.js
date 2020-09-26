import { createRef, useEffect } from 'react'
import { findDOMNode } from 'react-dom'
import highlight from 'highlight.js'

export default function HighlightCode(props) {
  const { children, language } = props
  const code = createRef()

  // Find the 'DOM' node for 'code' element
  // Then, execute 'highlightBlock' function with the given 'DOM' node
  useEffect(() => {
    highlight.highlightBlock(findDOMNode(code.current))
  }, [])

  return (
    <pre>
      <code ref={code} className={language}>
        {children}
      </code>
    </pre>
  )
}
