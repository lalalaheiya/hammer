
$(".yil a").hover(function(){
	$(this).css("color","pink");
} , function(){
    $(this).css("color","");
})




$(".erl a").hover(function(){
	$(this).css("color","black");
} , function(){
    $(this).css("color","");
})







$(".erl ul li:nth-child(1)").hover(function(){
	$(".li").css("display","block");
    $(".li").stop().animate( {height:280} , 500 )			   		   
} , function(){  
   $(".li").stop().animate({height:0},500)
   $(".li").css("display","none");
})




$(".erl ul li:nth-child(2)").hover(function(){
	$(".lie").css("display","block");
    $(".lie").stop().animate( {height:280} , 500 )			   		   
} , function(){  
   $(".lie").stop().animate({height:0},500)
   $(".lie").css("display","none");
})


$(".erl ul li:nth-child(3)").hover(function(){
	$(".lis").css("display","block");
    $(".lis").stop().animate( {height:280} , 500 )			   		   
} , function(){  
   $(".lis").stop().animate({height:0},500)
   $(".lis").css("display","none");
})


$(".erl ul li:nth-child(4)").hover(function(){
	$(".lisi").css("display","block");
    $(".lisi").stop().animate( {height:280} , 500 )			   		   
} , function(){  
   $(".lisi").stop().animate({height:0},500)
   $(".lisi").css("display","none");
})

$(".erl ul li:nth-child(5)").hover(function(){
	$(".liw").css("display","block");
    $(".liw").stop().animate( {height:280} , 500 )			   		   
} , function(){  
   $(".liw").stop().animate({height:0},500)
   $(".liw").css("display","none");
})




/*$(".erl ul li:nth-child(1)").hover(function(){
	$(".li").css("display","block");

} , function(){
   $(".li").css("display","none");
})*/

/*$(".erl ul li:nth-child(2)").hover(function(){
	$(".lie").css("display","block");
} , function(){
   $(".lie").css("display","none");
})*/

/*$("erl ul li:nth-child(1)").hover(function(){
	$(".li").css("display","block");
} ,function(){
    $(".li").css("display","none");
 
})*/




var timer = null;
 	var $ulist = $(".sanl ul li");
 	var $olist = $(".sanl ol li");
 	var index = 0;
 	timer = setInterval( autoPlay,3000);
 	function autoPlay(){
 		index++;
 		if( index == $olist.size() ){//size() »ñÈ¡jqÖÐÔªËØµÄ¸öÊý
 			index = 0;
 		}
 		$ulist.eq(index).fadeIn(1500).siblings().fadeOut(1500);
 		$olist.eq(index).addClass("current").siblings().removeClass("current");
 	}


 /*$(".six ul:eq(0)").hover(function(){
 	$(".six ul:eq(0) li:nth-child(5)").css("display","none");
	$(".six ul:eq(0) button").css("display","block");
} , function(){
	$(".six ul:eq(0) button").css("display","none");
	$(".six ul:eq(0) li:nth-child(5)").css("display","block");  
})*/


$(".six ul").hover(function(){
      $(this).find(".wu").css("display","none");
      $(this).find("button").css("display","block");
},function(){
     $(this).find("button").css("display","none");
     $(this).find(".wu").css("display","block")
})





$(".six ul li p").hover(function(){
	$(this).css("border","2px solid yellow")
	//$(".six ul li").find(".c").css("display","none")
	
},function(){
    //$(".six ul li").find(".b").css("display","block")
	$(this).css("border","1px solid #bfbfbf")
	
})







$(".six ul:nth-child(1) li p:nth-child(1)").hover(function(){
	$(".six ul li a").css("display","none")
	
},function(){
    $(".six ul li a").css("display","block")
     $(".six ul li .tu13").css("display","none")	
})

$(".six ul:nth-child(1) li p:nth-child(2)").hover(function(){
	//$(".six ul li .c").css("display","none")
	 $(".six ul li a").css("display","none")
},function(){
    $(".six ul li .tu13").css("display","block")

	
})




//////////////////////////////
$(".six ul:nth-child(2) li p:nth-child(1)").hover(function(){
	$(".six ul li .d").css("display","none")
	
},function(){
	$(".six ul li .d").css("display","block")
    $(".six ul li .tu14").css("display","none")	
})
$(".six ul:nth-child(2) li p:nth-child(2)").hover(function(){
	//$(".six ul li .c").css("display","none")
	 $(".six ul li .d").css("display","none")
},function(){
    $(".six ul li .tu14").css("display","block")

	
})


/////////////



$(".six ul:nth-child(3) li p:nth-child(1)").hover(function(){
	$(".six ul li .e").css("display","none")
	
},function(){
	$(".six ul li .e").css("display","block")
    $(".six ul li .tu15").css("display","none")	
})
$(".six ul:nth-child(3) li p:nth-child(2)").hover(function(){
	//$(".six ul li .c").css("display","none")
	 $(".six ul li .e").css("display","none")
},function(){
    $(".six ul li .tu15").css("display","block")

	
})



/*$(".six ul:nth-child(4) li p").hover(function(){
	$(".six ul li .f").css("display","none")
	
},function(){
    $(".six ul li .i").css("display","block")

	
})*/

$(".wux ul").hover(function(){
      $(this).find(".wu").css("display","none");
      $(this).find("button").css("display","block");
},function(){
     $(this).find("button").css("display","none");
     $(this).find(".wu").css("display","block")
})



///////
$(".liux ul").hover(function(){
      $(this).find(".wu").css("display","none");
      $(this).find("button").css("display","block");
},function(){
     $(this).find("button").css("display","none");
     $(this).find(".wu").css("display","block")
})


$(".liux ul li p").hover(function(){
	$(this).css("border","2px solid yellow")
	//$(".six ul li").find(".c").css("display","none")
	
},function(){
    //$(".six ul li").find(".b").css("display","block")
	$(this).css("border","1px solid #bfbfbf")
	
})







$(".liux ul:nth-child(1) li p:nth-child(1)").hover(function(){
	$(".six ul li .c").css("display","none")
	
},function(){
    $(".liux ul li .c").css("display","block")
     $(".liux ul li .tu13").css("display","none")	
})

$(".liux ul:nth-child(1) li p:nth-child(2)").hover(function(){
	//$(".six ul li .c").css("display","none")
	 $(".liux ul li .c").css("display","none")
},function(){
    $(".liux ul li .tu13").css("display","block")

	
})


$(".liux ul:nth-child(2) li p:nth-child(1)").hover(function(){
	$(".liux ul li .d").css("display","none")
	
},function(){
	$(".liux ul li .d").css("display","block")
    $(".liux ul li .tu14").css("display","none")	
})
$(".liux ul:nth-child(2) li p:nth-child(2)").hover(function(){
	//$(".six ul li .c").css("display","none")
	 $(".liux ul li .d").css("display","none")
},function(){
    $(".liux ul li .tu14").css("display","block")

	
})





$(".liux ul:nth-child(3) li p:nth-child(1)").hover(function(){
	$(".six ul li .e").css("display","none")
	
},function(){
	$(".liux ul li .e").css("display","block")
    $(".liux ul li .tu15").css("display","none")	
})
$(".liux ul:nth-child(3) li p:nth-child(2)").hover(function(){
	//$(".six ul li .c").css("display","none")
	 $(".liux ul li .e").css("display","none")
},function(){
    $(".liux ul li .tu15").css("display","block")

	
})



/////////////////////////////////////////////////////////////////////////////////


$(".qix ul").hover(function(){
      $(this).find(".wu").css("display","none");
      $(this).find("button").css("display","block");
},function(){
     $(this).find("button").css("display","none");
     $(this).find(".wu").css("display","block")
})
///////
$(".bax ul").hover(function(){
      $(this).find(".wu").css("display","none");
      $(this).find("button").css("display","block");
},function(){
     $(this).find("button").css("display","none");
     $(this).find(".wu").css("display","block")
})


$(".bax ul li p").hover(function(){
	$(this).css("border","2px solid yellow")
	//$(".six ul li").find(".c").css("display","none")
	
},function(){
    //$(".six ul li").find(".b").css("display","block")
	$(this).css("border","1px solid #bfbfbf")
	
})







$(".bax ul:nth-child(1) li p:nth-child(1)").hover(function(){
	$(".six ul li .c").css("display","none")
	
},function(){
    $(".bax ul li .c").css("display","block")
     $(".bax ul li .tu13").css("display","none")	
})

$(".bax ul:nth-child(1) li p:nth-child(2)").hover(function(){
	//$(".six ul li .c").css("display","none")
	 $(".bax ul li .c").css("display","none")
},function(){
    $(".bax ul li .tu13").css("display","block")

	
})




$(".bax ul:nth-child(2) li p:nth-child(1)").hover(function(){
	$(".bax ul li .d").css("display","none")
	
},function(){
	$(".bax ul li .d").css("display","block")
    $(".bax ul li .tu14").css("display","none")	
})
$(".bax ul:nth-child(2) li p:nth-child(2)").hover(function(){
	//$(".six ul li .c").css("display","none")
	 $(".bax ul li .d").css("display","none")
},function(){
    $(".bax ul li .tu14").css("display","block")

	
})




$(".bax ul:nth-child(3) li p:nth-child(1)").hover(function(){
	$(".six ul li .e").css("display","none")
	
},function(){
	$(".bax ul li .e").css("display","block")
    $(".bax ul li .tu15").css("display","none")	
})
$(".bax ul:nth-child(3) li p:nth-child(2)").hover(function(){
	//$(".six ul li .c").css("display","none")
	 $(".bax ul li .e").css("display","none")
},function(){
    $(".bax ul li .tu15").css("display","block")
})
/////////////////////////////////////////////////////



$(".jiux ul").hover(function(){
      $(this).find(".wu").css("display","none");
      $(this).find("button").css("display","block");
},function(){
     $(this).find("button").css("display","none");
     $(this).find(".wu").css("display","block")
})
///////
$(".shix ul").hover(function(){
      $(this).find(".wu").css("display","none");
      $(this).find("button").css("display","block");
},function(){
     $(this).find("button").css("display","none");
     $(this).find(".wu").css("display","block")
})


$(".shix ul li p").hover(function(){
	$(this).css("border","2px solid yellow")
	//$(".six ul li").find(".c").css("display","none")
	
},function(){
    //$(".six ul li").find(".b").css("display","block")
	$(this).css("border","1px solid #bfbfbf")
	
})







$(".shix ul:nth-child(1) li p:nth-child(1)").hover(function(){
	$(".six ul li .c").css("display","none")
	
},function(){
    $(".shix ul li .c").css("display","block")
     $(".shix ul li .tu13").css("display","none")	
})

$(".shix ul:nth-child(1) li p:nth-child(2)").hover(function(){
	//$(".six ul li .c").css("display","none")
	 $(".shix ul li .c").css("display","none")
},function(){
    $(".shix ul li .tu13").css("display","block")

	
})




$(".shix ul:nth-child(2) li p:nth-child(1)").hover(function(){
	$(".shix ul li .d").css("display","none")
	
},function(){
	$(".shix ul li .d").css("display","block")
    $(".shix ul li .tu14").css("display","none")	
})
$(".shix ul:nth-child(2) li p:nth-child(2)").hover(function(){
	//$(".six ul li .c").css("display","none")
	 $(".shix ul li .d").css("display","none")
},function(){
    $(".shix ul li .tu14").css("display","block")

	
})




$(".shix ul:nth-child(3) li p:nth-child(1)").hover(function(){
	$(".six ul li .e").css("display","none")
	
},function(){
	$(".shix ul li .e").css("display","block")
    $(".shix ul li .tu15").css("display","none")	
})
$(".shix ul:nth-child(3) li p:nth-child(2)").hover(function(){
	//$(".six ul li .c").css("display","none")
	 $(".shix ul li .e").css("display","none")
},function(){
    $(".shix ul li .tu15").css("display","block")
})




$(".shiex ul").hover(function(){
	$(this).find("li,p,em").css("display","none");
	$(this).find("ol").css("display","block");
} , function(){
    $(this).find("li,p,em").css("display","block");
    $(this).find("ol").css("display","none");
})








