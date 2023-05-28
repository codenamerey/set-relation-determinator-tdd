import { useState } from 'react'
import './App.css'
import Input from './components/Input.tsx'
import Output from './components/Output.tsx'
import { result } from './interfaces/interfaces.tsx'


export const isTransitive = (set:number[][]) => {
  return set.every(element => {
    let first_item = element[0];
    let second_item = element[1];
    // Does the second item appear as first item in any array from set?
    const contains_as_first = set.filter(element => {
        return element[0] == second_item;
    });
    // If (a, b) and (b, c), is (a, c)?
    const items_must_exist:number[][] = [];
    contains_as_first.forEach(element => {
        const item_must_exist = [first_item, element[1]];
        items_must_exist.push(item_must_exist);
    });
    return items_must_exist.every(item => {
        return set.some(element => {
            return isSameArray(element, item);
        })
    })
  })
}

const isSameArray = (array1:number[], array2:number[]) => {
  if(array1.length !== array2.length) return false;
  return array1.every((element, index) => {
      return element == array2[index];
  })
}

function App() {
  const [result, setResult] = useState<result>({})
  const [sets, setSets] = useState<number[][]>([]);

  const style = {
    "padding": "4px"
  }

  return (
    <>
      <Input style={style} setSets={setSets}/>
      <Output result={result} />
    </>
  )
}

export default App
