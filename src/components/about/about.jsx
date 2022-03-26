import "./about.css"
import Award from "../../img/award.png"
import Html from "../../img/html.png"
import Css from "../../img/css.png"
import Js from "../../img/js.png"
import Sass from "../../img/sass.png"
import ReactImg from "../../img/react.png"
import Node from "../../img/node.png"
import Concept2 from "../../img/concept2.png"

const Intro = () =>{
    return (
        <div className="a" id="about">
            <div className="a-left">
                <div className="a-card">
                    <img 
                    src={Concept2}
                    alt=""
                    className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    
                </p>
                <p className="a-desc">
                    Soy un desarrollador web apasionado, 
                    con ganas de nuevos retos y de ofrecer mejores resultados a cada nuevo proyecto.
                    Son muchas mis habilidades en el desarrollo web. Sin embargo, aquí te muestro las tecnologías y herramientas con las cuales trabajo habitualmente. Por supuesto, siempre me mantengo al tanto de las últimas tecnologías.
                </p>
                <div className="a-award">
                    <img src={Html} alt="" className="a-award-img" />
                    <img src={Css} alt="" className="a-award-img" />
                    <img src={Js} alt="" className="a-award-img" />
                </div>
                <div className="a-award">
                    <img src={ReactImg} alt="" className="a-award-img" />
                    <img src={Sass} alt="" className="a-award-img" />
                    <img src={Node} alt="" className="a-award-img" />
                </div>
            </div>
        </div>
    )
}

export default Intro