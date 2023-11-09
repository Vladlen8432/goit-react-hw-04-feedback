import { Component } from 'react';
import Statistics from './Statisctics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback > 0 ? ((good / totalFeedback) * 100).toFixed(2) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const feedbackOptions = ['good', 'neutral', 'bad'];

    return (
      <div className="containerFeedback">
        <Section style={{ fontSize: '32px' }} title="Please, leave feedback">
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        <Section
          title={
            totalFeedback > 0 ? (
              'Statistics'
            ) : (
              <Notification message="There is no feedback" />
            )
          }
        >
          {totalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          ) : null}
        </Section>
      </div>
    );
  }
}

export default App;
