class AddCategoryIdToNotes < ActiveRecord::Migration
  def change
    add_reference :notes, :category, index: true
  end
end
