var currIndex=0;


    $(document).ready(function () {
        var sections= $('a');
        var _offset= 0;
        var locked = false;
        function up() {
      //      sections[currIndex++ % sections.length].click();
            // alert(currIndex % sections.length);easeInOutExpo linear
            locked =true;
            if(_offset<1450) {
                _offset+=50;
                $('nav').animate({backgroundPosition: '-=65px'}, 1500, 'linear');
                $('.container-fluid').animate({backgroundPosition: '-=50px'}, 1500, 'linear');
            }
            locked=false;
        }

        function down() {
        //    if(curr!=0)
      //      sections[currIndex-- % sections.length].click();
            // alert(currIndex % sections.length);
            //console.log("down");
            locked =true;
            if(_offset>0){
                $('nav').animate({backgroundPosition:'+=65px'},1500,'linear');
                $('.container-fluid').animate({backgroundPosition:'+=50px'},1500,'linear');
                _offset-=50;
            }
            locked =false;
         //
        }

        $('body').on( 'DOMMouseScroll mousewheel', function ( event ) {
           // $.mPageScroll2id("scrollTo",'#test');
           console.log("up");    
            if( event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 ) { //alternative options for wheelData: wheelDeltaX & wheelDeltaY
              //  if(!locked)
                  //  down();
               //     $("#joey").animate({"margin":"3+=%1"});
                //console.log('Down');
            } else {
                if(!locked)
                  up();
                
                   $("#joey").animate({marginLeft:"+=10px"});
                //scroll up
                //console.log('Up');
            }

            //prevent page fom scrolling
            return false;
        });
    
    });
