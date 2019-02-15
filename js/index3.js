  function $(id){
      return document.querySelector(id)
   }

   var str = document.cookie;
    $("#btn").onclick = () =>{
        var sname = $("#phone").value
        var spwd = $("#psd").value
        var arr = str.split(";");
        var uname = arr[0].split("=")[1];
        var upwd = arr[1].split("=")[1];
        if(uname == sname && upwd == spwd){
            alert("登陆成功")
            location = './index.html' 
        }else{
            alert("用户名或密码错误")
        }
    }