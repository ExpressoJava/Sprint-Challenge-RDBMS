
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { project: 'Traveling', description: 'visit Europe', completed: false },
        { project: 'Portfolio', description: 'get it done', completed: false },
        { project: 'Game of Thrones', description: 'finish soon', completed: false }
      ])
    })
}
