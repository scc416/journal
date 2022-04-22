const { useState } = require("react");

const useShowPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return { showPassword, toggleShowPassword };
};

export default useShowPassword;
