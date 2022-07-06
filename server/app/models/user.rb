class User < ActiveRecord::Base
    has_secure_password

    validates :name, presence: true

    validates :emial, presence: true, uniqueness: true, email: true
    # validates :email, presence: true, uniqueness: { case_sensitive: false }, email: true

    has_one :auth_token, dependent: :destroy
end