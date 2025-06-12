//テキストのカウントアップの設定
var text = ["Artworks", "VRChat", "That's beautiful", "Many photoes", "Let's watch", "BlackRoom(?)", "My memory", "Why I'm suffering ?", "U can change wallpapers", "Once upon a time"];
var random = Math.floor(Math.random() * text.length);
var bar = new ProgressBar.Line(splash_text, {//id名を指定
	strokeWidth: 0,//進捗ゲージの太さ
	duration: 50,//時間指定(1000＝1秒)
	trailWidth: 0,//線の太さ
	text: {//テキストの形状を直接指定	
		style: {//天地中央に配置
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '0',
			transform: 'translate(-50%,-50%)',
			'font-size': '1.2rem',
			color: '#fff',
		},
		autoStyleContainer: false //自動付与のスタイルを切る
	},
	step: function (state, bar) {
		bar.setText(text[random]); //テキストの数値
	}
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
	$("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
});

//タイピングアニメ
const text03 = "Just album";
const textDOM03 = document.getElementById('typewriter-text03');
const delay03 = 300; // 一文字追加する間隔（ミリ秒）
let index03 = 0;

function type03() {
	textDOM03.innerHTML += text03[index03]; // 一文字追加する
	index03++;
	if (index03 >= text03.length) {
		clearInterval(intervalId03); // アニメーションを終了する
		setTimeout(function () {
			textDOM03.classList.remove('start'); //数秒でバーを消す
		}, 1000);
	}
}
textDOM03.classList.add('typing'); // タイピング中のクラスを追加する

const intervalId03 = setInterval(type03, delay03);

//任意のタブにURLからリンクするための設定
function GethashID(hashIDName) {
	if (hashIDName) {
		//タブ設定
		$('.tab li').find('a').each(function () { //タブ内のaタグ全てを取得
			var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得	
			if (idName == hashIDName) { //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
				var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
				$('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
				$(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
				//表示させるエリア設定
				$(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
				$(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加	
			}
		});
	}
}

//タブをクリックしたら
$('.tab a').on('click', function () {
	var idName = $(this).attr('href'); //タブ内のリンク名を取得	
	GethashID(idName);//設定したタブの読み込みと
	return false;//aタグを無効にする
});


// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on('load', function () {
	$('.tab li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
	$('.area:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
	var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
	GethashID(hashName);//設定したタブの読み込み
});