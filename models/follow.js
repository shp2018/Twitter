'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follow = sequelize.define('Follow', {
    follower_id: DataTypes.INTEGER,
    influencer_id: DataTypes.INTEGER
  }, {});
  Follow.associate = function(models) {
    
  };
  return Follow;
};