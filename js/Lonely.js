//テキストのカウントアップの設定
var text = ["Play time !", "Plushies", "Wellcome home", "I can't sleep", "Mirror", "Lonely room", "Recluse", "Enter to Dreamland", "Saferoom", "Melting time"];
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
const text03 = 'Some stuff';
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
