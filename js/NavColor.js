$(".openbtn").click(function () {//ボタンがクリックされたら
    $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav input").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

/* nameがcolorのラジオボタンが変更された場合の処理 */
var save = "black";
$('input[name="color"]:radio').change(function () {
    /* 削除 */
    $(".changeble").removeClass("BG" + save);
    /* nameがcolorのラジオボタンで選択されている値を取得 */
    var selectdata = $("input[name='color']:checked").val();

    /* 追加 */
    $(".changeble").toggleClass("BG" + selectdata);
    save = selectdata;

    if(selectdata=="black"){
        $(".changeble2").toggleClass("black");
    }else{
        $(".changeble2").removeClass("black");
    }
});