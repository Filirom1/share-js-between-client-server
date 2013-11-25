# share-js-between-client-server

Share code between client and server.

The folder `common` is shared between server and client
Take a look at the file `common/lib.js`.

A `package.json` file is needed in the `common` dir. Because common could not load server `node_modules`.

## Test

    git clone https://github.com/Filirom1/share-js-between-client-server.git
    cd share-js-between-client-server
    cd server
    npm i
    cd ../common
    npm i
    cd ..
    node server/server.js
