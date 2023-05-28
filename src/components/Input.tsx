import { Ref, useRef } from "react"

export const segregateSets = (setText: string) => {
  const relationsUnstripped:string[] = setText.match(/\([^)]+\)/gi) || [""]
  
  const relations = relationsUnstripped.map((relationUnstripped:string) => {
    const relationStripped = (relationUnstripped.replace(/\s/g, "")).replace(/[^0-9,]/g, "")
    const relation = relationStripped.split(',')
    return relation
  })

  return relations
}

const Input = ({style, setSets}: {style: Object, setSets: Function}) => {


  const setTextRef:Ref<HTMLTextAreaElement> = useRef(null);

  return (
    <>
      <textarea style={style} ref={setTextRef}/>
      <button onClick={() => { setSets(segregateSets(setTextRef.current!.value)) }}>Evaluate Sets</button>
    </>
  )
}

export default Input