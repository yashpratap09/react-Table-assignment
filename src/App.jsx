import { useState } from 'react'
import  "./App.css"



function App() {
  
    const [data,setdata] = useState({FirstName:"",lastName:"",address:"",pinCode:"",mobileNumber:""})
    const [showData,setShowData] = useState([])

    const clear = ()=>{
     setdata({FirstName:"",lastName:"",address:"",pinCode:"",mobileNumber:""})
    }

    const handleClick =  (event) =>{
      event.preventDefault()

      setShowData(oldArray => [ ...oldArray , data])
      clear()
      // console.log(showData[10].FirstName)


    }

  

  return (
    <div  className='mainbox'>

      <div className='first'>

        <form onSubmit={handleClick}>
          <div className='input1'>
            <label htmlFor="">First Name <input type="text" required={"dccsa"} value={data.FirstName} onChange={(e)=>setdata({...data,FirstName:e.target.value})} /> </label>
          
          </div>

          <div className='input1'>
            <label htmlFor="">Last Name <input required type="text" value={data.lastName} onChange={(e)=>setdata({...data,lastName:e.target.value})} /> </label>
          
          </div>

          <div className='input1'>
            <label htmlFor="">Address &nbsp;&nbsp;&nbsp; < input required type="text" value={data.address} onChange={(e)=>setdata({...data,address:e.target.value})} /> </label>
          
          </div>

          <div className='input1'>
            <label htmlFor="">Pincode &nbsp;&nbsp;&nbsp; <input required type="text" minLength='6' maxLength="6"  pattern="[0-9]*"  value={data.pinCode} onChange={(e)=>setdata({...data,pinCode:e.target.value})}/> </label>
          
          </div>

          <div className='input1'>
            <label htmlFor="">Mobile No.  <input type="phone" minLength="10" maxLength="10"   pattern="[0-9]*" message="cdscdf" required value={data.mobileNumber} onChange={(e)=>setdata({...data,mobileNumber:e.target.value})}/>  </label>
          
          </div>

          <button>Submit</button>
        </form>

      </div>


      <div className='second'>
  
      <div >
        <table >
          <tr >
            <th > No. </th>
            <th >First Name</th>
            <th > Last Name</th>
            <th >Address</th>
            <th >pincode</th>
            <th> mobile Number</th>
          </tr>

           

          {showData.map((val,key)=>{
            return (
              <tr key={key}>

                <td >{key+1}</td>  
                <td > {val.FirstName}</td>
                <td >{val.lastName}</td>
                <td>{val.address}</td>
                <td >{val.pinCode}</td>
                <td>{val.mobileNumber}</td>
                
              </tr>
            )
          })}
        </table>
      </div>  


      </div>

      
     
    </div>
  )
}

export default App
