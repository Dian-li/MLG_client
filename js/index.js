/**
 * Created by Dian on 2017/8/7.
 */
function queryUser(){
    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/userMana/userGet',
        dataType:"json",
        /*contentType: "application/text",*/
        cache : false,
        async: true,
        error:function(){alert('系统连接失败，请稍后再试！')},
        success: function(obj){
            alert("haha"+obj.dept);
        }
    });
}
function openLogin(){
    $('#login').window('open');
}
function opensign(){
    $('#sign').window('open');
}
$(function(){
    $('#login').window({
        width:330,
        height:210,
        closed:true,
        collapsible:false,
        minimizable:false,
        maximizable:false,
        resizable:false
    })
    $('#sign').window({
        width:330,
        height:210,
        closed:true,
        collapsible:false,
        minimizable:false,
        maximizable:false,
        resizable:false
    })
    $("easyui-tree").click(function(e){
        $('#menu1').menu('show', {
            left: e.pageX,
            top: e.pageY
        });
    });
});



