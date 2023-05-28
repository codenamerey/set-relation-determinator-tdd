import { useState } from 'react'
import './App.css'
import Input from './components/Input.tsx'
import Output from './components/Output.tsx'
import { result } from './interfaces/interfaces.tsx'


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
