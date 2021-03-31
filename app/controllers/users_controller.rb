class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  # before_action :authorize_request, only: [:create, :update, :destroy]
  # before_action :correct_user,   only: [:edit, :update]

  # GET /users
  def index
    @users = User.all

    render json: @users.as_json(include:
    :posts
),status: :ok
  end

# Show posts made by user
  # /users/:id/posts
  def posts 
    @title = "Posts"
    @user = User.find(params[:id])
    @posts = Post.where(user_id: @user)
    render json: @posts.as_json(include:{
      user:{},
      comments:{}
    }),status: :ok
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
      payload  = { user_id: user.id }
      session = JWTSessions::Session.new(payload: payload, refresh_by_access_allowed: true)
      tokens = session.login
      response.set_cookie(JWTSessions.access_cookie,
                                value: tokens[:access],
                                httponly: true,
                                secure: Rails.env.production?)

      render json: tokens
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


    # Confirms the correct user.
    # def correct_user
    #   @user = User.find(params[:id])
    #   redirect_to(root_url) unless current_user?(@user)
    # end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:username, 
                                   :image, 
                                   :email,
                                   :bio,
                                   :password, 
                                   :post_id, 
                                   :comment_id)
    end
end
