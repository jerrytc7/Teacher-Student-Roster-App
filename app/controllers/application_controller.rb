class ApplicationController < ActionController::API
    include ActionController::Cookies

    private

    def current_user
        User.first
    end
end
