
exports.up = function(knex, Promise) {
    return knex.schema.createTable('project', function(tabble) {
        tabble.increments();
  
        tabble.string('name').notNullable().unique();
  
        tabble.string('description').notNullable();

        tabble.boolean('complete')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('project');
  };
  

//  A project can contain multiple actions and has:
//  a unique Id.
//  a name.
//  a description.
//  a flag that indicates if the project is complete or not.

// PS  this seems like some bullshit to figure out in such a shor time