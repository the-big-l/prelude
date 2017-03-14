class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    else
      render json: @users.errors.full_messages, status: 422
    end
  end

  def index
    @users = Users.all
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
