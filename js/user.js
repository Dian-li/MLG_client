/**
 * Created by Dian on 2017/8/10.
 */
function addUser(){
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/userMana/addUser',
        dataType:"json",
        data:{l_name:$("#l_name").val(),password:$("#password").val()},
        cache : false,
        async: true,
        error:function(){alert('ϵͳ����ʧ�ܣ����Ժ����ԣ�')},
        success: function(obj){
            alert("haha"+obj);
        }
    });
}

function login(){
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/userMana/getUserNum',
        dataType:"json",
        data:{l_name:$("#l_name").val(),password:$("#password").val()},
        cache : false,
        async: true,
        error:function(){alert('ϵͳ����ʧ�ܣ����Ժ����ԣ�')},
        success: function(obj){
            if(obj.code==0){

            }
        }
    });
}