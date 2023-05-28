import { Ref, useRef } from "react"

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

  return (
    <>
      <textarea style={style} ref={setTextRef}/>
      <button onClick={() => { setSet(segregateSet(setTextRef.current!.value)) }}>Evaluate Sets</button>
    </>
  )
}

export default Input