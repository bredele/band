# band

  Cluster management for nodejs.

  Band is my attempt to reinvent the wheel and to have a better appreciation and understanding of how clusters work in nodejs and what makes a good one.

  If you need a multi-core management server, you should proably use [cluster](https://github.com/learnboost/cluster) which seems pretty legit.


## Installation

    $ npm install band


## Distribution

  According the nodejs doc, a `worker` created by a cluster is is a process spawned using `child_process.fork` which can share sockets with other workers. You could decide to create 
  a tcp server or not, the implementation should be the same.

### default

  By default, band distributes work (not just tcp or http server) to a process on every available core of your server.

```js
band(function() {
	//do something
});
```

  band automatically fork a worker when a death occurs.
