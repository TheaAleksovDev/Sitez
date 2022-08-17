import React from "react"
import Skills from "./Skills"
import skillsData from "./skills-data"
export default function Sidebar(){
    
    const [skills, setSkills] = React.useState(skillsData)

    const isTrue = skills.hasSkill ? console.log("yes") : console.log("no")
    function skillOn(){
        setSkills(prevSkill => {
        return{
            ...prevSkill,
            hasSkill : !prevSkill.hasSkill
        }
        
    })
    }
    

    const allSkills = skills.map(skill=>{
        return(
        
        <div>
            <Skills
            name = {skill.skillname}
            hasSkill = {skill.hasSkill}
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