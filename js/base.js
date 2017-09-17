$(document).ready(function(){
    var chapter_index = 0;
    var MAX_CHAPTERS = 4;
    var story = {
        board: null,
        title: null,
        artwork: null,
        detail: null
    };
    var DATA = {
        "chapters": [
            {
                "title": "Intro",
                "artwork": "media/img/de1.png",
                "detail": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas bibendum, justo in congue vestibulum, mauris lacus elementum mauris, venenatis semper enim augue quis tortor. Quisque eu metus ac tortor vehicula blandit. Donec mattis a justo a venenatis. Sed purus lacus, hendrerit et tortor a, viverra tristique elit. Curabitur blandit vehicula enim vel bibendum. Nullam dapibus nisi sit amet leo ultrices placerat. Curabitur blandit, ante condimentum iaculis tristique, nisi nulla semper nisl, aliquet pharetra orci dui ac lorem. Nam aliquam tortor elit, non ultricies quam sollicitudin in."
            },
            {
                "title": "Bubbles surfing the wind",
                "artwork": "media/img/de2.png",
                "detail": "Morbi rhoncus nisl ut nibh placerat sodales. Donec tincidunt euismod purus, sed interdum nisi. Duis ut orci at magna auctor maximus. Sed vitae metus dapibus metus varius vestibulum eu quis tellus. In hac habitasse platea dictumst. Suspendisse eu ipsum vitae lacus laoreet tristique sit amet ac orci. Suspendisse a auctor magna. Ut tortor enim, interdum id interdum ac, tempor sed nulla. Fusce eget venenatis mi, sit amet eleifend nunc. Etiam sit amet pretium dui. Praesent vel sapien dolor. Aenean lobortis tortor a pretium cursus. Duis quis purus facilisis, tristique nunc eget, commodo massa."
            },
            {
                "title": "Somewhere in the dust",
                "artwork": "media/img/ttt-1.png",
                "detail": "Sed ac ultrices ex, non tincidunt erat. Ut maximus at metus eget consequat. Phasellus dictum dictum lacinia. Integer in erat ac velit iaculis tristique in sit amet arcu. Aliquam efficitur molestie eros vitae luctus. Maecenas nec auctor diam. Nam egestas mauris nec condimentum efficitur. Vestibulum vitae pulvinar turpis. Morbi felis sapien, condimentum vel mollis vel, sagittis id elit. Maecenas pharetra risus nulla, vitae tempor massa aliquam sed. Duis nec sem eget turpis maximus aliquet in eu purus. Pellentesque convallis viverra libero ac tempus. Aenean quis laoreet velit, in scelerisque urna."
            },
            {
                "title": "To future hope",
                "artwork": "media/img/ttt-2.png",
                "detail": "Donec posuere erat eget eros porttitor, nec ullamcorper mauris interdum. Ut a enim interdum, lacinia dolor quis, commodo nulla. In hac habitasse platea dictumst. Aliquam erat volutpat. Fusce a eros malesuada, tincidunt diam quis, suscipit felis. Nulla et placerat neque. Morbi vel nisl nulla. In venenatis urna sed venenatis venenatis. Maecenas sed elit nec erat posuere dapibus. Mauris ac purus auctor elit ullamcorper pulvinar. Nulla facilisi. Mauris in neque eu lectus semper venenatis. Etiam dapibus consectetur venenatis. Aliquam erat volutpat. In id nunc interdum, faucibus enim ac, gravida leo. Vivamus ac velit luctus, sodales sapien vitae, molestie tortor."
            }
        ]
    };
    var chapters = null;

    function init(){
        // Instantiate
        //chapters = $(".chapter");// gets chapter classed divs
        /*$.getJSON('/base.json', function(data){
            chapters = data.chapters;
            console.log(chapters);
            story.board = $(".board");
            story.title = $(".board .title");
            story.artwork = $(".board .artwork");
            story.detail = $(".board .detail");
            // Update theme
            story.board.addClass("theme-" + (chapter_index + 1));
            story.title.text(chapters[chapter_index].title);
            story.artwork.html('<img src="'+ chapters[chapter_index].artwork +'"/>');
            story.detail.text(chapters[chapter_index].detail);
        });
        */
        chapters = DATA.chapters;
        story.board = $(".board");
        story.title = $(".board .title");
        story.artwork = $(".board .artwork");
        story.detail = $(".board .detail");
        // Update theme
        story.board.addClass("theme-" + (chapter_index + 1));
        story.title.text(chapters[chapter_index].title);
        story.artwork.html('<img src="'+ chapters[chapter_index].artwork +'"/>');
        story.detail.text(chapters[chapter_index].detail);
    }

    function changeChapter(i){
        chapter_index += i;
        if(chapter_index == MAX_CHAPTERS){
            // chapter_index = chapter_index % MAX_CHAPTERS
            chapter_index = MAX_CHAPTERS - 1;
        } else if (chapter_index < 0){
            chapter_index = 0;
        }
    }

    /* Add event listeners */
    $(document).on("DOMMouseScroll mousewheel", function (event) {
        story.board.removeClass("theme-" + (chapter_index + 1));
        if(event.originalEvent.wheelDelta <= -120 ) { // down scroll
            changeChapter(-1);
        } else if(event.originalEvent.wheelDelta >= 120 ) { // up scroll
            changeChapter(1);
        } else if(event.originalEvent.wheelDelta <= -50 ) {
            changeChapter(-1);
        } else if(event.originalEvent.wheelDelta >= 50 ) {
            changeChapter(1);
        }
        // Update theme
        story.board.addClass("theme-" + (chapter_index + 1));
        story.title.text(chapters[chapter_index].title);
        story.artwork.html('<img src="'+ chapters[chapter_index].artwork +'"/>');
        story.detail.text(chapters[chapter_index].detail);
    });

    $(".chapter").click(function(){
        story.board.removeClass("theme-" + (chapter_index + 1));
        chapter_index = Number.parseInt($(this).attr("data-index"), 10);
        // Update theme
        story.board.addClass("theme-" + (chapter_index + 1));
        story.title.text(chapters[chapter_index].title);
        story.artwork.html('<img src="'+ chapters[chapter_index].artwork +'"/>');
        story.detail.text(chapters[chapter_index].detail);
    });

    /* Main */
    init();

});
