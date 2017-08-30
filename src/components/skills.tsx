import * as React from 'react';

export interface ISkillsProps {
}

export class Skills extends React.Component<ISkillsProps, any> {
  render() {
    return (
      <div>
        <div>Skills pane</div>
        <div style={ skillButtonStyle }>Heroes</div>
        <div style={ skillButtonStyle }>Skills</div>
        <div style={ skillButtonStyle }>Gems</div>
        <div style={ skillButtonStyle }>Mercs</div>
        <div style={ skillButtonStyle }>Skill Button 5</div>
      </div>
    );
  }
}

const skillButtonStyle = {
    float: "left",
    width: "19.5%",
    backgroundColor: "#ababab",
    color: "white",
    border: "solid 1px white",
    cursor: "pointer"
};

// export default Skills;
