class ChangePostsColumn < ActiveRecord::Migration[5.0]
  def change
    add_column :posts, :summary, :text
    add_column :posts, :source, :text
  end
end
