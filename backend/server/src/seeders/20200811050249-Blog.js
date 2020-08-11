module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "Blogs",
      [
        {
          title: "Blog One Title",
          content:
            "Hello... this is the body of the selected blog within the left nav :)",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Blog Two Title',
          content:
            "Hello... this is the body of the selected blog within the left nav :)",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],

      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("Posts", null, {})
};

