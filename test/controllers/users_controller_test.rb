require 'test_helper'

class UsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = users(:one)
  end

  test "should get index" do
    get users_url, as: :json
    assert_response :success
  end

  test "should create user" do
    assert_difference('User.count') do
      post users_url, params: { user: { comments_id: @user.comments_id, email: @user.email, groups_joined_id: @user.groups_joined_id, name: @user.name, posts_made_id: @user.posts_made_id, profile_picture: @user.profile_picture, status: @user.status } }, as: :json
    end

    assert_response 201
  end

  test "should show user" do
    get user_url(@user), as: :json
    assert_response :success
  end

  test "should update user" do
    patch user_url(@user), params: { user: { comments_id: @user.comments_id, email: @user.email, groups_joined_id: @user.groups_joined_id, name: @user.name, posts_made_id: @user.posts_made_id, profile_picture: @user.profile_picture, status: @user.status } }, as: :json
    assert_response 200
  end

  test "should destroy user" do
    assert_difference('User.count', -1) do
      delete user_url(@user), as: :json
    end

    assert_response 204
  end
end
