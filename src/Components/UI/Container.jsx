// @ts-nocheck
import PropTypes from "prop-types";
const Container = ({ children }) => {
  return (
    <div className="w-full mx-w-[425px] md:max-w-[770px] lg:max-w-[1250px] px-[25px] mx-auto">
      {children}
    </div>
  );
};
Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Container;
