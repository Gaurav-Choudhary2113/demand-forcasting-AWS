import PropTypes from "prop-types";
const LineGradient = ({ width = "w-full" }) => {
  return <div className={`h-0.5 ${width} bg-gradient-rainblue`}></div>;
};
LineGradient.propTypes = {
  width: PropTypes.string.isRequired,
};
export default LineGradient;
