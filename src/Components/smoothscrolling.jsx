import { ReactLenis } from "@studio-freight/react-lenis";
import PropTypes from "prop-types";
function SmoothScrolling({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.5,
      }}
    >
      {children}
    </ReactLenis>
  );
}
SmoothScrolling.propTypes = {
  children: PropTypes.node.isRequired,
};
export default SmoothScrolling;
