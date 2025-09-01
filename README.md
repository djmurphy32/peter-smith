# peterjosephsmith.co.uk

Portfolio photography site for friend hosted at [https://peterjosephsmith.co.uk](https://peterjosephsmith.co.uk). Built using VueJs with typescript.

Hosted on netlify using build service for CI/CD. Using with their [image CDN](https://docs.netlify.com/image-cdn/overview/) for lazy loading images.

## Deno woes
Deno `v1.44.4` is required and needs to be available on the `PATH` to run `netlify dev`, it will fail with newer versions. To find the supported version refer to netlify-cli repo's CI [here](https://github.com/netlify/cli/blob/main/.github/workflows/integration-tests.yml). 

Deno install instructions can be found [here](https://docs.deno.com/runtime/getting_started/installation/). See below to install a specific version on mac and linux and add deno to the `PATH` 

``` bash
curl -fsSL https://deno.land/x/install/install.sh | sh -s v1.44.4 -y \
    && mv /root/.deno/bin/deno /usr/local/bin/deno
```

## Recommended: Running in dev container

You will be prompted to authorize netlify when you start the devcontainer, if you are not you can do it manually with `npx netlify login`

1. Start the app using `npm start`

## Running on local machine

1. Run `npm i`
1. Login to netlify using `npx netlify login` and complete the login through you browser
1. Start the app using `npm start`
