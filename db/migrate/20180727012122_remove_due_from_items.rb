class RemoveDueFromItems < ActiveRecord::Migration[5.2]
  def change
    remove_column :items, :due, :datetime
  end
end
