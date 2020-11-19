let squareButton = false
    $(".box").click(function(){
        if(squareButton) {
            $(".box").css("background", "red")
        }else{
            $(".box").css("background", "green")
        }
        squareButton = !squareButton
    })