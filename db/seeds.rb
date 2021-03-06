# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Student.create(firstname: Faker::Name.first_name, lastname: Faker::Name.last_name, grade: Faker::Number.between(from: 1, to: 10), teacher_id: 1)
Student.create(firstname: Faker::Name.first_name, lastname: Faker::Name.last_name, grade: Faker::Number.between(from: 1, to: 10), teacher_id: 9)
Student.create(firstname: Faker::Name.first_name, lastname: Faker::Name.last_name, grade: Faker::Number.between(from: 1, to: 10), teacher_id: 1)
Student.create(firstname: Faker::Name.first_name, lastname: Faker::Name.last_name, grade: Faker::Number.between(from: 1, to: 10), teacher_id: 9)
Student.create(firstname: Faker::Name.first_name, lastname: Faker::Name.last_name, grade: Faker::Number.between(from: 1, to: 10), teacher_id: 1)


Teacher.create(firstname: Faker::Name.first_name, lastname: Faker::Name.last_name, age: Faker::Number.between(from: 18, to: 100), grade: Faker::Number.between(from: 1, to: 10))
Teacher.create(firstname: Faker::Name.first_name, lastname: Faker::Name.last_name, age: Faker::Number.between(from: 18, to: 100), grade: Faker::Number.between(from: 1, to: 10))

