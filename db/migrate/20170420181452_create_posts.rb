class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :content_type
      t.text :body
      t.string :photo_url
      t.string :link_url
      t.string :audio_url
      t.string :video_url
      t.string :quote_url
      t.integer :author_id, null: false
      t.timestamps
    end
    add_index :posts, :author_id
  end
end
