import * as React from "react";

interface IEnemyProps {
    coins: number,
    onClick: any
}

interface IEnemyState {
    // gameState: "" | "X Wins!" | "O Wins!" | "Draw",
    coins: number
}

export class Enemy extends React.Component<IEnemyProps, IEnemyState> {
    constructor(props: IEnemyProps) {
        super(props);
        this.state = { coins: this.props.coins };
    }

    // handleClick(evt: any, domNode: any): void {
    //     console.log("Enemy CLICKED:" + this.state.coins);
    //     this.setState({ coins: this.state.coins });
    //     hits += 1;
    // }

    render() {
        return(
            <div style={ textStyle }  onClick={ this.props.onClick }>
                Enemy (hits { this.props.coins })
                <div style={ characterStyle } >Character</div>
            </div>
        )
    }
}// <div style={ textStyle } onClick={this.handleClick.bind(this)}>
// export class Enemy = () => <div>Enemy</div>; onClick={ this.props.onClick }
var hits : number = 0;

var textStyle = {
    height: "155px",
    color: 'black',
    backgroundColor: "#efefef",
    userSelect: "none",
    cursor: "pointer"
};

var characterStyle = {
    width: "155px",
    height: "255px",
    border: "solid 1px black",
    margin: "auto"
};