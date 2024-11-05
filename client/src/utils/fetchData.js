export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const text = await response.text(); // Obtén el texto completo de la respuesta
      throw new Error(
        `HTTP error! status: ${response.status}, response: ${text}`
      );
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Fetch error:', err);
    throw err; // Lanza el error para que pueda ser manejado más arriba
  }
};
