// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

// jqueryの導入
require('jquery')

require("@rails/ujs").start()
// require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

//jsファイルを読み込む
require("../fade_in")
// require("../img_form")
require('../preview')
// require('../loading')
// require("../favorite")
require("../grobal")
// require("../jquery.fancybox.min")
require("../jquery.fancybox")
require("../left_sp_info")
require("../grid_index")
// require("../shuffle")
require("../header_close")
require("../show")
// require("../dummy")



// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
