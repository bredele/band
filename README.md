# band

  Cluster management for nodejs.

  That is my attempt to reinvent the wheel and to have a better appreciation and understanding of how clusters work in nodejs and what makes a good one.

  If you need a multi-core management server, you should proably use [cluster](https://github.com/learnboost/cluster) which seems pretty legit.


## Installation

nodejs:

    $ npm install band


## Distribution

  band distributes work (not just tcp or http server) to a process on every available core of your server.

```js
band(function() {
	//do something
});
```
