class AddDueToItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :due, :datetime
  end
end
