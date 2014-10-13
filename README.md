## Light Linux
- (on development only web admin interface for now)
This is a Lightweight Linux based on ARM platform. Focused in display web pages without browser and X Server.
### Install
Steps: 
#### 1) Get SilkJS
See http://silkjs.net/installing-silkjs/
#### 2) Get application
```
$ git clone https://github.com/rill-l33t/light-linux.git
$ cd  light-linux/MVVM/Application
```
#### 3) Install application js deps
```
bower install docroot/bower.json
```
#### 4) Run application
```
$ http-silk.js bootstrap.js
```
#### 3) Access in your browser
```
http://localhost:9090/#/apps
```
### Requirements
- Linux
- bower - See http://bower.io/#install-bower
- SilkJS - See http://silkjs.net/installing-silkjs/