if (document.URL.match( /new/ ) || document.URL.match( /edit/ )) {
  document.addEventListener('DOMContentLoaded', function(){
    const ImageList = document.getElementById('image-list');

    // 選択した画像を表示する関数
    const createImageHTML = (blob) => {
        // 画像を表示するためのdiv要素を生成
      const imageElement = document.createElement('div');

      // 表示する画像を生成
      const blobImage = document.createElement('img');
      blobImage.setAttribute('src', blob);
      blobImage.setAttribute('id', 'preview-img');
      blobImage.setAttribute('width', '324');
      // 生成したHTMLの要素をブラウザに表示させる
      imageElement.appendChild(blobImage);
      ImageList.appendChild(imageElement);
    };

    document.getElementById('upfile').addEventListener('change', function(e){
      // 画像が表示されている場合のみ、すでに存在している画像を削除する
      const imageContent = document.getElementById('preview-img');
      if (imageContent){
        imageContent.remove();
      }
      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);

      createImageHTML(blob);
    });
  });
}