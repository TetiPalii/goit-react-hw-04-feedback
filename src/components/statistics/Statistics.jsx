import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad:{bad}</p>
      <p>total:{total}</p>
      <p>
        positive feedback:
        {Math.ceil(positivePercentage)}%
      </p>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  totalFeedback: PropTypes.number,
  positiveFeedback: PropTypes.number,
};
