$(document).ready(function(){
    var chapter_index = 0;
    var MAX_CHAPTERS = 4;
    var story = {
        board: null,
        title: null,
        artwork: null,
        detail: null
    };
    var chapters = null;

    function init(){
        // Instantiate
        //chapters = $(".chapter");// gets chapter classed divs
        $.getJSON('/base.json', function(data){
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
    }

    function changeChapter(i){
        chapter_index += i;
        if(chapter_index >= MAX_CHAPTERS){
            // chapter_index = chapter_index % MAX_CHAPTERS
            chapter_index %= MAX_CHAPTERS;
        } else if (chapter_index < 0){
            chapter_index = 0;
        }
    }

    /* Add event listeners */
    $(document).on("DOMMouseScroll mousewheel", function (event) {
        story.board.removeClass("theme-" + (chapter_index + 1));
        if( event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 ) { // down scroll
            changeChapter(-1);
        } else { // up scroll
            changeChapter(1);
        }
        // Update theme
        story.board.addClass("theme-" + (chapter_index + 1));
        story.title.text(chapters[chapter_index].title);
        story.artwork.html('<img src="'+ chapters[chapter_index].artwork +'"/>');
        story.detail.text(chapters[chapter_index].detail);
    });

    /* Main */
    init();

});
