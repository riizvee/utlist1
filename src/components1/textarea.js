import React, {useState} from 'react'

export default function Textarea(props) {
  const [Text, setText] = useState("");
  //setText=("dont type")

  const handleUpClick = () => {
    console.log("uppercase was clicked  " );
    let newText=Text.toUpperCase();
    setText(newText);
    props.showAlart("converted to uppercase","success")
  }

  const handleLowClick = () => {
    console.log("lower was clicked  " );
    let newText=Text.toLowerCase();
    setText(newText);
    props.showAlart("converted to lowercase","success")
  }

  const clear  =(event)=>{
    console.log("clear");
    let newText =" ";
    setText(newText);
    props.showAlart("text has been cleared","success")
    }    

const Space =()=>{
  console.log("space was clicked" );
    let newText=Text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlart("texts got spaces","success")
}

const handleUpchange  =(event)=>{
console.log("hichnage");
setText(event.target.value)
}


  return (
 <div className='container '  /*style={{color:props.mode==="light"?"black":"white"}}*/ >
 <h1 className='mb-3'>text area here</h1>
        <div className="form-floating">
          <textarea  className=" border-5" onChange={handleUpchange} id="floatingTextarea" rows={10} cols={100} value={Text} style={{backgroundColor:props.mode==="dark"?"green":"white"}} />
          <label htmlFor="floatingTextarea" ></label>
        </div>
        <button type='button' disabled={Text.length===0} className="text-bg-primary btn-lg mt-3 mx-2 br-2 " onClick={handleUpClick}>convert to uppercase</button>
        <button type='button' disabled={Text.length===0} className="text-bg-primary btn-lg mt-3 mx-2 br-2 " onClick={handleLowClick}>convert to lowercase</button>
        <button type='button'disabled={Text.length===0}  className="text-bg-primary btn-lg mt-3 mx-2 br-2 " onClick={Space}>remove space</button>
        <button className="text-bg-primary btn-lg mt-3 mx-2"  disabled={Text.length===0} onClick={clear}>clear</button> 


        <p className='mt-3'>{Text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {Text.length} characters</p>
{/*<p className='mt-3'>{Text.split(" ").filter(element)=>{return element.length!=0}).length} words and {Text.length} charecter</p>*/}

<p>{ 0.008 * Text.split(" ").filter((element) => { return element.length !== 0 }).length} minute to read</p>
<h2>preview</h2>
<p>{Text}</p>
</div>
  )
}
