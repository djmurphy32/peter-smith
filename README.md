# peterjosephsmith.co.uk

Portfolio photography site for friend hosted at [https://peterjosephsmith.co.uk](https://peterjosephsmith.co.uk). Built using VueJs with typescript.

Hosted on netlify using build service for CI/CD. Using with their [image CDN](https://docs.netlify.com/image-cdn/overview/) for lazy loading images.

## Recommended: Running in dev container

To run the site locally netlify CLI is required to manage the images, you will be prompted to authorize netlify when you first build the devcontainer, if you are not you can do it manually with `netlify login`

1. Start the app using `npm start`

## Running on local machine

To run the site locally netlify CLI is required to manage the images

1. Install netlify CLI using `npm i netlify-cli -g`
1. Login to netlify using `netlify login` and complete the login through you browser
1. Run `npm i`
1. Start the app using `npm start`
