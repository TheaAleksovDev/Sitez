import React from "react"
import Skills from "./Skills"
import skillsData from "./skills-data"
export default function Sidebar(){
    
    const [skills, setSkills] = React.useState(skillsData)

    function skillOn(){
        setSkills(prevSkill => {
        return{
            ...prevSkill,
            hasSkill : !prevSkill.hasSkill
        }
        console.log(prevSkill)
    })
    }
    

    const allSkills = skills.map(skill=>{
        return(
        
        <div>
            <Skills
            name = {skill.skillname}
            hasSkill = {skill.has}
            handleClick = {skillOn}
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