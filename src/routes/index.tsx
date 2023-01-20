import { Routes, Route } from "react-router-dom";
import { Dashboard, Error } from '../pages';

function RoutesMain (){

  return( 
    <Routes>
         <Route path='/' element={<Dashboard/>}/>
         <Route path='/error' element={<Error/>}/>
    </Routes>
  )
}

export default RoutesMain;