import fetchJsonp from 'fetch-jsonp';

export const flickerApi = (url: string, queryparameters: string = ""): Promise<any> => {
  return fetchJsonp(url + queryparameters, {
    jsonpCallback: 'jsoncallback',
  })
}