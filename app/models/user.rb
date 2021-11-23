class User < ApplicationRecord
    validates :username, presence: true, uniqueness: {case_sensitive: false}
    validates :password, presence: true
    validates :password_confirmation, presence: true
    has_secure_password
end
