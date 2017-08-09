import * as React from 'react';

export interface ISkillsProps {
}

export class Skills extends React.Component<ISkillsProps, any> {
  render() {
    return (
      <div>
        <div>This is the Skills pane</div>
        <div style={ skillButtonStyle }>Skill Button 1</div>
        <div style={ skillButtonStyle }>Skill Button 2</div>
        <div style={ skillButtonStyle }>Skill Button 3</div>
        <div style={ skillButtonStyle }>Skill Button 4</div>
        <div style={ skillButtonStyle }>Skill Button 5</div>
      </div>
    );
  }
}

const skillButtonStyle = {
    float: "left",
    width: "19%",
    backgroundColor: "gray",
    color: "white",
    border: "solid 1px white",
    cursor: "pointer"
};

// export default Skills;
