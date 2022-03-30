import "./footer.css"
   
    
const Footer = () =>{
    return (
        <div className="f">
             <div class="wrapper">
                <div class="icon whatsapp">
                    <div class="tooltip" >WhatsApp</div>
                    <span><a href="https://api.whatsapp.com/send?phone=5491135689423" target={"blank"}><i class="fab fa-whatsapp" style={{color:"#192229"}}></i></a></span>
                </div>
                <div class="icon linkedin">
                    <div class="tooltip">LinkedIn</div>
                    <span><a href="https://www.linkedin.com/in/julian-ferreyra-mira/" target={"blank"}><i class="fab fa-linkedin" style={{color:"#192229"}}></i></a></span>
                </div>
                <div class="icon github">
                    <div class="tooltip">Github</div>
                    <span><a href="https://github.com/julitofm93" target={"blank"}><i class="fab fa-github" style={{color:"#192229"}}></i></a></span>
                </div>
                <div class="icon youtube">
                    <div class="tooltip">Youtube</div>
                    <span><a href="https://www.youtube.com/channel/UCzGI5my8lmA747JyipQqDgw" target={"blank"}><i class="fab fa-youtube" style={{color:"#192229"}}></i></a></span>
                </div>
            </div>                          
        </div>
    )
}

export default Footer