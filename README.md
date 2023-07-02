# Welcome to Flickr Photo Feed Application

View this project at https://waleeedahmed.github.io/Flickr_Feed

This project consumes the public API from https://www.flickr.com/services/feeds/docs/photos_public/

To get started with this project, please clone to your local machine, and run 

### `npm start`

There are a couple of unit tests on the container component, to execute those tests, please run 

### `npm test container.test.tsx`

# A tour of the Application

Once you have successfully ran the application, you will see a webpage that queries Flickr APIs 
to get a list of publicly uploaded photos available on flickr. 

To search for specific photos, you may type your search query in the text field given on the page.
You may either search for a single term or multiple terms separated by spacebar. 

The search results update as soon as you type your query. 

You can view additional information about each photos' tag or title by hovering over it.
If you click a photo card, you will be directed to the flickr application where the photo is 
available full size.  

# Important Note
The Flickr public photos API denies requests due to CORS restrictions. To make the application 
work, please make sure you have the chrome extension "Allow CORS, cross-origin-resource-sharing"
installed and turned ON. 
