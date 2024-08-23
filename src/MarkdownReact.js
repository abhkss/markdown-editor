import React, { useState } from 'react'
import "./Style.css"
import Markdown from 'react-markdown'

const MarkdownReact = () => {
  const [markDown ,setMarkDown] = useState("welcome to my mark dowmn")
  return( 
    <>
  <div className='center-div'>
<textarea className='left-side'
value={markDown}
onChange={
(e) => setMarkDown(e.target.value)
}
></textarea>
<div className='right-side'><Markdown>{markDown}</Markdown></div>
  </div>
  </>
  )
}

export default MarkdownReact;
