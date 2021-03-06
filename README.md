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

#### install yarn to manage packages dependencies
    
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
    $ npm start
    navigate to http://localhost:3001/news

#### start production
    $ npm start
    navigate to http://localhost:3001/news
    
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

##Seeding the application
Update the connection string located at /server/src/config/mongo.json.

Install all the dependencies and start the application.

Once you got the application running, navigate to http://localhost:3001/api/applicationSeed/ , this will create an admin user 
```
email: 'admin@testData.com',
password: 'password'
```
