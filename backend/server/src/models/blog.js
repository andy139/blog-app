module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define(
      'Blog',
      {
          title: {
              type: DataTypes.STRING,
              allowNull: false,
          },
          content: {
              type: DataTypes.TEXT,
              allowNull: false,
          },
      },
      {}
  )
  Blog.associate = function(models) {
    // associations can be defined here
    Blog.hasMany(models.Comment, {
      foreignKey: "blogId",
      as: "comments",
      onDelete: "CASCADE"
    });
  };
  return Blog;
};
