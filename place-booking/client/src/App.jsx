
import { Route, Routes } from 'react-router-dom'
import './App.css'
import indexpages from './pages/IndexPage'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route index element={<IndexPage />} />


    </Routes>
    
  )
}

export default App
