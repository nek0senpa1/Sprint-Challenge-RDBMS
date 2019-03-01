
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {id: 1, name: 'ProjectRunway', description: 'Some random project things...', complete: false},
        {id: 2, name: 'ProjectLearn', description: 'Something I hoped to come here and do...', complete: false},
        {id: 3, name: 'ProjectTry', description: 'Some other things I\'m attempting...', complete: false},
        {id: 4, name: 'ProjectFailure', description: 'Something about to happen because nobody explained this worth a damn...', complete: false},
        
      ]);
    });
};
