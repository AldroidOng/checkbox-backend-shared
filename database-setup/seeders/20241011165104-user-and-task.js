'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const today = new Date();

    const users = await queryInterface.bulkInsert(
      'users',
      [
        {
          email: 'user1@example.com',
          password: 'password1',
          name: 'User One',
        },
        {
          email: 'user2@example.com',
          password: 'password2',
          name: 'User Two',
        },
      ],
      { returning: true },
    );

    // Generate tasks for the users
    const userId1 = users[0].id;

    await queryInterface.bulkInsert('tasks', [
      {
        userId: userId1,
        name: 'Task 1',
        description: 'This task is due more than 7 days from now.',
        dueDate: new Date(today.setDate(today.getDate() + 10)),
      },
      {
        userId: userId1,
        name: 'Task 2',
        description: 'This task is due more than 7 days from now.',
        dueDate: new Date(today.setDate(today.getDate() + 14)),
      },
      // 2 tasks due less than 7 days but more than today
      {
        userId: userId1,
        name: 'Task 3',
        description: 'This task is due in 5 days.',
        dueDate: new Date(today.setDate(today.getDate() + 5)),
      },
      {
        userId: userId1,
        name: 'Task 4',
        description: 'This task is due in 3 days.',
        dueDate: new Date(today.setDate(today.getDate() + 3)),
      },
      {
        userId: userId1,
        name: 'Task 5',
        description: 'This task is overdue.',
        dueDate: new Date(today.setDate(today.getDate() - 1)),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tasks', null, {});
    await queryInterface.bulkDelete('users', null, {});
  },
};
