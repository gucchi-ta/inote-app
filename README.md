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
- has_many :favorites
<!-- - has_many :albums -->


<!-- 画像情報のテーブル -->
## postsテーブル
| Column              | Type       | Options                       |
| ------------------- | ---------- | ----------------------------- |
| image               | string     | null:false                    |
| memo                | text       | null:false                    |
| grobal              | boolean    | null:false                    |
| user                | references | null:false, foreign_key: true |

### association
- belongs_to :user
- has_many :favorites
<!-- - has_many :albums, throgh : post_alum_relations -->


<!-- お気にいり情報のテーブル -->
## favoriteテーブル
| Column              | Type       | Options                       |
| ------------------- | ---------- | ----------------------------- |
| post                | references | null:false, foreign_key: true |
| user                | references | null:false, foreign_key: true |

### association
- belongs_to :user
- belongs_to :post


<!-- アルバム情報のテーブル -->
## alubumsテーブル
| Column              | Type       | Options                       |
| ------------------- | ---------- | ----------------------------- |
| alubum_name         | string     | null:false                    |
| user                | references | null:false, foreign_key: true |

### association
- belongs_to :user
- has_many   :posts, throgh : post_alum_relations


<!-- 画像とアルバムの中間テーブル -->
## post_alum_relationsテーブル
| Column              | Type       | Options                       |
| ------------------- | ---------- | ----------------------------- |
| post                | references | null:false, foreign_key: true |
| album               | references | null:false, foreign_key: true |

### association
- belongs_to :post
- belongs_to :album


