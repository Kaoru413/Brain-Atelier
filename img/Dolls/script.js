//テキストのカウントアップの設定
var text = ["PlayDolls", "人形遊び"];
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


"use strict";

//==========
// Matter.js

// キャンバスのサイズ
const WIDTH = window.innerWidth ;
const HEIGHT = window.innerHeight * 0.7;

// モジュール各種
const Engine = Matter.Engine;
const Render = Matter.Render;
const Runner = Matter.Runner;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Bounds = Matter.Bounds;
const Common = Matter.Common;
const Composite = Matter.Composite;
const Composites = Matter.Composites;
const Constraint = Matter.Constraint;
const Events = Matter.Events;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

window.onload = () => {
  // この部分に具体的な記述をしていきます

  // 2-1, Matter-Wrapを有効にする
  Matter.use("matter-wrap");// Matter-Wrap

  // 1, 物理エンジン本体のクラス
  const engine = Engine.create();

  // 2, 画面を描画するクラス
  const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: WIDTH, height: HEIGHT,
      showAngleIndicator: false,
      showCollisions: false,
      showDebug: false,
      showIds: false,
      showVelocity: false,
      hasBounds: false,
      background: 'rgba(0, 0, 0, 0)',
      wireframes: false// Important!!
    }
  });
  Render.run(render);

  // 3-1, Boxを用意
  Composite.add(engine.world, [
    Bodies.rectangle(WIDTH / 2, 100, 80, 100,
      {
        id: 1,
        render: {
          strokeStyle: "#ffffff",
          sprite: { texture: "img/Dolls/Doll1.png", xScale: 0.25, yScale: 0.25 }
        },
        plugin: {
          wrap: {
            min: { x: render.bounds.min.x, y: render.bounds.min.y },
            max: { x: render.bounds.max.x, y: render.bounds.max.y }
          }
        }
      }
    ),
    Bodies.rectangle(WIDTH / 2, 100, 80, 100,
      {
        id: 2,
        render: {
          strokeStyle: "#ffffff",
          sprite: { texture: "img/Dolls/Doll1.png", xScale: 0.25, yScale: 0.25 }
        },
        plugin: {
          wrap: {
            min: { x: render.bounds.min.x + 50, y: render.bounds.min.y },
            max: { x: render.bounds.max.x - 100, y: render.bounds.max.y }
          }
        }
      }
    ),
    Bodies.rectangle(WIDTH / 2, 100, 80, 100,
      {
        id: 3,
        render: {
          strokeStyle: "#ffffff",
          sprite: { texture: "img/Dolls/Doll1.png", xScale: 0.25, yScale: 0.25 }
        },
        plugin: {
          wrap: {
            min: { x: render.bounds.min.x + 50, y: render.bounds.min.y },
            max: { x: render.bounds.max.x - 100, y: render.bounds.max.y }
          }
        }
      }
    )
  ]);
  // 3-2, 地面を用意
  Composite.add(engine.world, [
    Bodies.rectangle(WIDTH / 2, HEIGHT + 50, WIDTH * 10, 100, { isStatic: true }),
  ]);

  // 2, マウスの設定
  const mouse = Mouse.create(render.canvas);
  render.mouse = mouse;
  const mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: { visible: false }
    }
  });
  Composite.add(engine.world, mouseConstraint);


  // mousemoveイベントを設定してマウスの座標、ドラッグ対象を表示する【④】
  let Prelabel = 0;
  Events.on(mouseConstraint, 'mousedown', e => {
    const label = mouseConstraint.body ? mouseConstraint.body.id : '';
    if (label) {
      console.log(label)
      console.log(Prelabel)
      $("#"+Prelabel).hide();
      Prelabel = label;
      $("#"+label).show();
    }
  })

  // 4, 物理世界を更新します
  const runner = Runner.create();
  Runner.run(runner, engine);

}
$(window).on('load', function () {
  $(".area").not("#0").hide();
});