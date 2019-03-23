
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        { description: 'build something', notes: 'today', completed: false, project_id: 2 },
        { description: 'visit Belgium', notes: 'today', completed: false, project_id: 1 },
        { description: 'finish season 7 of GOT', notes: '2 weeks from now', completed: false, project_id: 3 }
      ])
    })
}
