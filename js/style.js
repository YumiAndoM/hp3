//画像の設定

var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 768){
			var responsiveImage = [//PC用の画像
				{ src: './img/spring/Cherry blossoms3.jpg'},
				{ src: './img/summer/summer.jpg'},
        { src: './img/autumn/fall.jpg' },
        { src: './img/winter/fuyu.jpg'}
			];
		} else {
			var responsiveImage = [//タブレットサイズ（768px）以下用の画像
				{ src: './img/spring/Cherry blossoms3.jpg'},
				{ src: './img/summer/summer.jpg'},
        { src: './img/autumn/fall.jpg' },
        { src: './img/winter/fuyu.jpg'}
			];
		}

//Vegas全体の設定

$('#slider').vegas({
		//overlay: true,画像の上に網線やドットのオーバーレイパターン画像を指定。
		transition: 'blur',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
		transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
		delay: 10000,//スライド間の遅延をミリ秒単位で。
		animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
  animation: 'kenburns',
  // animation: 'kenburns',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
		slides: responsiveImage,//画像設定を読む
		//timer:false,// プログレスバーを非表示したい場合はこのコメントアウトを外してください
});
  



	// ブラー

$(window).scroll(function (){
	$('.scroll-space').each(function(){
		var elemPos = $(this).offset().top,
		scroll = $(window).scrollTop(),
		windowHeight = $(window).height();

			if (scroll > elemPos - windowHeight + 150){
				$(this).addClass('scrollin');
			}
	});
});



// 一ページ表示

$.scrollify({
section : ".box",//1ページスクロールさせたいエリアクラス名
scrollbars:"false",//スクロールバー表示・非表示設定
interstitialSection : "#header,#footer",//ヘッダーフッターを認識し、1ページスクロールさせず表示されるように設定
easing: "swing", // 他にもlinearやeaseOutExpoといったjQueryのeasing指定可能
scrollSpeed: 300, // スクロール時の速度

//以下、ページネーション設定
// before:function(i,panels) {
// var ref = panels[i].attr("data-section-name");
// $(".pagination .active").removeClass("active");
// $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
// },
// afterRender:function() {
// var pagination = "<ul class=\"pagination\">";
// var activeClass = "";
// $(".box").each(function(i) {//1ページスクロールさせたいエリアクラス名を指定
// activeClass = "";
// if(i===$.scrollify.currentIndex()) {
// activeClass = "active";
// }
// pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
// });
// pagination += "</ul>";

// $("#box1").append(pagination);//はじめのエリアにページネーションを表示
// $(".pagination a").on("click",$.scrollify.move);
// }

});





