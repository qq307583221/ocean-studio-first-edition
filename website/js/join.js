$('.job1>.job1-text').css('display','none')
var abc=false;
$('.job1>a').click(function(e)
{
    //阻止a标签默认状态
    e.preventDefault();
    if(abc){
        $('a+.job1-text').css('display','none');
        abc=false;
    }
    else{
        $('a+.job1-text').css('display','block');
        abc=true;
    }
})

$('.job2>.job2-text').css('display','none')
var abc=false;
$('.job2>a').click(function(e)
{
    //阻止a标签默认状态
    e.preventDefault();
    if(abc){
        $('a+.job2-text').css('display','none');
        abc=false;
    }
    else{
        $('a+.job2-text').css('display','block');
        abc=true;
    }
})

$('.job3>.job3-text').css('display','none')
var abc=false;
$('.job3>a').click(function(e)
{
    //阻止a标签默认状态
    e.preventDefault();
    if(abc){
        $('a+.job3-text').css('display','none');
        abc=false;
    }
    else{
        $('a+.job3-text').css('display','block');
        abc=true;
    }
})