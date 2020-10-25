class Post < ApplicationRecord
  # アソシエーション
  belongs_to :user

  # 画像ファイルを紐付け
  has_one_attached :image

  # 空の値を登録できないようにバリデーション
  validates :image, presence: true
end
