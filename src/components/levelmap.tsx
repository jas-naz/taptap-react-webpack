import * as React from "react";

interface LevelMapState {
    gameState: "" | "X Wins!" | "O Wins!" | "Draw";    
}

export class LevelMap extends React.Component<{}, LevelMapState> {
    render() {
        return(
            <div>Level Map</div>
        )
    }
}
