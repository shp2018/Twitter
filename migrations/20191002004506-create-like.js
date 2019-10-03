'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Likes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
      
          onDelete: "CASCADE",
          references: {
            model: "Users",
            key: "id"
          }
      },
      post_id: {
        type: Sequelize.INTEGER,
      
          onDelete: "CASCADE",
          references: {
            model: "Posts",
            key: "id"
          }
      },
      comment_id: {
        type: Sequelize.INTEGER,
    
          onDelete: "CASCADE",
          references: {
            model: "Comments",
            key: "id"
          }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Likes');
  }
};