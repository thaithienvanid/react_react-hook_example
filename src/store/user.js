export const getUserFromStorage = () => {
  const value = localStorage.getItem("user")

  if (!value) {
    return null;
  }

  try {
    return JSON.parse(value);
  } catch (error) {
    return null;
  }
};

export const setUserToStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user))
};

export const removeUserFromStorage = () => {
  localStorage.removeItem("user")
};
