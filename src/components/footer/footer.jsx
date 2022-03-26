import "./footer.css"
   
    
const Footer = () =>{
    return (
        <div className="f">
             <div class="wrapper">
                <div class="icon facebook">
                    <div class="tooltip" >Facebook</div>
                    <span><a href="https://github.com/julitofm93" target={"blank"}><i class="fab fa-facebook-f" style={{color:"#192229"}}></i></a></span>
                </div>
                <div class="icon twitter">
                    <div class="tooltip">Twitter</div>
                    <span><a href="https://github.com/julitofm93" target={"blank"}><i class="fab fa-twitter" style={{color:"#192229"}}></i></a></span>
                </div>
                <div class="icon instagram">
                    <div class="tooltip">Instagram</div>
                    <span><a href="https://github.com/julitofm93" target={"blank"}><i class="fab fa-linkedin" style={{color:"#192229"}}></i></a></span>
                </div>
                <div class="icon github">
                    <div class="tooltip">Github</div>
                    <span><a href="https://github.com/julitofm93" target={"blank"}><i class="fab fa-github" style={{color:"#192229"}}></i></a></span>
                </div>
                <div class="icon youtube">
                    <div class="tooltip">Youtube</div>
                    <span><a href="https://github.com/julitofm93" target={"blank"}><i class="fab fa-youtube" style={{color:"#192229"}}></i></a></span>
                </div>
            </div>                          
        </div>
    )
}

export default Footer