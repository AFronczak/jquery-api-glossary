require 'test_helper'

class DefinitionsControllerControllerTest < ActionDispatch::IntegrationTest
  test "should get search" do
    get definitions_controller_search_url
    assert_response :success
  end

end
