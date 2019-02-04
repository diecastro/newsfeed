FOUNDATION LABS TEST PROJECT

## Overview
Small app to configure and view news.

# Setup
The following setup is required:

### Initial Project Setup

NOTE: The React/Redux implementation is based on
http://redux.js.org/docs/introduction/Examples.html#real-world

#### Install node:
Using the latest recommend version of node
https://nodejs.org/en/download/

##### install node to a particular version:

    $ sudo npm cache clean -f
    $ sudo npm install -g n
    $ sudo n 10.15.0

#### install yarn to manage packages dependecies
    
    https://yarnpkg.com/lang/en/docs/install/#mac-stable

    $ brew install yarn --without-node

#### Install Webpack module globally:

Webpack (Module Bundler): https://webpack.github.io/

    $ sudo npm install webpack -g

#### Install SASS
SASS (CSS extension language) : http://sass-lang.com/

    $ sudo gem install sass


#### Setup the project:

    $ cd ~/your_code_dir
    git@github.com:diecastro/newsfeed.git
    $ git clone https://github.com/diecastro/newsfeed.git
    $ cd newsFeed
    $ yarn 
    
#### start development
    $ npm run start-dev

#### start production
    $ npm start
    
## Environments

### Local

#### Logging
Server console logs are written to:
 ```
 /server/logs
 ```

### Dev

#### Logging
Server console logs are written to:
 ```
 /server/logs
 ```
 
## Tests, Coverage and Lint

```
npm test
```
 
### Lint Only

```
npm run lint
```

### Client Tests

```
npm run test-client
```


### Server Tests (integration and unit)

```
npm run test-server
```
   
### Server Unit Tests

```
npm run test-server-unit
```
    
### Server Integration Tests

```
npm run test-server-integration
```

### Coverage Reports

location of coverage reports

#### Client test reports

```
/coverage/client-coverage/index.html
```

#### Server test reports

```
/coverage/server-coverage/index.html
```
