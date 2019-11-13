const getPicture = async () => {
  const response = await fetch(
    "https://sdg-astro-api.herokuapp.com/api/Nasa/apod"
  );
};

document.addEventListener("DOMContentLoaded", main);
