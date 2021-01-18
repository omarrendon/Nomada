import { UPLOAD_IMAGE, CLEAR } from "../types/types";
import axios from "axios";

export const getImage = (image) => {
  return (dispatch) => {
    const formData = new FormData();
    formData.append("file", image);
    axios
      .post("https://whois.nomada.cloud/upload", formData, {
        headers: {
          "Content-Type": "application/json",
          Nomada: "YTBjODIzYmMtNDdjMC00NTEzLTkwYzgtN2FlODhmNjEyZGY3",
        },
      })
      .then((response) => {
        dispatch(getActor(response.data.actorName));
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };
};

const getActor = (name) => {
  return (dispatch) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/person?api_key=30db1237b9167f8afaf9e065b90d16b8&language=en-US&query=${name}&page=1&include_adult=false`
      )
      .then((response) => {
        dispatch(getInfoCharacter(response));
      });
  };
};

export const getInfoCharacter = (data) => ({
  type: UPLOAD_IMAGE,
  payload: data,
});

export const clearCharacter = () => ({
  type: CLEAR,
  payload: [],
});
