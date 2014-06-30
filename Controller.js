var Controller = function (){

    this.gets = {};
    this.posts = {};
    this.puts = {};
    this.deletes = {};
    this.app;

    //GETS
    this.getAllGets = function () {
        return this.gets;
    }

    this.getAllPosts = function () {
        return this.posts;
    }

    this.getAllPuts = function () {
        return this.puts;
    }

    this.getAllDeletes = function () {
        return this.deletes;
    }

    this.setApp = function(app) {
        this.app = app;
    }

    this.get = function (path, getFunction) {
        this.gets[path] = getFunction;
    }

    this.post = function (path, postFunction) {
        this.posts[path] = postFunction;
    }

    this.put = function (path, putFunction) {
        this.puts[path] = putFunction;
    }

    this.delete = function (path, deleteFunction) {
        this.deletes[path] = deleteFunction;
    }

}

module.exports = Controller;
