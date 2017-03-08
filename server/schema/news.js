/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('news', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    content: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pic: {
      type: DataTypes.STRING,
      allowNull: true
    },    
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }, 
    time: {
      type: DataTypes.STRING,
      allowNull: true
    },    
    news_id: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'news'
  });
};
