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
                    <h1 className="c-title">Lets discuss</h1>
                    <p className="c-desc">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus cupiditate laboriosam quisquam et facere iure dolores necessitatibus, quibusdam quis totam dignissimos vitae quasi, ex perferendis, exercitationem pariatur fuga. Debitis, quasi?
                    </p>
                </div>
                <div className="c-right">
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <div className="halfer">
                        <input style={{backgroundColor: darkMode && "#161C24"}}type="text" placeholder="Name" name="user_name" className="half"/>
                        <input style={{backgroundColor: darkMode && "#161C24"}}type="text" placeholder="Subject" name="user_subject" className="half"/>
                        </div>
                        <input style={{backgroundColor: darkMode && "#161C24"}}type="text" placeholder="Email" name="user_email" className="email" />
                        <textarea style={{backgroundColor: darkMode && "#161C24"}}name="message" placeholder="Message" rows="5"></textarea>
                        <button>Submit</button>
                        {done && "Thank yoy..."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact