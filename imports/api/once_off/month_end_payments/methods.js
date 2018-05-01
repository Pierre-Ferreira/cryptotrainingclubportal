import { Meteor } from 'meteor/meteor';
import MonthEndPayments from './collection';
import './hooks';

Meteor.methods({
  'month_end_payment.create': (data) => {
    if (!Meteor.userId()) {
      throw new Meteor.Error('error', 'Cannot create a new MonthEndPayments entry.', {
        why: 'User not logged in',
      });
    } else {
      MonthEndPayments.insert(data);
      console.log('inserted: ', MonthEndPayments.find(data).fetch()[0]);
    }
  },
});
