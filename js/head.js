var vm = avalon.define({
    $id:"show",
    showmap:true,
    showstat:false,
    showuser:false,
    showgrid:false,
    showset:false,
    showhouse:false,
    showpeople:false,
    showclick:function(name){
        vm[name]= !vm[name];

    }

});
avalon.effect("toggle", {
    enter: function(elem,done) {
        $(elem).slideDown(500, done)
    },
    leave: function(elem, done) {
        $(elem).slideUp(500, done)
    }

})

$(document).ready(function(){
    $('.secondlist li').click(function(e){
        var target = $(e.target);
        if(target[0].tagName == 'A'){
            target = target.parent();
        }
        $('.clicked').removeClass('clicked');
        target.addClass('clicked');
    });

    $('#content').width($(document).width() - 160);
    $('#content').height($(document).height() -60);

});