export const MEALS = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

export const fetchAPI = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    return console.log(error);
  }
};
