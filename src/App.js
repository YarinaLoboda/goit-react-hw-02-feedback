import React from 'react';
import './App.css';
import Section from './components/FeedBack/Section/Section';
import FeedbackOptions from './components/FeedBack/FeedbackOptions/FeedbackOptions';
import Statistics from './components/FeedBack/Statistics/Statistics';
import Notification from './components/FeedBack/Notification/Notification';

export default class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    let result = 0;

    if (total > 0) {
      result = Math.round((this.state.good / total) * 100);
    }

    return result;
  };

  onLeaveFeedback = evt => {
    const nameOption = evt.target.name;
    this.setState(prevState => ({
      [nameOption]: prevState[nameOption] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {this.countTotalFeedback() > 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}
