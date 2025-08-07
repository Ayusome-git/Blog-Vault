import { Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import { SignUp } from './pages/SignUp'
import { ThemeProvider } from "./components/theme-provider"
import { Login } from './pages/Login'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
