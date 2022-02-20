import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ title, children }) =>
{
    return (<>
        <h2 className={styles.title}>{title}</h2>
        {children}
    </>   
);
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children:PropTypes.element.isRequired,
};

export default Section;