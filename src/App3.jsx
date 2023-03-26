import { useState } from 'react'
import  "./App3.css"

function App3() {

    const [text ,setText] = useState("")
    const [finalText , setFinalTExt] = useState("")
    

    return(
       <div>
        <div> <textarea className='TextInput' type="text" value={text} onChange={(e)=>{
         setText(e.target.value)
        }}  /></div>

        <div><button onClick={(e)=>{
            setFinalTExt(text)
        }}>Add More</button></div>


        {finalText}

        
       </div>

    )
    
}

export default App3