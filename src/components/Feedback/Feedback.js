import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <>
            {
                options.map(option => (<button
                    className={styles.button}
                    type="button"
                    key={option}
                    onClick={() =>  onLeaveFeedback(option) }
                    >
                        {option}
                    </button>
                )

                )
            }
        </>
    )
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,   
};

export default FeedbackOptions;
    


