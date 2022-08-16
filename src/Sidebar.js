import React from "react"
import Skills from "./Skills"
import { IoLogoHtml5 } from "react-icons/io"
import { IoLogoCss3 } from "react-icons/io"
import { IoLogoJavascript } from "react-icons/io"
import { IoLogoReact } from "react-icons/io"
import skillsData from "./skills-data"
export default function Sidebar(){
    
    const [skills, setSkills] = React.useState(skillsData)

    const allSkills = skills.map(skill=>{
        return(
        
        <div>
            <Skills
            name = {skill.skillname}
            icon = {skill.skillicon}
        />
        </div>
        )
    })
    

    return(
        <div className="sidebar">
            {allSkills}
        
        </div>
    )
}