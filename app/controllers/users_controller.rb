class UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end
    # get "/me"
    def show
        if current_user
            render json: current_user
        else
            render json: {}, status: :unauthorized
        end
    end
    # post "/signup"
    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors:user.errors.full_message }, status: :unprocessable_entity
        end
    end 

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
