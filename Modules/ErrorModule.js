var errorModule = {

    mountError : mountError,

    throwError : throwError,

}

function mountError(errorController, app) {

    app.all("/*", function(req, res){
        res.status(404);
        errorController["404"](req, res);
    });

    app.use(function(err, req, res, next){
        res.status(err.code);
        console.log("ERROR CODE: " + err.code);
        errorController[err.code](err, req, res, next);
    });

}


function throwError(code) {
    var error = new Error();
    error.code = code;
    throw error;
    return;
}

module.exports = errorModule;
