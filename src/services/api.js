import { v4 as uuidv4 } from "uuid";
const callToApi = () => {
  return fetch("https://hp-api.herokuapp.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      const dataApi = data.map((item) => {
        return {
          id: uuidv4(),
          name: item.name,
          image: item.image,
          specie: item.species,
          status: item.alive,
          house: item.house,
          gender: item.gender,
          ancestry: item.ancestry,
          actor: item.actor,
        };
      });
      return dataApi;
    });
};
export default callToApi;
