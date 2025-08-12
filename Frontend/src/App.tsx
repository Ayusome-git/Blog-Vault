import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import { SignUp } from './pages/SignUp'
import { ThemeProvider } from "./components/theme-provider"
import { Login } from './pages/Login'
import { Blogs } from './pages/Blogs'
import { Blog } from './pages/Blog'
import { CreateBlog } from './pages/CreateBlog'
import { Profile } from './pages/Profile'

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/blog/:id' element={<Blog/>}/>
          <Route path='/createblog' element={<CreateBlog/>}/>
          <Route path='/me' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
