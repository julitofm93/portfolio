import "./about.css"
import Award from "../../img/award.png"
import Html from "../../img/html.png"
import Css from "../../img/css.png"
import Js from "../../img/js.png"
import Sass from "../../img/sass.png"
import ReactImg from "../../img/react.png"
import Node from "../../img/node.png"
import Concept2 from "../../img/concept2.png"
import Mongo from "../../img/mongo.png"
import Express from "../../img/express.png"
import Git from "../../img/git.png"


const Intro = () =>{
    return (
        <div className="a" id="about">
            <div className="a-left">
            <h2 className="a-title">About Me</h2>
                <p className="a-sub">
                    
                </p>
                <p className="a-desc">
                I am a Full Stack developer with experience building websites and web applications. I specialize in JavaScript, working backend apps with NodeJs and fronted with React.

                I'm passionate about learning and always seeking to improve my skills and continue growing professionally in order to make valuable contributions at the working group I am part of.
                I'm seeking for new challenges to test my skills at a work environment.
                I have incorporated several skills, but I let you here some of those
                </p>

            </div>
            <div className="a-right">
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
                <div className="a-award">
                    <img src={Mongo} alt="" className="a-award-img" />
                    <img src={Express} alt="" className="a-award-img" />
                    <img src={Git} alt="" className="a-award-img" />
                </div>
            </div>
        </div>
    )
}

export default Intro