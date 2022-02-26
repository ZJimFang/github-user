export const fetchUserAPI = async (userName) => {
  try {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    if (!res.ok) {
      throw new Error("user not found");
    }
    return await res.json();
  } catch (e) {
    return e;
  }
};
