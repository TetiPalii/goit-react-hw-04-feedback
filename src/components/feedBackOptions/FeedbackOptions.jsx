import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
      }}
    >
      {options.map(option => {
        return (
          <button
            className={css.btn__option}
            key={option}
            onClick={onLeaveFeedback}
            name={option}
          >
            {option}
          </button>
        );
      })}
    </ul>
  );
};

FeedbackOptions.prototypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
