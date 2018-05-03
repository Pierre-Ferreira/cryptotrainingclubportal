import { Meteor } from 'meteor/meteor';
import MonthEndPayments from './collection';


// .find({TXCompleted: {$gte: new ISODate("2018-05-02T00:00:00Z")}})
// Return all the players for this user (parent).
Meteor.publish('month_end_payments', () => {
  const dateString = new Date();
  dateString.setHours(11, 0, 0, 0);
  const MEP = MonthEndPayments.find({ TXCompleted: { $gte: dateString } });
  console.log('MEP:', MEP);
  return MEP;
});
