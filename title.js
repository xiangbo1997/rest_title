


// function myTitle(doc,option){
//     $(doc)


// }

$(function(window){
  
/**
 * 
 * @param {要给添加title元素} doc 
 * @param {设置样式的的配置对象} option 
 * @param {设置显示出来的title的位置} deviation 
 */
function myTitle (doc,option,deviation) {
      
  
    var {x,y} = deviation
    var newtitle = '';
    
    $(doc).mouseover(function (e) {
       
        newtitle = $(e.target).attr("myTitle");
        
if(newtitle){
   
    $(doc).append('<div id="mytitle" >' + newtitle + '</div>');
    $('#mytitle').css({
        'fontSize': 10,
        'position':'absolute',
        'left': (e.offsetX  + x + 'px'),
        'top': (e.offsetY+ y +'px')
    }).css(option).show();
}
           
        
     
    }).mouseout(function () {
       
        $('#mytitle').remove();
    })
    
 
   
}

window.myTitle = myTitle
  
} (window))




    