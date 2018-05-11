import React, { Component } from 'react';

export default class MyTeamComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      downlineInfo: [],
    };
  }
  componentWillMount() {
    // Get user information from DB.
    Meteor.call('getDownLineDB', (err, result) => {
      if (err) {
        console.log('getDownLineDB ERR:', err)
      } else {
        // Load user information to REDUX store.
        console.log('getDownLineDB :', result)
        this.setState(
          {
            downlineInfo: result,
          }
        );
      }
    })
  }
  render() {
    const { downlineInfo } = this.state;
    return (
      <div id="my-team-comp">
        <h1 className="text-center">My Team</h1>
        { downlineInfo.map((downline, i) => {
            return (
              <h3>{i+1}) {downline.firstName} {downline.lastName} ({downline.clcNo})</h3>
            );
        })}
      </div>
    );
  }
}
