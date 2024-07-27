import { useState } from "react";
import PropTypes from "prop-types";

const InputField = ({ type, placeholder, icon }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <div className="input-wrapper">
      <input
        type={isPasswordShown ? "text" : type}
        placeholder={placeholder}
        className="input-field"
        required
        aria-label={placeholder}
      />
      <i className="material-symbols-rounded">{icon}</i>
      {type === "password" && (
        <i
          onClick={() => setIsPasswordShown((prevState) => !prevState)}
          className="material-symbols-rounded eye-icon"
          role="button"
          aria-label={isPasswordShown ? "Hide password" : "Show password"}
        >
          {isPasswordShown ? "visibility" : "visibility_off"}
        </i>
      )}
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default InputField;
