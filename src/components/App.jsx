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
  
   //  incrementBtnGood = () => {
  //    this.setState(prevState => { return { good: prevState.good + 1 } })
  //   }

  //   incrementBtnNeutral= () => {
  //       this.setState(prevState=>{return {neutral:prevState.neutral+1}})
  //   }

  //   incrementBtnBad= () => {
  //       this.setState(prevState=>{return {bad:prevState.bad+1}})
  //   }
  
  countTotalFeedback = () => {
      const sum = Object.values(this.state).reduce((total,amount) => {return total+amount},0)
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
            options={ Object.keys(this.state) }
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


            {/* <h2 className={styles.title}>Please, leave feedback</h2> */}
            {/* <button
                className={styles.button}
                type='button'
                onClick={() => {
                  this.incrementBtnGood()
                }}>Good</button>
            <button
                className={styles.button}
                type='button'
                onClick={() => {
                  this.incrementBtnNeutral()
                  }}>Neutral</button>
            <button
                className={styles.button}
                type='button'
                onClick={() => {
                  this.incrementBtnBad()
                  }}>Bad</button> */}       
        
        {/* <h2 className={styles.title}>Statistics</h2> */}       
            {/* <ul className={styles.statisticsList}>
                <li className={styles.statisticsItem}>Good: {good}</li>
                <li className={styles.statisticsItem}>Neutral: {neutral}</li>
                <li className={styles.statisticsItem}>Bad: {bad}</li>
            </ul>
            <p className={styles.total}>Total: {this.countTotalFeedback()}</p>
            <p className={styles.percentage}>Positive feedback: {this.countPositiveFeedbackPercentage()} %</p> */}
        </div>      
    );
  }
}