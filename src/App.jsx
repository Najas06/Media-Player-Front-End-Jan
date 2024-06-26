
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import LandingPage from './pages/LandingPage'
import WatchHistory from './pages/WatchHistory'
import './bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  

  return (
   <>
   <Header/>
   <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/watchhistory' element={<WatchHistory/>}/>
   </Routes>
   <Footer/>
   </>
  )
}

export default App
