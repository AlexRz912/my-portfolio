class PagesController < ApplicationController
  def home
    redirect_to projects_path if params[:transition_finished] == true
  end
end
