import React from 'react';
import { Link } from 'react-router-dom';

const AuthFeedbackMessageComp = (props) => {
  const feedbackMessageType = (props.feedbackMessageType) ? `alert-${props.feedbackMessageType}` : 'alert-danger';
  const feedbackMessage = props.feedbackMessage || '';
  const tokenExpiredFlag = props.tokenExpiredFlag || false;
  const resendVerificationEmailFN = props.resendVerificationEmailFN || '';
  const resendVerificationMessages = props.resendVerificationMessages || '';

  // Check if a feedback message was set.
  if (feedbackMessage.trim().length !== 0) {
    return (
      <div className={`alert ${feedbackMessageType} fade in`}>
        {feedbackMessage}
        {/* Check if 'forgot password' link should be displayed */}
        {tokenExpiredFlag
          ? <span> Please request new <Link to="/forgot_password">forgot password</Link> email. </span>
          : ''
        }
        {/* Check if 'resend verification email' link should be displayed */}
        {resendVerificationMessages
          ? <span><a onClick={resendVerificationEmailFN}> {resendVerificationMessages}</a></span>
          : ''
        }
      </div>
    );
  } else {
    return null;
  }
};

export default AuthFeedbackMessageComp;
