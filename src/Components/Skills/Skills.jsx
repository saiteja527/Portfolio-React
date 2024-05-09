import React, { useState } from 'react'
import './Skills.css'
import { SKILLS } from '../../utils/data'
import SkillCard from './SkillCard/SkillCard'
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard'
import theme_pattern from '../../assets/theme_pattern.png'

const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

    const handleSelectSkill = (data) => {
        setSelectedSkill(data);
    };

    return (
        <div className='skill-page'>
            <div className="title-box">
                <h1>My Skills</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <section className="skills-container" >
                <div className="skills-content">
                    <div className="skills">
                        {SKILLS.map((item) => (
                            <SkillCard
                                key={item.title}
                                iconUrl={item.icon}
                                title={item.title}
                                isActive={selectedSkill.title === item.title}
                                onClick={() => {
                                    handleSelectSkill(item);
                                }}
                            />
                        ))}
                    </div>
                    <div className="skills-info">
                        <SkillsInfoCard
                            heading={selectedSkill.title}
                            skills={selectedSkill.skills}
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills
