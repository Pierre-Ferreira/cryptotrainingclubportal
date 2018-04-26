import { Meteor } from 'meteor/meteor';
const atob = require('atob');

Meteor.methods({
  importExistingClients(data) {
    console.log("SERVER DATA:", data);
    const newDATA = data.replace('data:text/csv;base64,', '');
    console.log("SERVER DATA2:", newDATA);
    // const buf = Buffer.from(data, 'base64').toString('data:text/csv');
    // console.log("SERVER DATA:", buf);
    const csv = atob(newDATA);
    return csv;
  //   if (user && user._id) {
  //     userId = user._id;
  //     return Accounts.sendVerificationEmail(userId);
  //   } else {
  //     throw new Meteor.Error('user-not-found', `User could not be found for ${email}!`);
  //   }
  },
});
