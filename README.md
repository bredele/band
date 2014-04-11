# band

  > A nodejs multi-core server managment tutorial 

  Band is my attempt to reinvent the wheel and to have a better appreciation and understanding of how clusters work in nodejs. My goal is to have a pluggable multi-core management server which will allow to perform heavy processing and load balancing.

  I don't really know what I'm getting into and that's why I want this project to be a sort of handbook that I'll write day to day and where you can follow my progress.


## Installation

    $ npm install band


## Day 1

  Nodejs is multithreaded and most of the time, a single thread will be more than enough to do what you need. However, for heavily trafficked applications you'll need a greater concurrency and some kind of safety if the application is stuck in long-running events.

  The obvious solution is to take advantage of multiple processors. Nodejs allows you to do that with the node core [cluster](http://nodejs.org/api/cluster.html) module.

## cluster

  A node cluster does a lot for you. For example, it automatically load-balances incoming connections accross multiple processes and create child processes (or `workers`) that share the same socket.


Here's how to create a cluster of processes with node:

```js
var cluster = require('cluster');
var cpus = require('os').cpus().length;

if (cluster.isMaster) {
  //fork for every available cpu
  while(cpus--) {
	  cluster.fork();
	}

} else {
  // do something in worker process
}
```

and here's how to do the same thing with band:

```js
band(function() {
	//do something 
});
```

  Something can go wrong in a worker process and we need to restart dying processes to keep advantage of all CPUs. Right now, band implements a basic check for running processes which is the equivalent of:

```js
cluster.on('death', function() {
	cluster.fork();
});
```

  This is not enough and we will need later to monitor workers memory in case a process become unruly, freeze or is stuck in long-running events.
<!-- 
  After today, I have some none answered questions:
    - which is the algorithm behind cluster load balancing?
    - what if I want to clusterize processes different type of server?
 -->


