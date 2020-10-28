class Post < ApplicationRecord
  # アソシエーション
  belongs_to :user

  # 画像ファイルを紐付け
  has_one_attached :image

  # 空の値を登録できないようにバリデーション
  validates :image, presence: true

  def self.search(search)
    if search != ''
      Post.where('grobal LIKE ? and memo LIKE(?)', '1', "%#{search}%").order('created_at DESC')
    else
      Post.where('grobal LIKE ?', '1').order('created_at DESC')
    end
  end

  def self.my_search(search)
    if search != ''
      Post.where('memo LIKE(?)', "%#{search}%").order('created_at DESC')
    else
      Post.all.order('created_at DESC')
    end
  end
end
