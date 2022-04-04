<script type="text/javascript">
    window.onload = function() {
        var my_audio = new Audio("file:///C:/Users/tapni/Downloads/windows_8_usb_sound.mp3");
            //ボタンにクリックイベントを設定
            document.getElementById("btn20200502").onclick = function() {
                my_audio.currentTime = 0;  //再生開始位置を先頭に戻す
                my_audio.play();  //サウンドを再生
            }
    }
</script>
