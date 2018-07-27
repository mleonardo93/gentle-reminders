class RemoveDateFromItems < ActiveRecord::Migration[5.2]
  def change
    remove_column :items, :date, :date
  end
end
