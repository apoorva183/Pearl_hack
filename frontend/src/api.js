export const getMatches = async (email) => {
    const response = await fetch(`/match/${email}`);
    return response.json();
  };
  
  export const createUser = async (userData) => {
    await fetch("/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
  };