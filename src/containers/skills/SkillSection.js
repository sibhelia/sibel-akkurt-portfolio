import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import FullStackImg from "./FullStackImg";
import DesktopImg from "../../DesktopImg";
import EmbeddedImg from "../../EmbeddedImg";
import SkillSectionImg from "../../SkillSectionImg";

function GetSkillSvg(props) {
  if (props.fileName === "FullStackImg") return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "DesktopImg") return <DesktopImg theme={props.theme} />;
  else if (props.fileName === "EmbeddedImg") return <EmbeddedImg theme={props.theme} />;
  else if (props.fileName === "SkillSectionImg") return <SkillSectionImg theme={props.theme} />;
  else return null; // Eğer eşleşmeyen bir değer gelirse, hata önlemek için boş döndürüyoruz.
}

function SkillSection(props) {
  const theme = props.theme;
  return (
    <div>
      {skills.data.map((skill, index) => {
        return (
          <div className="skills-main-div" key={index}>
            {index % 2 === 0 ? (
              <>
                <Fade left duration={2000}>
                  <div className="skills-image-div">
                    <GetSkillSvg fileName={skill.fileName} theme={theme} />
                  </div>
                </Fade>
                <div className="skills-text-div">
                  <Fade right duration={1000}>
                    <h1 className="skills-heading" style={{ color: theme.text }}>
                      {skill.title}
                    </h1>
                  </Fade>
                  <Fade right duration={1500}>
                    <SoftwareSkill logos={skill.softwareSkills} />
                  </Fade>
                  <Fade right duration={2000}>
                    <div>
                      {skill.skills.map((skillSentence, i) => (
                        <p className="subTitle skills-text" style={{ color: theme.secondaryText }} key={i}>
                          {skillSentence}
                        </p>
                      ))}
                    </div>
                  </Fade>
                </div>
              </>
            ) : (
              <>
                <div className="skills-text-div">
                  <Fade left duration={1000}>
                    <h1 className="skills-heading" style={{ color: theme.text }}>
                      {skill.title}
                    </h1>
                  </Fade>
                  <Fade left duration={1500}>
                    <SoftwareSkill logos={skill.softwareSkills} />
                  </Fade>
                  <Fade left duration={2000}>
                    <div>
                      {skill.skills.map((skillSentence, i) => (
                        <p className="subTitle skills-text" style={{ color: theme.secondaryText }} key={i}>
                          {skillSentence}
                        </p>
                      ))}
                    </div>
                  </Fade>
                </div>
                <Fade right duration={2000}>
                  <div className="skills-image-div">
                    <GetSkillSvg fileName={skill.fileName} theme={theme} />
                  </div>
                </Fade>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default SkillSection;