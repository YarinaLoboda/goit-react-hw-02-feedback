import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackOptions.css';

const FeedbackOptions = props => {
  const { options, onLeaveFeedback } = props;
  return (
    <div>
      {options.map((option, index) => (
        <button
          key={index + option}
          type="button"
          class="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
