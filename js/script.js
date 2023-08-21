$(function() {
  $('.menu-trigger').on('click', function(event) {
    // .menu-triggerクリック時に行われる処理
    //.menu-triggerはどこに設定されているかというと、ハンバーガーアイコン<a class="menu-trigger" href="#">に設定されている
    $(this).toggleClass('active');
    //.toggleClass()でclass属性を切り替える
    //.toggleClass()は、指定されているclass（ここではactive）をトグル処理するメソッド
    $('#sp-menu').fadeToggle();
    //.fadeToggle()は、要素のフェードイン・フェードアウトを切り替えるメソッド
    //ここでは、#sp-menuが開いたときに、.fadeToggle()が処理されるように設定している。
    event.preventDefault();
  });
});