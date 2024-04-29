class RemoveShortDescToProjects < ActiveRecord::Migration[7.1]
  def change
    remove_column :projects, :short_desc, :string
  end
end
