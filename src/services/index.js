export const CALÇADOS = 'https://api.mercadolibre.com/sites/MLB/search?category=categoryId&q=tenis';

export const fetchAPI = async (url) => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    return console.log(error);
  }
};
