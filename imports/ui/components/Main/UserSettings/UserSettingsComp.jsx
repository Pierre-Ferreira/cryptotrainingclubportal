import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import PersonalInfoContainer from '../../../containers/Main/UserSettings/PersonalInfoContainer';
import './UserSettingsComp.less';

const UserSettingsComp = (props) => {
  return (
    <div id="user-settings-comp">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-8 user-settings-area">
            <div className="col-md-6 offset-md-3">
              <h1>Settings</h1>
            </div>

            <div className="col-md-8 offset-md-2">
              <h2>Personal Info</h2>
              <PersonalInfoContainer />
              <hr />
            </div>

            <div className="col-md-12">
              <h2>Email</h2>
              <hr />
            </div>

            <div className="col-md-12">
              <h2>Wallet Address</h2>
              <hr />
            </div>

            <div className="col-md-12">
              <h2>Password</h2>
              <hr />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettingsComp
