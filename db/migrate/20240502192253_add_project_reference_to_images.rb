class AddProjectReferenceToImages < ActiveRecord::Migration[7.1]
  def change
    add_reference :project_images, :project, null: false, foreign_key: true
  end
end
