// import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

const Schools = new Mongo.Collection('schools');
const Schema = {};

Schema.Schools = new SimpleSchema({
  name: {
    type: String,
    optional: false,
  },
  address: {
    type: String,
    optional: false,
  },
  suburb: {
    type: String,
    optional: false,
  },
  city: {
    type: String,
    optional: false,
  },
  country: {
    type: String,
    optional: true,
  },
  type: {
    type: String,
    allowedValues: ['Primary', 'Secondary', 'Other'],
    optional: true,
  },
  website: {
    type: String,
    regEx: SimpleSchema.RegEx.Url,
    optional: true,
  },
});

Schools.attachSchema(Schema.Schools);
export default Schools;
