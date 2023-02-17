// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import TreeViewOne from './components/TreeViewOne';


// function App() {
//   return (
//     <div className="App">
   
//      <TreeViewOne/>
//     </div>
//   );
// }

// export default App;
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Array from './components/Array'
import Data from './components/Data'
import TreeViewOne from './components/TreeViewOne'
import "./App.css"
import Local from './components/Local'
import Faqdata from './components/Faq'
import Udata from './components/Udata'
import Task from './components/Task'
import Formvalidation from './components/Formvalidation'
import Reduxtask from './components/Reduxtask'
import Login from './components/Login'
import {admin} from "./components/Route"
import {User} from "./components/Route"
import Sidebar from './components/Sidebar'
import Reduxtsk from './components/Reduxtask'
const App = () => {
  console.log(admin,"adminnn")

  const role = localStorage.getItem("role")
 
  return (
    <div>
<Reduxtsk/>
      {/* <Routes>
     {role === "admin" &&
  admin.map((data, i) => (
    <>
    <Route path={data.path} element={data.component}></Route>
    </>
  ))}
        {role === "user" && User.map((data,i) => (
  <>
   <Route path={data.path} element={data.component}></Route>
  </>
))}
        <Route path='/' element={<Login/>}></Route>
      </Routes> */}
      {/* <TreeViewOne/> */}
      {/* <Routes>
        <Route path="/" element={<Array/>}></Route>
        <Route path="/data/:id" element={<Data/>}></Route>
      </Routes> */}
     {/* <Quetion/> */}
     {/* <Select/> */}
     {/* <Local/> */}
     {/* <Faqdata/> */}
     {/* <Udata/> */}
     {/* <Task/> */}
     {/* <Formvalidation/> */}
     {/* <Reduxtask/> */}
     {/* <Sidebar/> */}
    </div>
  )
}

export default App
