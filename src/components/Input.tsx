import { CSSProperties, Ref, useRef } from "react"

export const segregateSet = (setText: string) => {
  const relationsUnstripped:string[] = setText.match(/\([^)]+\)/gi) || [""]
  
  const relations = relationsUnstripped.map((relationUnstripped:string) => {
    const relationStripped = (relationUnstripped.replace(/\s/g, "")).replace(/[^0-9,]/g, "")
    const relation = relationStripped.split(',')
    return relation
  })

  return relations
}

const Input = ({style, setSet}: {style: Object, setSet: Function}) => {


  const setTextRef:Ref<HTMLTextAreaElement> = useRef(null);

  const textareaStyle : CSSProperties = {
    "flexGrow": "1",
    "padding": "1rem",
    "width": "100%",
    "resize": "none"
  }

  return (
    <>
      <div style={style} id="input">
        <textarea ref={setTextRef} style={textareaStyle}/>
        <p><em>Tip:</em> Use parenthesis to segregate relations</p>
        <button style={{"width": "fit-content"}} onClick={() => { setSet(segregateSet(setTextRef.current!.value)) }}>Evaluate Sets</button>
      </div>
    </>
  )
}

export default Input