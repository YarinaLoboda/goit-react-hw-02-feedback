import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <>
    <p>{title}</p>
    {children}
  </>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
