import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1'
  });


