$(document).ready(function () {

    $(".animation").each(function () {
        console.log(this)
        var waypoint = new Waypoint({
            element: this,
            handler: function (direction) {
                var elt=this.element;
                var anim = $(elt).attr("data-animation");
                $(elt).css('opacity','1');
                $(elt).addClass("animated "+anim);
            },
            offset:'83%'
        });
    });

    $('#browse').on('click',function(){
        $('#file').click();
    });

    $('#detail-file').on('click',function(){
        $('#file').click();
    });
  
});