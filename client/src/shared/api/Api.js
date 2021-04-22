export const fetchData = async (url, method = "GET", body = null) => {
  if (!url) return;

  try {
    const response = await fetch(url, {
      method,
      ...(body && { body: JSON.stringify(body) }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const result = await response.json();

    return result;
  } catch (error) {
    return { data: null, error: error.message };
  }
};
