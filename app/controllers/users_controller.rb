class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  # GET /users
  def index
    @users = User.all

    render json: @users
  end







# Show posts made by user
  # /users/:id/posts
  def posts 
    @title = "Posts"
    @user = User.find(params[:id])
    @posts = Post.where(user_id: @user)
    render json: @posts
  end




  # GET /users/1
  def show
    render json: @user.as_json(include:
      :posts
),status: :ok
  end










  # POST /users
  def create
    @user = User.new(user_params)
    
    if @user.save
      @token = encode({user_id: @user.id});
      render json: {user: @user.return_data, token: @token}, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end



  


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:username, :email, :password, :post_id, :comment_id)
    end
end
