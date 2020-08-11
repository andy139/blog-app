module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define(
    "Blog",
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT
    },
    {}
  );
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
