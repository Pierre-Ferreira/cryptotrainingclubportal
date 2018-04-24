import { Accounts } from 'meteor/accounts-base';
Accounts.emailTemplates.siteName = 'MathCombat';
Accounts.emailTemplates.from = 'MathCombat <admin@mathcombat.co.za>';

// Email template for verification emails.
Accounts.emailTemplates.verifyEmail = {
  subject() {
    return '[MathCombat] Verify Your Email Address';
  },
  text(user, url) {
    const emailAddress = user.emails[0].address;
    const urlWithoutHash = url.replace('#/', '');
    const supportEmail = 'admin@mathcombat.co.za';
    const emailBody = `To verify your email address (${emailAddress}) visit the following link:\n\n${urlWithoutHash}\n\n If you did not request this verification, please ignore this email. If you feel something is wrong, please contact our support team: ${supportEmail}.`;

    return emailBody;
  },
};

// Email template for reset-password emails.
Accounts.emailTemplates.resetPassword = {
  subject() {
    return '[MathCombat] Reset your password';
  },
  text(user, url) {
    const emailAddress = user.emails[0].address;
    const urlWithoutHash = url.replace('#/', '');
    const supportEmail = 'admin@mathcombat.co.za';
    const emailBody = `To reset the password for (${emailAddress}) visit the following link:\n\n${urlWithoutHash}\n\n If you did not request this verification, please ignore this email. If you feel something is wrong, please contact our support team: ${supportEmail}.`;
    return emailBody;
  },
};
