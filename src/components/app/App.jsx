import React, { Component } from 'react';
import Statistics from '../statistics/Statistics';
import { FeedbackOptions } from '../feedBackOptions/FeedbackOptions';
import { Notification } from '../notification/Notification';
import { Section } from '../section/Section';
import css from './App.module.css';

export class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  handleClick = e => {
    const feedback = e.currentTarget.name;
    this.setState(prevState => {
      return {
        [feedback]: prevState[feedback] + 1,
      };
    });
  };

  countTotalFeedback = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    return total;
  };
  countPositiveFeedbackPercentage = good => {
    const goodPercentage = (good / this.countTotalFeedback(this.state)) * 100;

    return goodPercentage;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const options = ['good', 'neutral', 'bad'];
    const totalFeedback = this.countTotalFeedback(this.state);
    const positiveFeedback = this.countPositiveFeedbackPercentage(good);
    return (
      <div className={css.root}>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClick}
          />
        </Section>
        <Section title={'Statistics'}>
          {totalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedback}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </div>
    );
  }
}
