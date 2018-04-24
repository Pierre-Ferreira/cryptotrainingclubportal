import { Accounts } from 'meteor/accounts-base';

// If the user clicks the link on the verification email, then set verify email field in user.
Accounts.onEmailVerificationLink((token,done) => {
    // Accounts.verifyEmail(token, done);
});
