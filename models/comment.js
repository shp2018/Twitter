'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    post_id: DataTypes.INTEGER,
    like_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    Comment.belongsTo(models.Post,{foreignKey:'post_id'})
    Comment.belongsTo(models.Comment,{foreignKey:'comment_id'})
    Comment.belongsTo(models.User,{foreignKey:'user_id'})
  
  };
  return Comment;
};