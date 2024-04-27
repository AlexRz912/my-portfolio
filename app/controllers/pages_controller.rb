class PagesController < ApplicationController
  def home
    # redirect_to projects_path if params[:transition_finished] == true
    @mock_data_list = [
      "TDD",
      "Karma",
      "Pokemarket",
      "CodeWars",
      "AJAX",
      "Crud",
      "React",
      "RubyOnRails",
      "Restful",
      "API",
      "LeWagon",
      "Booki",
      "Snake Game",
      "TDD",
      "Karma",
      "Pokemarket",
      "CodeWars",
      "AJAX",
      "Crud",
      "React",
      "RubyOnRails",
      "Restful",
      "API",
      "TypeScript",
      "Booki",
      "Snake Game"
    ].shuffle
  end
end
