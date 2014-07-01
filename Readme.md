NILEX.js
========

Node.js framework to build Restful APIs, Angular.js pages...

## Example of server.js 
  
    var nylex = require('nylex')
    var exampleController = require('/path/to/controller')
  
    //first route to mount the controller, second the controller.
    nylex.mount("/", exampleController)
  
    //Start the server
    nylex.start(8080);
  
## Example of simple controller

    var Controller = require('nylex-controller')
    var exampleController = new Controller();
  
    exampleController.get("/", function(req, res) {
      
        res.send("Hello World!");
      
    });
  
    module.exports = exampleController;

## Installation

    $ npm install nylex nylex-controller
    
## Simple usage
  
  * Use verbs to route (GET, POST, PUT, DELETE);
  * Use vars in the routes ("/example/route/:example_id")
  * Get post, put and delete data in a simple way ( var exampleVar = req.body.exampleVar)
  

## Viewing a restful example with MongoDB
  
    $ git clone https://github.com/JulianAlonso/Nylex.js-ExampleWithMongoDB.git

  To run the example you need to be root, if you want you can change the port defined in index.js


## License 
  
  MIT





  
  
