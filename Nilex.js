var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var mountModule = require("./Modules/MountModule");

var nylex = {

    start : function start(port) {
        app.listen(port);
        console.log("Server listening at port: %s", port);
    },

    mount : function mount(path, controller) {
        mountModule.mount(path, controller, app);
    },

    throwError : function throwError(errorCode) {
        errorModule.throwError(errorCode);
    },

    static : function set(pathName, folderPath) {
        app.use(folderPath, express.static(pathName));
    }

}

module.exports = nylex;
