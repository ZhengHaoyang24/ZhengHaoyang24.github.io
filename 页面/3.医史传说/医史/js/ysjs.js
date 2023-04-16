
// 登录选项卡
$(function () {
    var $join_style_div = $(' .ys_control_div>div div');
    // alert($join_style_div)
    $join_style_div.each(function (index) {
        $(this).on('click', function () {
            $(this).addClass('ys_control_div_active')
                .siblings().removeClass('ys_control_div_active');
            $(' .ys_text_content').eq(index).css({'display': 'block'})
                .siblings().css({'display': 'none'})
        })
    })

});