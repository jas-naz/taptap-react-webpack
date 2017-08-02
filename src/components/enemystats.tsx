import * as React from "react";

interface IEnemyStatsProps {
    hpTotal: number,    
    hpRemaining: number
}

interface IEnemyStatsState {

};

export class EnemyStats extends React.Component<IEnemyStatsProps, IEnemyStatsState> {
    // constructor(props: IEnemyProps) {
    //     super(props);
    //     this.state = { hpTotal: this.props.hpTotal, hpRemaining: this.props.hpRemaining };
    // }
    
    render() {
        let mergedStyles = { ...hpbarStyle, ...{ width : (this.props.hpRemaining / this.props.hpTotal) * 100 + "%" } };

        return(
            <div style={ enemyStatsStyle }>Enemy Stats: { this.props.hpRemaining } hp
                <div style={ hpbarBackgroundStyle }>
                    <div style={{ ...hpbarStyle, ...{ width: (this.props.hpRemaining / this.props.hpTotal) * 100 + "%" } }} />
                </div>
            </div>
        )
    }
}

var enemyStatsStyle = {
    margin: "auto",
    width: "300px"
}

var hpbarStyle = {
    height: "100%",
    backgroundColor: "red"
};

var hpbarBackgroundStyle = {
    height: "20px",
    backgroundColor: "black",
};
