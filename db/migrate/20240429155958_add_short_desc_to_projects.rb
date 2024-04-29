class AddShortDescToProjects < ActiveRecord::Migration[7.1]
  def change
    add_column :projects, :short_desc, :string
  end
end
