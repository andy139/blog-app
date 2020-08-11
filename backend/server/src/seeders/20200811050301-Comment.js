module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Comments",
      [
        {
          blogId: 1,
          content: "I love your blog",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          blogId: 1,
          content: "Great blog and everything on your site loads quick :)",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Comments", null, {})
};
