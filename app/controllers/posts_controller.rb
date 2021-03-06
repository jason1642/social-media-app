class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  # before_action :set_user, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /posts
  def index
    @posts = Post.all
    render json: @posts.as_json(include:{
      user:{},
      comments:{}
    }),status: :ok

  end


# /posts/:id/comments
def comments 
  @title = "Comments"
  @user = User.find(params[:id])
  @comments = Comment.all.where(user_id: @user)
  render json: @comments
end



  # GET /posts/1
  def show
    render json: @post.as_json(include:{
      user:{},
      comments:{}
    }),status: :ok

  end


  
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




  private
    # Use callbacks to share common setup or constraints between actions.
    
    def set_post
      @post = Post.find(params[:id])
    end

    
    # Only allow a trusted parameter "white list" through.
    def post_params
      params.require(:post).permit(:title, :description, :image_url, :user_id, :comment_id)
    end
end
