import React from "react"
import { IoLogoHtml5 } from "react-icons/io"
import { IoLogoCss3 } from "react-icons/io"
import { IoLogoJavascript } from "react-icons/io"
import { IoLogoReact } from "react-icons/io"
export default function Skills(props){
    return(
        <div className="skill">
            <props.icon /> //not working
        <h3 className="skill-name"> {props.name}</h3>
        </div>
    )
}
