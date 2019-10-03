'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.TEXT,
    password: DataTypes.TEXT,
    bio: DataTypes.TEXT
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Post,{foreignKey: 'user_id'})
    User.hasMany(models.Like, {foreignKey: 'user_id'})
    User.belongsToMany(User, {as: 'followers', through: "follwer_influencer", foreignKey: 'influencer_id',otherKey:'follwer_id'})
    User.belongsToMany(User, {as: 'influencers',through: "follwer_influencer", foreignKey: 'follwer_id',otherKey:'influencer_id'})
  };
  return User;
};