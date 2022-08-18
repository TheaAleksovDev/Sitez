import React from "react"
import { IoLogoHtml5 } from "react-icons/io"
import { IoLogoCss3 } from "react-icons/io"
import { IoLogoJavascript } from "react-icons/io"
import {FaReact} from "react-icons/fa"
export default function Skills(props){
    function pickIcon(){
        switch(props.name){
            case 'JavaScript':
                return <IoLogoJavascript />;
            case 'HTML':
                return <IoLogoHtml5/>;
            case 'CSS':
                return <IoLogoCss3/>;
            case 'React':
                return <FaReact/>
        }
    }
   


     const styles = {
        color: props.hasSkill ? "lightgreen" : "rgb(126, 126, 126)"
    }

    return(
        
        <div className="skill" style={styles} onClick={()=>props.handleClick(props.id)}>
             <div className="skill-icon">{pickIcon()}</div>
            <h3 className="skill-name"> {props.name}</h3>
        </div>
    )
}
