import { result } from "../interfaces/interfaces.tsx"

const Output = ({result}:{result:result}) => {

    const isPropertyTrue = (property:boolean):string => {
        return property ? "Yep" : "Nope"
    }

  return (
    <output>
        <p>Is it reflexive? {result.isReflexive ? isPropertyTrue(result.isReflexive) : ''}</p>
        <p>Is it transitive? {result.isTransitive ? isPropertyTrue(result.isTransitive) : ''}</p>
        <p>Is it symmetric? {result.isReflexive ? isPropertyTrue(result.isSymmetric!) : ''}</p>
        <p>Is it antisymmetric? {result.isAntiSymmetric ? isPropertyTrue(result.isAntiSymmetric) : ''}</p>
    </output>
  )
}

export default Output