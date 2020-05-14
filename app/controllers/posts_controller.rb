class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  # before_action :set_user
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /posts
  def index
    @posts = Post.all

    render json: @posts


    # @posts = Post.where(user_id: @user.id)
    # render json: @posts, include: :user, status: :ok
  end

  # GET /posts/1
  def show
    render json: @post

    # render json: @post.as_json(include:{post:{
    #   include: :user
    # }}), status: :ok
  end
  # def new 
  #   @post = post.new
  # end
  # POST /posts
  def create

    @post = Post.new(post_params)

    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end


  # def add_comment
  #   @comment = Comment.find(params[:comment_id])
  #   @post.comments << @comment
  #   render json: @post, include: :comments
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # def set_user 
    #   @user = User.find(params[:user_id])
    # end
    # Only allow a trusted parameter "white list" through.
    def post_params
      params.require(:post).permit(:title, :description, :image_url, :user_id)
    end
end
