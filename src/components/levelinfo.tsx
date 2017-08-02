import * as React from "react";

interface LevelInfoState {
    gameState: "" | "X Wins!" | "O Wins!" | "Draw";    
}

export class LevelInfo extends React.Component<{}, LevelInfoState> {
    render() {
        return(
            <div>Level 1</div>
        )
    }
}
