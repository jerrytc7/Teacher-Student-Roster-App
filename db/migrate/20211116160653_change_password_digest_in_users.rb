class ChangePasswordDigestInUsers < ActiveRecord::Migration[6.1]
  def change
    change_column :users, :password_digest, :string
  end
end
