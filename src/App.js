import { useState } from 'react'
import Header from './components/Header/Header'
import MAB from './components/MAB/MAB'
import List from './components/List/List'

function App() {
  const [todos, setTodos] = useState([])
  return (
    <div>
      <Header />
      <MAB />
      <List todos={todos} />
    </div>
  )
}

export default App
