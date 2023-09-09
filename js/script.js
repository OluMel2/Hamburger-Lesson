$(function() {
  $('.menu-trigger').on('click', function(event) {
    // .menu-triggerクリック時に行われる処理
    //.menu-triggerはどこに設定されているかというと、ハンバーガーアイコン<a class="menu-trigger" href="#">に設定されている
    $(this).toggleClass('active');
    //.toggleClass()でclass属性を切り替える
    //.toggleClass()は、指定されているclass（ここではactive）をトグル処理するメソッド
    //aタグのclassにはmenu-triggerが指定され、activeは指定されていません。
    //このときに、.toggleClass()を設定すると、アイコンがクリックされたときにactiveクラスが追加され、もう一度クリックすると削除されます。
    //このように、.toggleClass()によって、class属性の追加と削除が交互に行われます。
    //さらに、.menu-trigger.active span:nth-child(1)～(3)の各CSSによって、activeクラスになったときにアイコンが「×」になるように設定されています。
    $('#sp-menu').fadeToggle();
    //.fadeToggle()は、要素のフェードイン・フェードアウトを切り替えるメソッド。
    //このメソッドを使って、ハンバーガーメニューを開いたときの状態を設定します。
    //ここでは、#sp-menuが開いたときに、.fadeToggle()が処理されるように設定している。
    //#sp-menuはどこに設定されているかというと、ハンバーガーメニュー<div id="sp-menu">に設定されています。
    //ハンバーガーメニューがクリックされたときに、フェードインとフェードアウトが交互に実行されるようになります。
    event.preventDefault();
  });
});