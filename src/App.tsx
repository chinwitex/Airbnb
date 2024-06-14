// import React from 'react'
import Layout from './Layout'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomeWhenLoggedIN from './pages/HomeWhenLoggedIN'
import Signup from './pages/Signup'
import FinishSigningUp from './pages/FinishSigningUp'
import OurCommunity from './pages/OurCommunity'
import Opps from './components/Opps'
import Login from './components/Login'
import Areyousure from './components/Areyousure'
import SpalshScreen from './components/Splash'


function App() {
  return (
   <>
   
   
   <div className=' w-fit overflow-hidden  bg-gray-50 '  >
    <SpalshScreen/>

   <BrowserRouter>
   <Routes>
    <Route  path='/' element={<Layout/>}/>
    <Route  path='/login' element={<Login/>}/>
    <Route path='/homein' element={<HomeWhenLoggedIN/>} />
    <Route  path='/signup' element={<Signup/>}/>
    <Route  path='/finishig' element={<FinishSigningUp/>}/>
    <Route  path='/community' element={<OurCommunity/>}/>
    <Route  path='*' element={<Opps/>}/>
    <Route  path='/opps' element={<Opps/>}/>
    <Route  path='/logout' element={<Areyousure/>}/>
   </Routes>
   </BrowserRouter>   
   </div>

 
   
   </>

  )
}

export default App