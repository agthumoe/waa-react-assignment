import PropTypes from "prop-types";
import { forwardRef } from "react";

const Form = forwardRef(function Form({ children, className }, ref) {
  return (
    <form noValidate className={className} ref={ref}>
      {children}
    </form>
  );
});

Form.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Form;
