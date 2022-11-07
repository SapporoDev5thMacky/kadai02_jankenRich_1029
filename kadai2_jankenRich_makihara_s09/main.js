//  鳥の写真を選択したらメッセージが開く
 
 $(function() {
    $(".bird1").click(function() {
    $("#call").html('<p class="new">相手は「はとちん」<span id="pic"><img class="text_img" src="img/1.JPG">です！</span><br><span id="emphasis">スタートボタン</span>をクリック</p>')
    })
  })
  $(function() {
    $(".bird2").click(function() {
    $("#call").html('<p class="new">相手は「ハックン」<img class="text_img" src="img/2.JPG">です！<br><span id="emphasis">スタートボタン</span>をクリック</p>')
    })
  })
  $(function() {
    $(".bird3").click(function() {
    $("#call").html('<p class="new">相手は「カッサー」<img class="text_img" src="img/3.JPG">です！<br><span id="emphasis">スタートボタン</span>をクリック</p>')
    })
  })
  $(function() {
    $(".bird4").click(function() {
    $("#call").html('<p class="new">相手は「おいどん」<img class="text_img" src="img/4.jpg">です！<br><span id="emphasis">スタートボタン</span>をクリック</p>')
     })
  })


//スタートボタンがクリックされたときの処理
$(function() {
  $("#start").click(function() {
  $("#call2").html('<p id="opponent">鳥たちは何を出すか？<br>下の図をクリックしたら鳥も同時に出すよ</p>')
  $("#game").css("display", "block")
  })
})

// じゃんけんゲーム
let janken = ['グー', 'チョキ', 'パー']; 
let p_janken =  ['グー', 'チョキ', 'パー']; 
let who = Math.floor( Math.random() * 3);

function select_janken(p_janken_r) {

  let janken = ['グー', 'チョキ', 'パー']; 
  let p_janken =  ['グー', 'チョキ', 'パー']; 
  let janken_r = Math.floor( Math.random() * 3);

  //グー
      if (p_janken_r === 0 && p_janken_r - janken_r === 0) {
           $('#space').append('<p class="tsuika">あいこ</p>');
  
    } else if(p_janken_r === 0 && p_janken_r - janken_r === -1) {
         $('#space').append('<p class="tsuika">勝ち</p>');

    } else if(p_janken_r === 0 && p_janken_r - janken_r === -2) {
         $('#space').append('<p class="tsuika">負け</p>'); 
    } 

    //チョキ
   else if(p_janken_r === 1 && p_janken_r - janken_r === 1) {
          $('#space').append('<p class="tsuika">負け</p>'); 
        
    } else if(p_janken_r === 1 && p_janken_r - janken_r === 0) {
          $('#space').append('<p class="tsuika">あいこ</p>'); 
          
    } else if(p_janken_r === 1 && p_janken_r - janken_r === -1) {
          $('#space').append('<p class="tsuika">勝ち</p>'); 
      } 

    //パー処理
    else if(p_janken_r === 2 && p_janken_r - janken_r === 2) {
         $('#space').append('<p class="tsuika">勝ち</p>'); 
 
    } else if(p_janken_r === 2 && p_janken_r - janken_r === 1) {
        $('#space').append('<p class="tsuika">負け</p>'); 

    } else if(p_janken_r === 2 && p_janken_r - janken_r === 0) {
     $('#space').append('<p class="tsuika">あいこ</p>'); 
    }

    //とりちん（相手）
    $('#opponent').text("鳥さんは" + janken[janken_r]); 



    //spaceの画像の数をカウントして、countタグの部分に表示
    let countgames = $("#space").children().length;
    $('#count').text(countgames);


    //画像が10以上になったら表示させる
      if(countgames >9) {
        // $("#count").text("0")
        $('#btn0').hide () ;
        $('#btn1').hide () ;
        $('#btn2').hide () ;} 
        
        // $('#btn1').prop ("disabled", true) ;
        // $("#space").empty()
        // $("#space").text("終了")
       
      else {;        
      }
      // elseでは何もしない
    };

    $(function() {
      $("#reset").click(function() {
        $("#game").css("display", "none")
        $("#space").empty()
        $("#call").html('<p id="call">再び１つ写真をクリックしてからスタート</p>')
        $("#call2").hide()
        $("#count").text("0")
        $('#btn0').show () 
        $('#btn1').show () 
        $('#btn2').show () 
      })
    })
    
