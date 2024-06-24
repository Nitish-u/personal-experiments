import Navbar from './components/navbar/navBar'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/home/homePage'
import About from './components/about/about'
import ContactPage from './components/contact/contact'
import Comp1 from './components/home/child components for home page/comp1'
import Comp2 from './components/home/child components for home page/comp2'
import Comp3 from './components/home/child components for home page/comp3'
import ProtectedComp from './components/protected route/protectedComp'
import Auth from './components/auth/auth'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Auth/>}/>
      <Route path='/home' element={<ProtectedComp Component={HomePage} />}>
        <Route path='comp1' element={<ProtectedComp Component={Comp1}/>}/>
        <Route path='comp2' element={<ProtectedComp Component={Comp2}/>}/>
        <Route path='comp3' element={<ProtectedComp Component={Comp3}/>}/>
      </Route>
      <Route path='/about' element={<ProtectedComp Component={About}/>}/>
      <Route path='/contact' element={<ProtectedComp Component={ContactPage}/>}/>
      <Route path='/contact/:name' element={<ProtectedComp Component={ContactPage}/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
