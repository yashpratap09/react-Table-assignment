import { useState } from "react";
import "./App.css";
import textarea_caret from "textarea-caret";
import { useKeyPress } from 'ahooks';




function App() {
  const [data, setdata] = useState({ text: "" });
  const [showData, setShowData] = useState([]);
  const [showDrop,setShowDrop] = useState(false)
  const [drop, setDrop] = useState("");
  const [counter, setCounter] = useState(0)
  const [position, setPosition] = useState(true)
  
  let name = [
    "Gina Williams",
    "Jake Williams",
    "Jamie John",
    "John Doe",
    "Jeff Stewart",
    "Paula M. Keith",
  ];


  const clear = () => {
    setdata({ text: "" });
  };

  const handleClick = () => {
    setShowData((oldArray) => [...oldArray, data]);
    clear();
  };

  
 //====== this function for find tha location of textarea curser=======//

  function placeDiv(x_pos, y_pos) {
    var d = document.getElementById('dropdown');
    d.style.position = "absolute";
    d.style.left = x_pos+'px';
    d.style.top = y_pos+'px';
    
    
  }
  if(showDrop && position && data.text[0]==="@"){

    placeDiv(45,85)
    setPosition(false)
  }

  //======================================================//

 
  // useKeyPress('uparrow', () => {

  //   if(showDrop){
  //     if(counter>0){
      
  //       setCounter((s) => s - 1);
  //     }
      
  //    var a= document.getElementById(name[counter])
  //    a.style.backgroundColor = "red"
  
  
  //    if(counter<name.length-1){
  //     var b =   document.getElementById(name[counter+1])
  //     b.style.backgroundColor = "white"
  //    }

  //   }

    
   
  

  //  });

  

//  //====== this function for  keyCode value for ArrowDown=======//
  
  
 
 
   // keyCode value for ArrowDown
   useKeyPress(40, () => {

    if(showDrop){
      if(counter<=name.length-1){
      
        setCounter((s) => s + 1);
        var a= document.getElementById(name[counter])
        a.style.backgroundColor = "red"
  
        if(counter>0){
          var b =   document.getElementById(name[counter-1])
          b.style.backgroundColor = "white"
  
        }
        
      }else{
        setCounter(0)
        var c = document.getElementById(name[5])
        c.style.backgroundColor = "white"
      }
      
      
    }
    
   
   });


   //============ //====== this function for Enter key button=======//

 
    useKeyPress(13, () => { 

      if(showDrop){
       let value = data.text
        for(let i=0;i<data.text.length;i++){
          if (value[i] ==="@") {
            let text1 =  value.replace(value[i] ,name[counter-1])
            setdata({...data,text:text1})
            
            setShowDrop(false)
            setCounter(0)
          }
          // console.log()
        }
        // console.log(name[counter-1])
      }
      
      
        });
   


   




  

  const Onchange = (e) => {
    document.querySelector('textarea').addEventListener('input', function () {
      var caret = textarea_caret(this, this.selectionEnd);
      // console.log('(top, left, height) = (%s, %s, %s)', caret.top, caret.left, caret.height);
      placeDiv(caret.left+5,caret.top+70)
     
  
    })
    let value = e.target.value;
    
    for (let i = 0; i < value.length; i++) {
      if (value[i] ==="@") {
        // console.log(event.keyCode)
        
       
        setShowDrop(true)
       
        // placeDiv(120,200)

        // console.log(name)
        setDrop (
          <div >
           { name.map((ele,index)=>{
               
             return ( <p  id={ele} key={index}  className="singlebox"  onClick={()=>{

             
              

                let text1 =  value.replace(value[i] , ele)
                //  let text1 = value.split(" ")
                //  let text2 = text1.splice( 0, text1.indexOf(value[i]) )
               setdata({...data,text:text1})
               setShowDrop(false)
              
              
              // handleReplace(ele,e)
             }}>{ele}</p>)
            })}

          </div>
        );

        
        // console.log(drop)
      }else(
        setShowDrop(false)
      )
    }

    setdata({ ...data, text: e.target.value });
  };






  


  return (
    <div className="mainbox">
      

      <div className="first">
        <div>
          <div className="input1">
            <textarea
              type="text"
              required
              value={data.text}
              onChange={(e) => Onchange(e)}
            
            />
            <div  id="dropdown" className="drop"> { showDrop ==true? drop: null }</div>
          </div>


        
          



          <div>
            <button onClick={handleClick}>+Add Note</button>

            <button onClick={clear}>Reset</button>
          </div>
        </div>
      </div>

      <div className="second">
        <div>
          <table>
            {showData.map((val, key) => {
              return (
                <tr key={key}>
                  <td>
                    {key + 1 + "." + "  " + "  "} {val.text}
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
