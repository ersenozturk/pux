import React, { useRef } from 'react'
import JoditEditor from 'jodit-react'

const config = {
  buttons: ["bold", "italic", "link", "unlink", "underline", "source"],
};

const Editor = ({ initialValue, getValue }) => {
  const editor = useRef(null)
  return (
    <JoditEditor
    ref={editor}
    value={initialValue}
    config={config}
    tabIndex={1}
    onChange={(newContent) => getValue(newContent)}
  />
  )
}

export default Editor