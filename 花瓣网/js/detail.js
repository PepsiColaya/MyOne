var num = 0;//标识是第几条记录
//获取ul对象
var ul1 = document.getElementById("ul1");

//给标签绑定事件
//1、获取标签
var btnp = document.getElementById("pinglun");
//2、绑定事件
pinglun.onclick = function(){
    //功能：添加文本域中的内容到ul标签中
    //alert("haha");
    //1、拿到文本域对象
    var text = document.getElementById("txt");
    //2、判断文本域对象的内容是否为空，为空进行提示，不为空进行添加
    //获取文本域txtarea标签中的内容使用：textarea.value
    if(txt.value==""){
        alert("开玩笑，不添加内容也能发表吗？");
    }else{
        //alert("添加成功");
        //1、获取文本域的内容txt.value
        //2、创建li标签对象
        var li = document.createElement("li");
        num++;//个数加1
        //3、将获取的内容添加到li标签中
        li.innerHTML = num+"--"+txt.value + "<a href='#'>删除</a>"
        //为a标签绑定单击事件
        //获取a标签对象
        var a = li.getElementsByTagName("a")[0];
        a.onclick = function(){
            //点击的时候删除当前a所在的li标签
            //this表示当前事件所作用的标签对象 this==a对象
            var pli = this.parentNode;//a标签的父类li标签
            //父类节点.removeChild(子类节点)
            ul1.removeChild(pli);
        }
        //5、在之前添加
        //获取ul
        var first = ul1.firstChild;
        ul1.insertBefore(li,first);
        text.value = "";
    }
}