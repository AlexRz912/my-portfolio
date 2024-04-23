class PagesController < ApplicationController
  def home
    # redirect_to projects_path if params[:transition_finished] == true
    @mock_data_list = [
      "Podcasts",
      "Blog",
      "Vlog",
      "Test",
      "Karma",
      "Pokemarket",
      "Geocoding",
      "CodeWars",
      "CodinGame",
      "Geocoding",
      "AJAX",
      "Crud",
      "Ruby",
      "RubyOnRails",
      "Restful",
      "API",
      "LeWagon",
      "CSGO",
      "COD",
      "Jack Reacher",
      "AZERTY",
      "Booki",
      "Le jeu du serpent"
    ].shuffle
  end
end
