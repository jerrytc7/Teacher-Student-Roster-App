class ApplicationController < ActionController::API
    include ActionController::Cookies

    def current_user
        User.first
      end
end
