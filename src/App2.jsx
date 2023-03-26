import { useState } from 'react'
import  "./App2.css"

function App2() {

    const [data , setdata] = useState({Button:'' , time:""})
    const [finalData, setfinalData] = useState([])

    const date = new Date();
    const showTime = date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds();

    const handlerClick = ()=>{
        console.log(data)

        if(data.Button==""){
            return 
        }else(
            setfinalData(olddata=>[...olddata,data])
        )
        
        // setfinalData(olddata=>[...olddata,data])
        
    }








    return(
        <div className='mainbox' >


          <div className='first'> 
            <div>
            <button onClick={(e)=>{
                setdata({ Button:"A" , time:showTime})
                handlerClick()
            }}>A</button>
            </div>

            <div>
            <button onClick={(e)=>{
                setdata({ Button:"B" , time:showTime})
                handlerClick()
            }}>B</button>
            </div>

            <div>
            <button onClick={(e)=>{
                setdata({ Button:"C" , time:showTime})
                handlerClick()
            }}>C</button>
            </div>

            <div>
            <button onClick={(e)=>{
                setdata({ Button:"D" , time:showTime})
                handlerClick()
            }}>D</button>
            </div>

         </div>   



         <div className='second'>


            <table>
                <tr>
                    <th>No.</th>
                    <th>Button Name</th>
                    <th>Time</th>
                </tr>

                {finalData.map((val,key)=>{
                    return(
                        <tr key = {key}>
                            <td>{key+1}</td>
                            <td>{val.Button}</td>
                            <td>{val.time}</td>
                        </tr>
                    )
                })}


            </table>
            
            
            </div> 

           
            
            
        </div>



    )
    
}

export default App2


