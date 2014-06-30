var mountModule = {

    mount : function(path, controller, app) {
        mountAll(path, controller.getAllGets(), "get", app);
        mountAll(path, controller.getAllPosts(), "post", app);
        mountAll(path, controller.getAllPuts(), "put", app);
        mountAll(path, controller.getAllDeletes(), "delete", app);
    }

}

function mountAll(path, functions, method, app) {
    for (var controllerPath in functions) {
        mount(method, path, controllerPath, functions[controllerPath], app);
    }
}

function mount(method, path, key, keyFunction, app) {

    if (key == "/") key = "";

    app[method] (path+key, keyFunction);

    console.log("Mounted method: %s, path: %s", method, path+key);

}

module.exports = mountModule;
