    //存储注册时的cookie
    var inputs=document.getElementsByTagName("input");
    var flagName = null
    inputs[0].onblur=function(){
    var str=this.value;
    if( str=="" ){
        span1.innerHTML=""
        flagName = false
    }else {
         var reg=/\d{4,50}/;
        if( reg.test(this.value) ){
            var reg=/^1[35487]\d{9}$/;
            //var span=this.nextSibling;
            if(reg.test(this.value)){
                span1.innerHTML="";
                flagName = true
            }else{
                span1.innerHTML="background"
                span1.innerHTML="账号暂时只开放手机号码注册";
                span1.className="error";
                flagName = false
            }
        }else{
            span1.innerHTML="手机号格式错误";
            span1.className="error";
            flagName = false
        }
        
    }
}



inputs[3].onfocus=function(){
    var str=this.value;
    span2.innerHTML="密码长度6-16位,数字,字母和符号至少包含两种";
    span2.className="success";
}
var flagpwd = null
inputs[3].onblur=function(){
    var str=this.value;
    if( str=="" ){
        span2.innerHTML="";
        flagpwd = false
    }else{
        var reg=/^[A-Za-z0-9]{5,19}$/
        if( reg.test(this.value) ){
            span2.innerHTML="";
            flagpwd = true
        }else{
            span2.innerHTML="密码格式错误";
            span2.className="error";
            flagpwd = false
        }
        
    }
}


inputs[4].onfocus=function(){
    var str=this.value;
    span3.innerHTML="请再次输入密码";
    span3.className="success";
}

inputs[4].onblur=function(){
    var input1=document.getElementsByClassName("psd")[0];
    var input2=document.getElementsByClassName("cpsd")[0];
    if( input1.value==input2.value ){
        span3.innerHTML="";
    }else{
        span3.innerHTML="两次输入密码不一致";
        span3.className="error";
    }
}




$(".zc").click(()=>{
   if( flagName && flagpwd ){
      document.cookie = "uname =  " + inputs[0].value; 
      document.cookie = "upwd = " + inputs[3].value; 
      alert("注册成功")
      location = './index3.html'
   }else{
      alert("注册失败");
   }
})
   
