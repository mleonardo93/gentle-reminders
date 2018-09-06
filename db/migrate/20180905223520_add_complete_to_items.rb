class AddCompleteToItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :complete, :boolean
  end
end
