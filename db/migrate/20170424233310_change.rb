class Change < ActiveRecord::Migration[5.0]
  def change
    remove_column :posts, :photo_url, :string
    remove_column :posts, :link_url, :string
    remove_column :posts, :audio_url, :string
    remove_column :posts, :video_url, :string
    remove_column :posts, :quote_url, :string
    rename_column :posts, :content_type, :content
  end
end
