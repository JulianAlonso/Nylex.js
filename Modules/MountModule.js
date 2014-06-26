var mountModule = {

    mount : function(path, controller, app) {
        mountGets(path, controller.getAllGets(), app);
        mountPosts(path, controller.getAllPosts(), app);
        mountPuts(path, controller.getAllPuts(), app);
        mountDeletes(path, controller.getAllDeletes(), app);
    }

}

function mountGets(path, gets, app) {
    for (var getPath in gets) {
        mount("get", path, getPath, gets[getPath], app);
    }
}

function mountPosts(path, posts, app) {
    for (var postPath in posts) {
        mount("post", path, postPath, posts[postPath], app);
    }
}

function mountPuts(path, puts, app) {
    for (var putPath in puts) {
        mount("put", path, putPath, puts[putPath], app);
    }
}

function mountDeletes(path, deletes, app) {
    for (var deletePath in deletes) {
        mount("delete", path, deletePath, deletes[deletePath], app);
    }
}

function mount(method, path, key, keyFunction, app) {

    if (key == "/") key = "";

    app[method] (path+key, keyFunction);

    console.log("Mounted method: %s, path: %s", method, path+key);

}

module.exports = mountModule;
