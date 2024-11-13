import PropTypes from "prop-types";

const Form = ({ children, className }) => {
  return (
    <form noValidate className={className}>
      {children}
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Form;
