import { Component } from 'react';
import FeedbackOptions from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  
  incrementBtn = (option) => {
     this.setState(prevState => {return { [option]: prevState[option] + 1 }})
   }
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const sum = good + neutral + bad;
    
    return sum;
    }

  countPositiveFeedbackPercentage = () => {
    const positive = Math.round(this.state.good / this.countTotalFeedback() * 100);
    return positive;
    }      
  
  render() {
    const { good, neutral, bad } = this.state;   
    
    return (      
      <div>
        <Section title="Please, leave feedback">
          <FeedbackOptions
            options={ ['good', 'neutral','bad'] }
            onLeaveFeedback={this.incrementBtn}
          />
        </Section>
        <Section title="Statistics">
          {
            this.countTotalFeedback()
              ?
            <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
              />
              :
            <Notification message="There is no feedback" />            
          }        
          
        </Section>
        </div>      
    );
  }
}