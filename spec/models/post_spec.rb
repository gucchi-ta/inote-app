require 'rails_helper'

RSpec.describe Post, type: :model do
  describe '#create' do
    before do
      @post = FactoryBot.build(:post)
      @post.image = fixture_file_upload('app/assets/images/inote_logo.png')
    end

    describe '画像投稿機能' do
      context '画像投稿機能がうまくいく時' do
        it '値が全て存在する場合は登録できる' do
          expect(@post).to be_valid
        end
        it 'memoが空でも保存できる' do
          @post.memo = nil
          expect(@post).to be_valid
        end
      end
      context '画像投稿機能がうまくいかない時' do
        it '画像が空だと保存できない' do
          @post.image = nil
          @post.valid?
          expect(@post.errors.full_messages).to include("Image can't be blank")
        end
      end
    end
  end
end
