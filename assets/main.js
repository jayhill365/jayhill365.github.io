var myVideo = document.getElementById("video1");

function playPause() {
    if (myVideo.paused) {
        myVideo.play();
        $('.fa-play').hide()
        $('.fa-pause').show()
    }
    else {
        $('.fa-play').show()
        $('.fa-pause').hide()
        myVideo.pause();
    }
}
// var newsVideo = document.getElementById("newsVideo");
// function Pause(){
//     alert('am clicked');
//     newsVideo.pause();
// }
$('#video').on('hidden.bs.modal', function () {
    var newsVideo = document.getElementById("newsVideo");
    newsVideo.pause();
    // window.alert('hidden event fired!');
});
$('.wh-sub-section').hide();

$('.whoButton').on('click', function () {
    $('.wh-section').hide()
    $('.wh-sub-section').hide();
    $('.who-section').show();
})


$('.whatButton').on('click', function () {
    $('.wh-section').hide()
    $('.wh-sub-section').hide();
    $('.what-section').show()

});
$('.howButton').on('click', function () {
    $('.wh-section').hide()
    $('.wh-sub-section').hide();
    $('.how-section').show()
})
$('.whyButton').on('click', function () {
    $('.wh-section').hide()
    $('.wh-sub-section').hide();
    $('.why-section').show()
})
$('.backtoWh').on('click', function () {
    $('.wh-sub-section').hide();
    $('.wh-section').show()
});

$('#header-menu ul li').on('click', function () {
    $('#header-menu > ul  li').removeClass('active');
    $(this).addClass('active');

});


$(document).ready(function () {
    var page = $('#page').val();
    $('#header-menu ul li').each(function () {
        // $('#header-menu > ul  li').removeClass('active');
        // $(this).addClass('active');
        if ($(this).text() == page){
            $(this).addClass('active');
        }

    });
})



