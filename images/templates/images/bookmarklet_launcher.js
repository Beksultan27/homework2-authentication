(function(){
  if (window.myBookmarklet !== undefined){
    myBookmarklet();
  }
  else {
  document.body.appendChild(
    document.createElement('script')
  ).src='1ba7307d.ngrok.io' +
    Math.floor(Math.random()*99999999999999999999);
  }
})();