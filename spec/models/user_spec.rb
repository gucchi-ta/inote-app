require 'rails_helper'

RSpec.describe User, type: :model do
  describe '#create' do
    before do
      @user = FactoryBot.build(:user)
    end

    describe 'ユーザー登録機能' do
      context 'ユーザー登録機能がうまくいく時' do
        it '全ての情報を記述した場合は登録できる' do
          expect(@user).to be_valid
        end
        it 'passwordが8~20文字の英数字なら登録できる' do
          @user.password = '1111aaaa'
          @user.password_confirmation = '1111aaaa'
          expect(@user).to be_valid
        end
      end
      context 'ユーザー登録機能がうまくいかない時' do
        it 'nicknameが空だと保存できない' do
          @user.nickname = nil
          @user.valid?
          expect(@user.errors.full_messages).to include("Nickname can't be blank")
        end
        it 'emailが空だと保存できない' do
          @user.email = nil
          @user.valid?
          expect(@user.errors.full_messages).to include("Email can't be blank")
        end
        it 'passwordが空だと保存できない' do
          @user.password = nil
          @user.valid?
          expect(@user.errors.full_messages).to include("Password can't be blank")
        end
        it 'passwordがあってもpassword_confirmationが空だと保存できない' do
          @user.password = '1111aaaa'
          @user.password_confirmation = ''
          @user.valid?
          expect(@user.errors.full_messages).to include("Password confirmation doesn't match Password")
        end
        it 'passwordとpassword_confirmationの値が異なっていると保存できない' do
          @user.password = '1111aaaa'
          @user.password_confirmation = '2222bbbb'
          @user.valid?
          expect(@user.errors.full_messages).to include("Password confirmation doesn't match Password")
        end
        it 'passwordが8文字以下だと保存できない' do
          @user.password = '1111aaa'
          @user.password_confirmation = '1111aaa'
          @user.valid?
          expect(@user.errors.full_messages).to include('Password is too short (minimum is 8 characters)')
        end
        it 'passwordが20文字以上だと保存できない' do
          @user.password = '11111111111aaaaaaaaaa'
          @user.password_confirmation = '11111111111aaaaaaaaaa'
          @user.valid?
          expect(@user.errors.full_messages).to include('Password is too long (maximum is 20 characters)')
        end
        it 'passwordが英字のみだと保存できない' do
          @user.password = 'aaaaaaaa'
          @user.password_confirmation = 'aaaaaaaa'
          @user.valid?
          expect(@user.errors.full_messages).to include('Password is invalid')
        end
        it 'passwordが数字のみだと保存できない' do
          @user.password = '11111111'
          @user.password_confirmation = '11111111'
          @user.valid?
          expect(@user.errors.full_messages).to include('Password is invalid')
        end
        it 'birthdatが空だと保存できない' do
          @user.birthday = nil
          @user.valid?
          expect(@user.errors.full_messages).to include("Birthday can't be blank")
        end
      end
    end
  end
end
