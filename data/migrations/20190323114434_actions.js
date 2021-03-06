
exports.up = function (knex, Promise) {
  return knex.schema.createTable('actions', tbl => {
      tbl.increments()
      tbl
          .string('description ', 128)
          .notNullable()
      tbl
          .string('notes')
      tbl
          .boolean('Completed')
          .defaultTo(0)
      tbl
          .integer('project_id')
          .unsigned()
          .references('id')
          .inTable('projects')
          .notNullable()
  })
}
// undo changes in up func.
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('actions')
}