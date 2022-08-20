import React from "react"
import Skills from "./Skills"
import skillsData from "./skills-data"
export default function Sidebar(){
    
    const [skills, setSkills] = React.useState(skillsData)

    function onOff(id){
        setSkills(prevSkills => {
            return prevSkills.map((skill)=>{
                return skill.id === id ? {...skill, hasSkill: !skill.hasSkill} : skill
            })
        })
    }
    const allSkills = skills.map(skill=>{
        return(
        
        <div>
            <Skills
            key = {skill.id}
            id = {skill.id}
            name = {skill.skillname}
            hasSkill = {skill.hasSkill}
            handleClick = {onOff}           
        />
        </div>
        )
    })
    
    const [isShown, setIsShown] = React.useState(true)
    function toggleShown(){
        setIsShown(prevShown => !prevShown)
        console.log(isShown)
    }
    return(
        <div className="sidebar">
            <button className="toggle-skills-btn" onClick={toggleShown}>Your skills</button>
            {isShown && allSkills}
        </div>
    )
}