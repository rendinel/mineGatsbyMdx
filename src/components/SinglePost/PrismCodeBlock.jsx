import React from 'react'
import { Highlight, themes } from 'prism-react-renderer'

export default function PrismCodeBlock(props) {
  const className = props.children.props.className
  const language = className.replace(/language-/, ``)
  return (
    <Highlight
      theme={themes.vsDark}
      code={props.children.props.children.trim()}
      language={language}
    >
      {({ tokens, getLineProps, getTokenProps }) => (
        <pre
          style={{
            background: '#282c34',
            padding: '1rem 1.5rem',
            borderRadius: '0.5rem',
            margin: '0.5rem 0',
            fontSize: '0.9rem',
            overflowX: 'scroll',
          }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              <span>{i + 1}</span>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
