class Student < ApplicationRecord
    validates :firstname, presence: true
    validates :lastname, presence: true
    validates :grade, length: { in: 1..12 }
    belongs_to :teacher
end
