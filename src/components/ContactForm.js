import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
 

function ContactForm({theme}) {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)
  
  const sendUserData = async (e) => {
    e.preventDefault();
    if(!name||!email||!phone||!message){
      setError(true)
      return;
    }else{

      console.log(name, email, phone, message);
     
      setEmail('');
      setMessage('');
      setName('');
      setPhone('');
    
      let result = await fetch('http://localhost:9200/userinformation', {
        method: 'post',
        body: JSON.stringify({ name, email, phone, message }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      let response = await result.json();
      toast('great ! message sent successfully')
      console.log(response);
    }
  };
  
  
    
  return (
     <>
 
 <ToastContainer />

<button type="button"  className="btn btn-primary contact-us-button" id='my-button' data-bs-toggle="modal" data-bs-target="#exampleModal" style={{backgroundColor: theme==='dark'?'#1e7cc0':'#f24b74'}}>contact us
</button>

 
<div  className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div  className="modal-dialog modal-dialog-centered" id="modal-outer">
    <div  className="modal-content contact-us-content">
      <div  className="modal-header contact-us-header">
        <h1  className="modal-title fs-5" id="exampleModalLabel" style={{color: theme==='dark'?'#1e7cc0':'#f24b74'}}>Send Us an Query</h1>
        <button type="button"  className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

      </div>

      <div  className="modal-body contact-us-model-body">

      <form className="conatct-us form">
  <div  className="mb-3">
    <label htmlFor="exampleInputEmail1"  className="form-label modal-lable-type" >Enter Your Name</label>
    <input type="text"  className="form-control modal-input-type" value={name} id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={(e)=>setName(e.target.value)}/>
    {error && !name && <span className="error">enter valid name</span>}
  </div>
  <div  className="mb-3">
    <label htmlFor="exampleInputPassword1"  className="form-label modal-lable-type">enter your email</label>
    <input type="email"  className="form-control modal-input-type" value={email} id="exampleInputPassword1" onChange={(e)=>setEmail(e.target.value)}/>
    {error && !email && <span className="error">enter valid email</span>}
  </div>

  <div  className="mb-3">
    <label htmlFor="exampleInputPassword1"  className="form-label modal-lable-type">enter your Phone Number</label>
    <input type="number"  className="form-control modal-input-type" value={phone} id="exampleInputPassword1"   onChange={(e)=>{
      let enterTenDigit=e.target.value
      if(enterTenDigit.length !==10 ){
        setPhone(enterTenDigit)
      }
    
    }}/>
    {error && !phone && <span className="error"> enter valid phone</span>}
  </div>

  <div  className="mb-3">
  <label htmlFor="exampleFormControlTextarea1"  className="form-label modal-lable-type">enter your message</label>
  <textarea  className="form-control modal-input-type" value={message} id="exampleFormControlTextarea1" rows="3" onChange={(e)=>setMessage(e.target.value)}></textarea>
  {error && !message && <span className="error">enter field here</span>}
</div>

   
  <button type="submit" onClick={sendUserData} className="btn btn-primary contact-submit-button" style={{backgroundColor: theme==='dark'?'#1e7cc0':'#f24b74'}}>Submit</button>
</form>

      </div>

     
    </div>
  </div>
</div>
 
     </>
  )
}

export default ContactForm