import PropTypes from "prop-types";

const Button = (props) => {
  const { href, text, hoverColor, focusColor } = props;

  const buttonStyle = {
    hoverColor: hoverColor || "cyan-500",
    focusColor: focusColor || "blue-300",
  };

  return (
    <a
      href={href}
      className={`inline-flex justify-center items-center py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#3EB7DD] hover:bg-${buttonStyle.hoverColor} focus:ring-4 focus:ring-${buttonStyle.focusColor} dark:focus:ring-blue-900`}
    >
      {text}
    </a>
  );

};

Button.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  hoverColor: PropTypes.string,
  focusColor: PropTypes.string,
};

export default Button;
