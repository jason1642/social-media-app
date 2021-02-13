class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]
  before_action :set_post, only: [:index,:show, :update, :destroy, :create]

  # GET /comments
  def index
    # @comments = Comment.all

    # render json: @comments
    @comments = Comment.where(post_id: @post.id)
    render json: @comments.as_json(include:{
      user:{},
      post:{
        include: :user
      }
    }),status: :ok
  end

  # GET /comments/1
  def show
    # render json: @comment

    render json: @comment.as_json(
      include:{
        post:{
          include: :user
        }
      } 
    ), status: :ok
  end

  # POST /comments
  def create

    @comment_create = @post.comments.create(params.require(:comment).permit(:comment_text, :user_id, :post_id))

    # @comments = @post.comments.create(params.require(:comment_text).permit(:user_id, :post_id))

    if @comment_create.save
      render json: @comment_create
    else
      render json: @comment_create.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    Comment.destroy(params[:id])
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      # p Comment.find(params[:id])
      @comment = Comment.find(params[:id])
    end

    def set_post
      @post = Post.find(params[:post_id])
    end

  

    # Only allow a trusted parameter "white list" through.
    def comment_params
      params.require(:comment).permit(:comment_text, :user_id, :post_id)
    end
end
