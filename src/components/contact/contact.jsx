import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import { useContext } from "react"
import {ThemeContext} from "../../context"

const Contact = () =>{
    const theme = useContext(ThemeContext)
    
    const darkMode = theme.state.darkMode

    const formRef = useRef()

    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
            'service_7l06qfi',
            'template_z8vp3ks', 
            formRef.current, 
            'afhoWe8gtfsbujkLS'
            )
            .then((result) => {
              console.log(result.text);
              setDone(true)
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div className="c" id="contacto">
            <div className="c-wrapper">
                <div className="c-left">
                    <h2 className="c-title">Let's get in contact</h2>
                    <p className="c-desc">
                        If you want me to work with you, you can fill out the form or contact me trought my social networks below
                    </p>
                </div>
                <div className="c-right">
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="halfer">
                        <input style={{backgroundColor: darkMode && "#161C24", color: darkMode && "white"}}type="text" placeholder="Name" name="user_name" className="half" required="true"/>
                        <input style={{backgroundColor: darkMode && "#161C24", color: darkMode && "white"}}type="text" placeholder="Subject" name="user_subject" className="half" required="true"/>
                        </div>
                        <input style={{backgroundColor: darkMode && "#161C24", color: darkMode && "white"}}type="text" placeholder="Email" name="user_email" className="email" required="true"/>
                        <textarea style={{backgroundColor: darkMode && "#161C24", color: darkMode && "white"}}name="message" placeholder="Message" rows="5" required="true"></textarea>
                        <button>Submit</button>
                        {done && "Thank you..."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact