require 'rails_helper'

def basic_pass(path)
  username = ENV['BASIC_AUTH_USER']
  password = ENV['BASIC_AUTH_PASSWORD']
  visit "http://#{username}:#{password}@#{Capybara.current_session.server.host}:#{Capybara.current_session.server.port}#{path}"
end

RSpec.describe '画像投稿', type: :system do
  before do
    @user = FactoryBot.create(:user)
    @post_memo = Faker::Lorem.sentence
  end
  context '画像投稿ができるとき' do
    it 'ログインしたユーザーは新規投稿できる' do
      # ログインする
      basic_pass new_user_session_path
      fill_in 'email', with: @user.email
      fill_in 'password', with: @user.password
      find('input[name="commit"]').click
      expect(current_path).to eq root_path
      # 新規投稿ページへのリンクがあることを確認する
      expect(page).to have_css '#upload_icon'
      # 投稿ページに移動する
      visit new_post_path
      # フォームに情報を入力する
      attach_file('upfile', 'app/assets/images/inote_logo.png', make_visible: true)
      fill_in 'memo', with: @post_memo
      # 送信するとPostモデルのカウントが1上がることを確認する
      expect  do
        find('input[name="commit"]').click
      end.to change { Post.count }.by(1)
      # トップページに遷移する
      expect(current_path).to eq root_path
    end
  end
  context '画像投稿ができないとき' do
    it 'ログインしていないと新規投稿ページに遷移できない' do
      # トップページに遷移する
      basic_pass root_path
      # 新規投稿ページへのリンクがない
      expect(page).to have_no_css '#upload_icon'
    end
  end
end
