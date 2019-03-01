
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('action').del()
    .then(function () {
      // Inserts seed entries
      return knex('action').insert([
        {id: 1, description: 'Do This Thing', notes: 'here is why', done: false, project_id: 1},
        {id: 2, description: 'Do This Thing again', notes: 'here is why', done: false, project_id: 1},
        {id: 3, description: 'Do This Thing here', notes: 'here is why', done: false, project_id: 2},
        {id: 4, description: 'Do This Thing for reasons', notes: 'here is why', done: false, project_id: 2},
        {id: 5, description: 'Do This Thing just because', notes: 'here is why', done: false, project_id: 3},
        {id: 6, description: 'Do This Thing right now', notes: 'here is why', done: false, project_id: 3},
        {id: 7, description: 'Do This Thing later', notes: 'here is why', done: false, project_id: 3},
      ]);
    });
};
