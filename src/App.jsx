import './App.css'
import Body from './components/Body'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar/>
    <h1 className='bg-[#efdcac] text-center p-3 my-3 min-w-fit rounded-md font-mono text-4xl font-bold border-2 border-[#92b423] hover:text-[#92b423] transition-all duration-1000'>Featured Baklawa</h1>
    <Body/>
    <Footer/>
    </>
  )
}

export default App
