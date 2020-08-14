module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define(
        'Comment',
        {
            blogId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            content: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
        },
        {}
    )
    Comment.associate = function (models) {
        // associations can be defined here
        Comment.belongsTo(models.Blog, {
            foreignKey: 'blogId',
            as: 'blog',
        })
    }
    return Comment
}
