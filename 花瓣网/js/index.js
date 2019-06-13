window.onload=function(){
        
    var imgs =[".//images/b46e1c6a035c3ea9ff1dd93ee8e2803464def8bdb3a4c.jpg",".//images/search_img.jpg"];    
    var i = 0;
    var head=document.getElementById("jumu");
    head.style.background="url(.//images/b46e1c6a035c3ea9ff1dd93ee8e2803464def8bdb3a4c.jpg)"; 
            function time(){
                i++;   
                i=i%2;      
                head.style.background="url("+imgs[i]+")";
                
            }
            setInterval(time,3000);
    
}
window.onscroll = function(){

    var aaa = document.documentElement.scrollTop;    
    if(aaa > 400){
        
        document.getElementById("nav").className="nav1";
    }
    else{
        document.getElementById("nav").className="";
    }
}