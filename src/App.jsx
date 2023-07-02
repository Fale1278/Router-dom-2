import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet} from 'react-router-dom'
import { Home } from './Home.jsx'
import { Contact } from './Contact.jsx'
import { Data } from './Data.jsx'


function App(props) {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />}/>
        <Route  element={<Data />}/>
        <Route  element={<Contact />}/>
      </Route>
    )
  )

  return ( 
    <div className='App'>
      <h1>Hello React.</h1>   
      <h2>Start editing to see some magic happen!</h2>   
    </div>
  )
}

const Root = () =>{
  return(
    <>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/'>Data</Link>
      </div>

      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App