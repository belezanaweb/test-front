import { useState } from "react";

export const useValidateInput = initialValues => {
  const [theme, setTheme] = useState(initialValues);

  const isANum = (string) => {
    return (/^[0-9]*$/gm.test(string))
  }

  const onlyNumber = (string) => {
    return string.replace(/\.|\//gi, '')
  }

  const onlyLetters = (string) =>{
    return (/^[a-zA-Z\s]*$/.test(string))
  }

  const changeTheme = (name, value) => {
    const newTheme = { ...theme, [name]: value };
    setTheme(newTheme);
  };

  return { isANum,  onlyNumber, onlyLetters, theme, changeTheme};
};