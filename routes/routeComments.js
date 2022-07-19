"use strict"
const commentsdb = require("../Models/CommentsDB");
var commentsDBObject = new commentsdb();
function routeComments(app){
    app.route('/comments')
        .post(commentsDBObject.addComment)
        .get(commentsDBObject.getAllComments);
    app.route('/comments/:id')
        .put(commentsDBObject.updateComment)
        .delete(commentsDBObject.deleteComment)
        .get(commentsDBObject.searchComment);
}
module.exports = {routeComments};