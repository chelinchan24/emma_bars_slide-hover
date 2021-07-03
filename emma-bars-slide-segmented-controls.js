$(window).on('load', function () {
    emma_bars_slideSegmentedControls('容器', '選項', '標題', '滑塊', '啟用')
})

function emma_bars_slideSegmentedControls(containerClass, itemClass, itemTextClass, slideClass, activeClass) {
    var container = $('.' + containerClass)
    var item = $('.' + itemClass)
    var slide = container.children('.' + slideClass)

    goDefault()

    $(document).on('click', '.' + itemClass, function () {
        item.removeClass(activeClass)
        $(this).addClass(activeClass)
    })

    item.hover(
        function (){
            var target = $(this).children('.' + itemTextClass)
            setSlide(target)
        } , function() {
            goDefault()
        }
    )

    function goDefault() {
        var target = container.children('.' + activeClass).children('.' + itemTextClass)
        setSlide(target)
    }

    function setSlide(target) {
        slide.css({
            'height' : target.height(),
            'width' : target.width(),
            'left' : target.position().left + 'px',
            'top' : target.position().top + 'px',
        })
    }
}


