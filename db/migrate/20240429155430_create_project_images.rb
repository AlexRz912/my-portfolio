class CreateProjectImages < ActiveRecord::Migration[7.1]
  def change
    create_table :project_images do |t|
      t.string :name
      t.text :imageurl
      t.timestamps
    end
  end
end
