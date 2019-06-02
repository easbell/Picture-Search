import accessKey from './keys';
import secretKey from './keys';
import { toJson } from "unsplash-js";

let Unsplash = require('unsplash-js').default;


export const getPhotos = async () => {
  console.log('in photos')
  const unsplashApi = new Unsplash({
    applicationId: accessKey,
    secret: secretKey
  })
  search(unsplashApi);
}

export const search = (unsplashApi) => {
  unsplashApi.search
    .photos('dog', 1)
    .then(toJson)
    .then(({ results }) => {
      console.log(results)
    });
}

getPhotos();