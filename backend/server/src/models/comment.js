module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      blogId: DataTypes.INTEGER,
      content: DataTypes.TEXT
    },
    {}
  );
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.Blog, {
      foreignKey: "blogId",
      as: "blog"
    });
  };
  return Comment;
};
