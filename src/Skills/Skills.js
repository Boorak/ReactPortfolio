import React from "react";
import "./Skills.scss";
import Heading from "./../components/Heading/Heading";
import SkillBox from "../components/SkillBox/SkillBox";
import Skill from "./../components/Skill/Skill";

const Skills = () => {
  return (
    <section className="section-skills" id="skills">
      <div className="container">
        <Heading title="SKILLS" />
        <SkillBox title="backend">
          <div className="px-2">
            <Skill point="70" title="php" description="Primary Language" />
          </div>
          <div className="px-2">
            <Skill
              point="65"
              title="node.js"
              description="Secondary Language"
            />
          </div>
          <div className="px-2">
            <Skill point="70" title="laravel" description="Primary Framework" />
          </div>
          <div className="px-2">
            <Skill
              point="70"
              title="symfony"
              description="Secondary Language"
            />
          </div>
          <div className="px-2">
            <Skill point="60" title="rest" description="Learning" />
          </div>
          <div className="px-2">
            <Skill point="55" title="express" description="Learning" />
          </div>
          <div className="px-2">
            <Skill point="55" title="unit-test" description="Learning" />
          </div>
          <div className="px-2">
            <Skill point="30" title="graphql" description="Learning" />
          </div>
        </SkillBox>
        <SkillBox title="frontend">
          <div className="px-2">
            <Skill point="70" title="html5" description="Learning" />
          </div>
          <div className="px-2">
            <Skill point="70" title="CSS3" description="Learning" />
          </div>
          <div className="px-2">
            <Skill point="70" title="bootstrap" description="Learning" />
          </div>
          <div className="px-2">
            <Skill point="70" title="bulma" description="Learning" />
          </div>
          <div className="px-2">
            <Skill point="70" title="javascript" description="Learning" />
          </div>
          <div className="px-2">
            <Skill point="70" title="ajax" description="Learning" />
          </div>
          <div className="px-2">
            <Skill point="60" title="react" description="Learning" />
          </div>
          <div className="px-2">
            <Skill point="60" title="redux" description="Learning" />
          </div>
          <div className="px-2">
            <Skill point="60" title="vue.js" description="Learning" />
          </div>
          <div className="px-2">
            <Skill point="60" title="jquery" description="Learning" />
          </div>
          <div className="px-2">
            <Skill point="60" title="sass" description="Learning" />
          </div>
          <div className="px-2">
            <Skill point="50" title="material-ui" description="Learning" />
          </div>
        </SkillBox>
        <SkillBox title="tools">
          <div className="px-2">
            <Skill point="70" title="git" description="Primary Source Crtl" />
          </div>
          <div className="px-2">
            <Skill point="60" title="webpack" description="Learning" />
          </div>
          <div className="px-2">
            <Skill point="60" title="postcss" description="Learning" />
          </div>
          <div className="px-2">
            <Skill point="50" title="linux" description="Learning" />
          </div>
          <div className="px-2">
            <Skill point="50" title="JEST" description="Learning" />
          </div>
        </SkillBox>
        <SkillBox title="database">
          <div className="px-2">
            <Skill point="70" title="mysql" description="Primary Source Crtl" />
          </div>
          <div className="px-2">
            <Skill point="50" title="mongo" description="Learning" />
          </div>
          <div className="px-2">
            <Skill point="50" title="redis" description="Learning" />
          </div>
        </SkillBox>
      </div>
    </section>
  );
};

export default Skills;
