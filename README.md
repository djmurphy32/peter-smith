# peterjosephsmith.co.uk

Portfolio photography site for friend hosted at [https://peterjosephsmith.co.uk](https://peterjosephsmith.co.uk). Built using VueJs with typescript.

Hosted on netlify using build service for CI/CD. Also making use of their [Large media service](https://docs.netlify.com/large-media/overview/) for image hosting, along with their [image transformation api](https://docs.netlify.com/large-media/transform-images/#request-transformations) for lazy loading images.

## Set up

To run the site locally netlify CLI is required to manage the images

1. Download and install git lfs from https://git-lfs.com/
1. Setup git lfs on you machine using `git-lfs install`
1. Install netlify CLI using `npm i netlify-cli -g`
1. Login to netlify using `netlify login` and complete the login through you browser
1. Pull the images locally using `git lfs pull`
1. Start the app using `npm start`
