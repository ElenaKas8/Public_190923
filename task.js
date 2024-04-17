//Вывести общее ко-во клиентов из Germany и USA
db.users.countDocuments(
    { $or: [ { country: 'Germany' }, { country: 'USA' } ] }
)