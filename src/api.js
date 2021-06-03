const URL_API = "https://pokeapi.co/api/v2/pokemon/";

let random = () => {
  return Math.floor(Math.random() * (150 - 1) + 1);
};

let getAssets = () => {
  return fetch(`${URL_API}${random()}`)
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.error(err + " Hubo problema en la conexion"));
};

export default { getAssets };
