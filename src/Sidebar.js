import React from "react"
import Skills from "./Skills"

import skillsData from "./skills-data"

export default function Sidebar(){
    const allSkills = skillsData.map(skill=>{
        return(
        <Skills
            name = {skill.skillname}
        />
        )
    })
    return(
        <div className="sidebar">
            {allSkills}
        
        </div>
    )
}