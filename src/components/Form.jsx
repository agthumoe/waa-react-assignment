import PropTypes from "prop-types";
import { forwardRef } from "react";

const Form = forwardRef(function Form({ children, className, onSubmit }, ref) {
  return (
    <form noValidate className={className} ref={ref} onSubmit={onSubmit}>
      {children}
    </form>
  );
});

Form.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default Form;
