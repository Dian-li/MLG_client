function login(){
    $.ajax({
        type: 'POST',
        url: "http://localhost:8080/MLG/userMana/userLogin",
        dataType:"json",
        data:{L_NAME:$("#l_name").val(),PASSWORD:$("#password").val()},
        cache : false,
        async: true,
        error:function(){alert('登录失败')},
        success: function(obj){
            if(obj.errCode==0){
                $.cookie("username",$("#l_name").val(),{ expires: 1, path: '/' });
                var username = $.cookie("username");

                $.cookie("password",$("#password").val(),{ expires: 1, path: '/' });
                var password = $.cookie("password");
                //alert(username+password);
                location.href="../index.html";
            }else{
                alert(obj.errText.toString());
            }
        }
    });
}