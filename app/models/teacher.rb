class Teacher < ApplicationRecord
    validates :firstname, presence: true
    validates :lastname, presence: true
    validates :age, length: {minimum: 1 }
    validates :grade, length: {in: 1..12}
end
