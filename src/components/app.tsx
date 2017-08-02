import * as React from "react";

import { Stats } from "./stats";
import { LevelMap } from "./levelmap";
import { LevelInfo } from "./levelinfo";
import { Enemy } from "./enemy";
import { EnemyStats } from "./enemystats";

interface IAppComponentProps {
    someDefaultValue: string,
    coins?: number,
    dps?: number,
    souls?: number,
    hdp?: number
}

interface IAppComponentState {
    someValue?: string,
    coins: number,
    dps: number,
    souls: number,
    hdp: number,
    hpTotal: number
    hpRemaining: number
}

var coins: number = 8;

export class App extends React.Component<IAppComponentProps, IAppComponentState> { 
    // defaultState = { data: null, error: null };
    
    constructor(props: IAppComponentProps) {
        super(props);
        this.state = { 
            someValue: this.props.someDefaultValue, 
            coins: 0,
            dps: 100,
            souls: 0,
            hdp: 0,
            hpTotal: 2000,
            hpRemaining: 2000
        };
    }

    componentWillMount() {
        let coins;
        // if (coins > 50) {
        //     coins = '50';
        // } else if (coins < 25) {
        //     coins = '25';
        // } else {
        //     coins = '10';
        // }
        coins = 0
        this.setState({ coins });
    }
    
    // const EnemyItem = ({...props}) => { return ( <Enemy {...props} /> )};

    // enemyClick(e) {
    //     e.preventDefault();
    //     console.log('The link was clicked.');
    // }

    // public enemyClick(event: any): void {
    //     this.setState({ ...this.state, coins: "5" });
    // }

    // public handleEnemyClick(event: any): void {
    handleEnemyClick = (e: any) => {
        // You can access the prop you pass to the children 
        // because you already have it! 
        // Here you have it in state but it could also be
        //  in props, coming from another parent.
        // alert("The Child button text is: " + this.state.coins);
        // You can also access the target of the click here 
        // if you want to do some magic stuff
        // alert("The Child HTML is: " + event.target.outerHTML);
        // this.setState({ coins: "50" });
        // updateCoins();//Calculate enemy
        this.setState({ 
            coins: this.state.coins + 1, 
            hpRemaining: this.state.hpRemaining - this.state.dps
        });

        console.log("Enemy CLICKED: " ); //+ this.state.coins
    }

    public updateCoins() { //() => coins += 1; 
        this.setState({ coins: 5 });
    }
    
    public render() {
        return(
            <div>
                <h1>Hello { this.state.someValue } from React/Typescript</h1>
                <Stats 
                    coins={ this.state.coins } 
                    dps={ this.state.dps } 
                    souls={ this.state.souls } 
                    hdp={ this.state.hdp } />
                <LevelMap />
                <LevelInfo />
                <Enemy coins={ this.state.coins } onClick={this.handleEnemyClick} />
                <EnemyStats hpTotal={ this.state.hpTotal } hpRemaining={ this.state.hpRemaining } />
            </div>
        );
    }
}
// App.defaultProps = { coins: "5" }
