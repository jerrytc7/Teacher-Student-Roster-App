class User < ApplicationRecord
    validates :username, presence: true
    validates :password, presence: true
    validates :password_confirmation, presence: true
    has_secure_password
end
