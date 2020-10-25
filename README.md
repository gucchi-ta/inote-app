# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# テーブル設計
<!-- マークダウン記法で記述 -->

<!-- ユーザー管理機能のテーブル -->
## usersテーブル

| Column     | Type    | Options    |
| ---------- | ------- | ---------- |
| nickname   | string  | null:false |
| email      | string  | null:false |
| password   | string  | null:false |
| first_name | string  | null:false |
| last_name  | string  | null:false |
| first_kana | string  | null:false |
| last_kana  | string  | null:false |
| birthday   | date    | null:false |


### association

- has_many :posts

<!-- 商品情報のテーブル -->
## postsテーブル

| Column              | Type       | Options                       |
| ------------------- | ---------- | ----------------------------- |
| image               | string     | null:false                    |
| memo                | text       | null:false                    |
| user                | references | null:false, foreign_key: true |

### association

- belongs_to :user

