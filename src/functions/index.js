const setFavorited = (id, favorited) => {
  const favorite = [...favorited];

  const findFav = favorite.find((item) => item.id === id);
  if (!favorite.length || !findFav) {
    const newFav = [...favorite, { id }];
    localStorage.setItem('LSfav', JSON.stringify(newFav));
    return newFav;
  }
  const newFav = favorited.filter((fav) => fav.id !== id);
  localStorage.setItem('LSfav', JSON.stringify(newFav));
  return newFav;
};

export default setFavorited;
