import React, { useState } from 'react';
import Statistics from '../statistics/Statistics';
import { FeedbackOptions } from '../feedBackOptions/FeedbackOptions';
import { Notification } from '../notification/Notification';
import { Section } from '../section/Section';
import css from './App.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = ({ currentTarget: { name } }) => {
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      default:
        console.log(name);
    }
  };

  const totalFeedback = good + neutral + bad;

  const goodPercentage = (good / totalFeedback) * 100;

  const options = ['good', 'neutral', 'bad'];

  return (
    <div className={css.root}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
      </Section>
      <Section title={'Statistics'}>
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={goodPercentage}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </div>
  );
};
