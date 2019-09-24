$(function () {

    $("a[href='#tarif']").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html,body').animate({scrollTop: destination}, 1100);
        return false;
    });


    $('.video-link').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: function (url) {
                        var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                        if (!m || !m[1]) return null;
                        return m[1];
                    },
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                }
            }
        }
    });

    $("a[href='#paymentblock']").click(function () {
        $("#paymentblock").fadeIn();
        var parent = $(this).parents('.tarif__item ');
        var price = parseInt( parent.find('.tarif__price .discount').text().replace(/\./g,'') );
        var old_price = parseInt( parent.find('.tarif__price .old_price u').text().replace(/\./g,'') );
        var courseName = parent.find('h3').text();
        var formTitle = $('#paymentblock .modaltext h3');
        var formOldPrice = $('#paymentblock .modaltext .formPrice .old_price strike');
        var formPrice = $('#paymentblock .modaltext .formPrice .price');
        var form = $('#paymentform');
        formTitle.text('Курс: '+courseName);
        $('#sum').attr('value', price).attr('readonly','readonly');
        formOldPrice.text(''+old_price+'');
        formPrice.text(' '+price+' Р');
        $("#phoneNum").mask("+7 (999) 999-99-99");

    });

    $('#paymentblock .closeblock').click(function(){
        $("#paymentblock").fadeOut();
    });
    $('.show-all').click(function (e) {
        e.preventDefault();

        $(this).hide();
        $('.all-rew').slideDown(100);

    });

    var today = new Date();
    var year = "2018",
        month = today.getMonth() + 1,
        day = today.getDate() + 2,
        date;

    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }

    date = year + '/' + month + '/' + day;
    $('.countdown').each(function () {
        $(this).countdown(date).on('update.countdown', function (event) {
            var $this = $(this).html(event.strftime(''
                + '<div class="countdown__item"><strong>%-d</strong> <span>день</span></div> '
                + '<div class="countdown__item"><strong>%H</strong> <span>часов</span></div>  '
                + '<div class="countdown__item"><strong>%M</strong> <span>минут</span></div>  '
                + '<div class="countdown__item"><strong>%S</strong> <span>секунд</span></div> '));
        });
    });





    $(window).on('scroll',function(e){
        var offset1 = $('.tarif').offset();
        var offset2 = $('.garant-result').offset();

        if (($(window).scrollTop() > offset1.top + ($(window).height()/2)) && ($(window).scrollTop() < offset2.top)) {
            $(".exitblock").fadeIn();
        }
    });
    $(document).click(function(e) {
        if (($(".exitblock").is(':visible')) && (!$(e.target).closest(".exitblock .modaltext").length)) {
            $(".exitblock").remove();
        }
    });

});