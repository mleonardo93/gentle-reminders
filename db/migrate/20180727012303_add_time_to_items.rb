class AddTimeToItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :date, :date
    add_column :items, :time, :time
  end
end
