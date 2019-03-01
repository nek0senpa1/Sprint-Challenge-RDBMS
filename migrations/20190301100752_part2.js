exports.up = function(knex, Promise) {
    return knex.schema.createTable('action', function(tabbly) {
        tabbly.increments();

        tabbly.string('description').notNullable();
  
        tabbly.string('notes').notNullable();

        tabbly.boolean('done').notNullable();

        // below this I"m just guessing at this point, as no
        // specifications were given... and I don't have any
        // clues otherwise as to how to join these...
        tabbly.integer('project_id').notNullable().unsigned()
        .references('id').inTable('project')
        .onDelete('CASCADE').onUpdate('CASCADE');
        // I don't even know what unsigned or CASCADE are doing
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('action');
  };
  

//  An action belongs to only one project. An action has:
//  a unique id.
//  a description of what needs to be done.
//  a notes column to add additional information.
//  a flag that indicates if the action has been completed.

// this is piles of BS because I don't know where to connect these
// I'm not even sure it matters where/how I do it... and I'm still
// not even sure how to give you the results you want because nobody
// ever bothered to cover that part...  teaching us all that SQL
// stuff but never how to convert it or make it useful in JS...