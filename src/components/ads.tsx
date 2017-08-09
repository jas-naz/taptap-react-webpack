import * as React from 'react';
// import { connect } from 'react-redux'

export interface IAdProps {
}

// TODO: show for n seconds, then enable x button
export class Ads extends React.Component<IAdProps, any> {
  render() {
    return (
      <div style={ adsStyle }>
        This is an AD...
      </div>
    );
  }
}

const adsStyle = {
    width: "400px",
    height: "80px",
    margin: "auto",
    border: "solid 1px gray",
    cursor: "pointer"
}

// const mapState2Props = state => {
//   return {
//   };
// }

// export default connect(mapState2Props)(App);
