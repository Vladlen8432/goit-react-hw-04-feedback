import React, { useState } from 'react';
import Statistics from './Statisctics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import message from './Notification/Notification';

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = type => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const totalFeedback = countTotalFeedback();
    return totalFeedback > 0 ? ((good / totalFeedback) * 100).toFixed(2) : 0;
  };

  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  const feedbackOptions = ['good', 'neutral', 'bad'];

  return (
    <div className="containerFeedback">
      <Section style={{ fontSize: '32px' }} title="Please, leave feedback">
        <FeedbackOptions
          options={feedbackOptions}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section
        title={
          totalFeedback > 0 ? 'Statistics' : <Notification message={message} />
        }
      >
        {totalFeedback > 0 && (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
};

export default App;
