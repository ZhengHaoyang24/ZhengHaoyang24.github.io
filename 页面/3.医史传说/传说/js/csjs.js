
// 登录选项卡
$(function () {
    var $join_style_div = $(' .next_control_div div');
    // alert($join_style_div)
    $join_style_div.each(function (index) {
        $(this).on('click', function () {
            $(this).addClass('active')
                .siblings().removeClass('active');
            $(' .chaunshuo_text_div').eq(index).css({'display': 'block'})
                .siblings().css({'display': 'none'})
        })
    })

});