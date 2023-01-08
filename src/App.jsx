// react Hooks 
import React, {useState, useEffect} from 'react'
import './component/Form.css'


function App() {
// states 
const [studentArray, setStudentArray] = useState([])

const [userData, setUserData] = useState("")
const [passwordData, setPasswordData] = useState("")

 useEffect(()=>{
  console.log(studentArray)
 },[studentArray])


// Helper func 
function btn(){
  setStudentArray(
    [
    ...studentArray,
    {
      userData,
      passwordData
    }
  ])

  console.log(studentArray)
}


// Helper func  for input
// function User(e){
//   setUserData(e.target.value)
// }
// function Password(e){
//   setPasswordData(e.target.value)
// }



  return (
    <div className='cont'>
  
    
    <div className='form'>
      <h1 className='hd'>Login Form</h1>
    
    
    <div className='user'> 
     <input  className='user_input' onChange={(e)=>{setUserData(e.target.value)}} type="text" placeholder='username' />    
     </div>

    <div  className='password'> 
    <input className='ps_input' onChange={(e)=>{setPasswordData(e.target.value)}} type="password" placeholder='password'/>     
    </div>

    <button  className='btn' onClick={btn}>Click Me</button>
    </div>
    

        

    </div>
  )
}

export default App
