import * as React from "react";

interface IStatsProps {
    coins: number,   
    dps: number,  
    souls: number, 
    hdp: number  
}

interface IStatsState {
    coins: number,   
    dps: number,  
    souls: number, 
    hdp: number  
}

export class Stats extends React.Component<IStatsProps, IStatsState> {
    constructor(props : IStatsProps) {
        super(props);
        this.state = { 
            coins: this.props.coins, 
            dps: this.props.dps, 
            souls: this.props.souls, 
            hdp: this.props.hdp
        };
    }

    componentWillReceiveProps(nextProps: any) {
        this.setState({
            coins: nextProps.coins, 
            dps: nextProps.dps, 
            souls: nextProps.souls, 
            hdp: nextProps.hdp
        });
    }
    
    render() {
        return(
            <div>
                <div>
                    <span>C { this.state.coins }</span>
                    <span>D { this.state.dps }</span>
                </div>
                <div>
                    <span>S { this.state.souls }</span>
                    <span>H { this.state.hdp }</span>
                </div>          
            </div>
        )
    }
}
