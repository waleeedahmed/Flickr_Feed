import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1'
  });


