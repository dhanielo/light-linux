## Light Linux
An distro to bootstrap standalone pages (js/html/css).
### Install
Steps: 
#### 1) Get SilkJS
See http://silkjs.net/installing-silkjs/
#### 2) Get application
```
$ git clone https://github.com/rill-l33t/light-linux.git
$ cd  light-linux/MVVM/Application
```
#### 3) Install application deps js
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
- SilkJs - See http://silkjs.net/installing-silkjs/