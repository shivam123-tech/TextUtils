import React,{useState} from 'react'

export default function TextArea(props) {
    const[text,setText]=useState("");
  /*
  execise 2
    const trim =(word)=>{
     return word.trim() + word
    }
    */
  //  text="Enter text 2";wrong way to change the state
  //setText("Enter Text2"); correct way to chage the state;
  const changeUpCase=()=>{
   // console.log("Upper case clicked");
    let newText= text.trim().toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase",'success')
  }
  const handleOnChange=(event)=>{
   // console.log("Changed");
   
    setText(event.target.value)
  }

  const changeLoCase=()=>{
    let lownewText= text.toLowerCase();
    setText(lownewText);
    props.showAlert("Converted to lowercase",'success')
  }
  const changeClear=()=>{
    let updateText='';
    let updateData='';
    setText(updateText);
    setData("0"+updateData);
    props.showAlert("Data cleared",'success')
  }
  const changeSentenceCase=()=>{
    let senctext=text.charAt(0).toUpperCase()+text.substring(1);
    setText(senctext);
    props.showAlert("Sentececase clicked",'success')
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speaking",'success')
  }
  const Copy=()=> {
    // var text = document.getElementById('mybox');
    // text.select();
    //document.getSelection().removeAllRanges();
    navigator.clipboard.writeText(text);
    
    props.showAlert("Word Copied",'success')
  }
  
const [data , setData] = useState(null);
 const calculate=()=>{
    
    
     setData(0.008*text.split(" ").filter((element)=>{return element!=0}).length); 
     props.showAlert("Time Calculated",'success')
 }
 const[mystyle,setMystyle]=useState({
    color:'black',
    backgroundColor:'white'

 })
 const[btn,setBtn]=useState("Enable Dark Mode")
 const toggle=()=>{
    if(mystyle.color=='black'){
        setMystyle({
            color:'white',
            backgroundColor:'black'
        
         })
         setBtn("Enable white Mode")
         props.showAlert("Dark Mode Enabled",'success')

    }
    else{
        setMystyle({
            color:'black',
            backgroundColor:'white'
        
         })
         setBtn("Enable Dark Mode")
         props.showAlert("White Mode Enabled",'success')

    }
  
 }
  return (
    <>
    
      <div className='container my-3 ' style={mystyle} >
     <label htmlFor='myBox' className='form-label'>{props.heading}</label>
     <textarea className='form-control' id="mybox" value={text} onChange={handleOnChange} rows="8" style={{backgroundColor: props.mode==='dark'? '#13466e':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
     <br></br>
     <button disabled={text.length==0} className='btn btn-primary mx-1 my-1' onClick={changeUpCase}   >Convert To UpperCase</button>
     <button disabled={text.length==0} className='btn btn-secondary mx-1 my-1' onClick={changeLoCase}  >Convert To LowerCase</button>
     <button disabled={text.length==0} className='btn btn-success mx-1 my-1' onClick={changeClear}  >Clear</button>
     <button disabled={text.length==0} className='btn btn-light mx-1 my-1' onClick={changeSentenceCase}  >Sentence Case</button>
     <button disabled={text.length==0} className='btn btn-danger mx-1 my-1' onClick={calculate}>Calculate Time To Read</button>
     <button  className='btn btn-dark mx-1 my-1' onClick={toggle}>{btn}</button>
     <button disabled={text.length==0} className='btn btn-primary mx-1 my-1' onClick={Copy}>Copy Text</button>
     <button disabled={text.length==0} className="btn btn-warning mx-2 my-1" onClick={speak}>Speak</button>
      </div>

      <div className='my-3 container'style={mystyle}>
        <h2>Your Text Summary </h2>
        <p>{text.split(/\s+/).filter((element)=>{return element!=0}).length}Words and {text.length}Characters</p>
       <p>{0.008*text.split(" ").filter((element)=>{return element!=0}).length}Minutes</p> 
       <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing To Preview"}</p>
      </div>
    </>
  )
}