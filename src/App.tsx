import { useState } from 'react'
import './App.css'
import Input from './components/Input.tsx'
import Output from './components/Output.tsx'
import { result } from './interfaces/interfaces.tsx'


function App() {
  const [result, setResult] = useState<result>({})

  const style = {
    "padding": "4px"
  }

  return (
    <>
      <Input style={style} />
      <Output result={result} />
    </>
  )
}

export default App
