import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router-dom';
import Schools from '../../../api/schools';

export default class SchoolsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedbackMessage: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('school-name').value;
    const suburb = document.getElementById('school-suburb').value;
    const city = document.getElementById('school-city').value;
    const type = document.getElementById('school-type').value;
    const website = document.getElementById('school-website').value;
    this.setState({
      feedbackMessage: 'Busy...',
      feedbackMessageType: 'success',
    });
    const schoolInfo = {
      name,
      suburb,
      city,
      type,
      website,
    };
    const FEEDBACK = Schools.simpleSchema().namedContext().validate(schoolInfo, {modifier: false});
    //.validate({ emails: email, password, profile}, {modifier: false});
    console.log('FEEDBACK:',FEEDBACK)

  }

  render() {
    const { feedbackMessage, feedbackMessageType } = this.state;
    return (
          <div className="schools-edit-content">
            <div className="schools-edit-header">
              <h1 className="text-center">Schools Page</h1>
            </div>
            <div className="schools-edit-body">
              <form
                id="schools-form"
                className="form col-md-12 center-block"
                onSubmit={this.handleSubmit}
              >
                <div className="form-group">
                  <input
                    type="submit"
                    id="save-button"
                    className="btn btn-lg btn-primary btn-block"
                    value="SAVE"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="school-name"
                    className="form-control input-lg"
                    placeholder="name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="school-suburb"
                    className="form-control input-lg"
                    placeholder="suburb"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="school-city"
                    className="form-control input-lg"
                    placeholder="city"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="school-country"
                    className="form-control input-lg"
                    placeholder="country"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="school-type"
                    className="form-control input-lg"
                    placeholder="type"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="school-website"
                    className="form-control input-lg"
                    placeholder="website"
                  />
                </div>

                {/* <div className="form-group">
                  <p className="text-center">
                    Already have an account? Login <Link to="/login">here</Link>
                  </p>
                </div> */}
              </form>
            </div>
            <div className="schools-edit-footer" style={{ borderTop: 0 }} />
          </div>
    );
  }
}
