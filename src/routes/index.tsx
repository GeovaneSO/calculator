import { Routes, Route } from "react-router-dom";
import { Dashboard } from '../pages';

function RoutesMain (){

  return( 
    <Routes>
         <Route path='/' element={<Dashboard/>}/>
    </Routes>
  )
}

export default RoutesMain;