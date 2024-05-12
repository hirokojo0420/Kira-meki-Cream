// carousel slick
$('.carousel').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,

  dots: true,
  dotsClass: 'dots-style',
  arrows: true,
  prevArrow:'<button type="button" class="slick-prev prev-arrow"></button>',
  nextArrow:'<button type="button" class="slick-next next-arrow"></button>',

//  autoplay: true,
  autoplaySpeed: 5000,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ],
});

//QA アコーディオン
// アコーディオンのQタイトルがクリックされたら
$('.qa__container__accordion__item__q').on('click', function(e) {
  // .qa__container__accordion__item__aを選択
  var content = $(this).next();

  // .qa__container__accordion__item__aを表示・非表示
  content.slideToggle(300);

  // Qタイトルの矢印の向きを変更
  $(this).toggleClass('open');

});

// topへ戻るボタン
$('.footer__toTop').on('click', function() {
  $('body, html').animate({
    scrollTop: 0
    }, 500);
  return false;
});

////////////////////////////////////////////////////////////////////////////
// スクロール途中でヘッダーが消え、上にスクロールすると復活するアニメーション
var beforePos = 0;//スクロールの値の比較用の設定

//スクロール途中でヘッダーが消え、上にスクロールすると復活する関数
function ScrollAnime() {
    var elemTop = $('#header-anm-point').offset().top; //#header-anm-pointの位置まできたら
	var scroll = $(window).scrollTop();
    //ヘッダーの出し入れをする
    if(scroll == beforePos) {
		//IE11対策で処理を入れない
    }else if(elemTop > scroll || 0 > scroll - beforePos){
		//ヘッダーが出現する
      $('#header').removeClass('upMove');
      $('#header').addClass('downMove');
    }else {
		//ヘッダーが上に消える
      $('#header').removeClass('downMove');
      $('#header').addClass('upMove');
    }

    beforePos = scroll;//現在のスクロール値を比較用のbeforePosに格納
}

// 画面をスクロールをした時
$(window).scroll(function () {
	ScrollAnime();//スクロール途中でヘッダーが消え、上にスクロールすると復活する関数を呼ぶ
});

// ページが読み込まれた時
$(window).on('load', function () {
	ScrollAnime();//スクロール途中でヘッダーが消え、上にスクロールすると復活する関数を呼ぶ
});
