import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>
{
    return (<>
        <ul className={styles.statisticsList}>
                <li className={styles.statisticsItem}>Good: {good}</li>
                <li className={styles.statisticsItem}>Neutral: {neutral}</li>
                <li className={styles.statisticsItem}>Bad: {bad}</li>
        </ul>
        <p className={styles.total}>Total: {total}</p>
        <p className={styles.percentage}>Positive feedback: {positivePercentage} %</p>
    </>   
);
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
     
    
};

export default Statistics;