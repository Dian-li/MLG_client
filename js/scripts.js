/**
 * Created by Dian on 2017/8/11.
 */
function uploadScript(){
    $.ajax({
        type: 'POST',
        url: "http://localhost:8080/scriptsMana/uploadTestScripts",
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