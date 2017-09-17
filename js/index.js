    $(document).ready(function () {
        var sceneTopFlag= false;
        var sceneSceneFlag= false;
        var sceneRightFlag= false;
        var sceneBottomFlag= false;

        $('body').on( 'DOMMouseScroll mousewheel', function ( event ) {
           console.log("up");    
            if( event.originalEvent.detail > 0 || event.originalEvent.wheelDelta < 0 ) { //alternative options for wheelData: wheelDeltaX & wheelDeltaY
               $("#joey").css("transform", "scaleX(-1)");
                $("#joey").animate({left: "-=10px"});  
            } else {
             //   if(!locked)
               // up();
               $("#joey").css("transform", "scaleX(1)");
                $("#joey").animate({left:"+=10px"});           
            }
            //prevent page fom scrolling
            return false;
        });

        $(".btn-2").click(function(){
            if(!sceneTopFlag)
                openSceneTop();
            else 
                closeSceneTop();

            sceneTopFlag =!sceneTopFlag;
        });

        $(".btn-3").click(function(){
            if(!sceneBottomFlag)
                openSceneBottom();
            else 
                closeSceneBottom();

            sceneBottomFlag =!sceneBottomFlag;
        });

        $(".btn-4").click(function(){
            if(!sceneRightFlag)
                openSceneRight();
            else 
                closeSceneRight();

            sceneRightFlag =!sceneRightFlag;
        });
 

        function openSceneTop(){
            $('.row1').animate({height:"100vh"});
            closeMain();
        }

        function closeSceneTop(){
            $('.row1').animate({height:"0vh"});
            openMain();
        }

        function openSceneBottom(){
            $('.row3').animate({height:"100vh"});
            closeMain();
        }

        function closeSceneBottom(){
            $('.row3').animate({height:"0vh"});
            openMain();
        }

        function openSceneRight(){
            $('.sceneRight').animate({width:"100%"});
            $('.sceneOrigin').animate({width:"0%"});

            $('.sceneRight').animate({height:"100%"});
            $('.sceneOrigin').animate({height:"0%"});
        }

        function closeSceneRight(){
            $('.sceneRight').animate({width:"0%"});
            $('.sceneOrigin').animate({width:"100%"});
            $('.sceneOrigin').animate({height:"100%"});
            $('.sceneRight').animate({height:"0%"});
            openMain();
        }


        function closeMain(){
            
            $('#main').animate({height:"0vh"});
        }

        function openMain(){
            $('#main').animate({height:"100vh"});
        }
    /*
        $('.scene-sc-2').click(function(){
            s2O=true;
            openScene2();
        });
        
        $('.scene-sc-3').click(function(){
            s3O=true;
            openScene3();
        });
        
        $('.scene-sc-4').click(function(){
            s4O=true;
            openScene4();
        });

        $('#closeScene4').click(function(){
            closeScene4();  console.log("close scene 4"); 
            alert("");  
        });

        $('#closeScene').click(function(){
            closeScene3();
            if(s4O){
                closeScene4();
            }
            
            if(s3O)
                closeScene3();

            if(s2O)
                    closeScene2();    
            
        });

        $('#closeScene2').click(function(){
            closeScene2();
        });


        function openScene2(){
            $('#sceneTop').animate({height:"100vh"});
            $('#sceneOrigin').animate({height:"0vh"});
            $('#sceneOrgin').animate({padding:"0"},"0");
          //  $('#closeScene2').css("visibility","visible");
          $('#scene-1  *').animate({opacity:"0%"},"slow");
          
        }

        function closeScene2(){
            $('#scene-2').animate({height:"0vh"});
            $('#scene-1').animate({height:"100vh"});
            $('#scene-1').animate({padding:"5vh"},"0");
            
            $('#scene-2  *').animate({opacity:"0%"},"slow");
        }
        
        function openScene3(){
           // $('#closeScene3').css("visibility","visible");
            $('#scene-3').animate({height:"100vh"});
            $('#scene-1').animate({height:"0vh"});
            $('#scene-2').animate({padding:"0"},"0");        
            
          //  if(opens4)
            //    closeScene4();
            $('#scene-3  0').animate({opacity:"0%"},"slow");
        }

        function closeScene3(){
            $('#scene-3').animate({height:"0vh"});
            $('#scene-1').animate({height:"100vh"});
            $('#scene-2').animate({padding:"5vh"},"0");            
        }

        function openScene4(){
            //$('#closeScene4').css("visibility","visible");
            openS4= true;
            $('#scene-1').animate({padding:"0"},"0");            
            $('#scene-1').animate({width:"0"},"0");            
            $('#scene-4').animate({width:"100vh"},"0");   
            $('#scene-1  *').hide();    
            $('#scene-1  *').animate({opacity:"0%"},"slow");
            
        }

        function closeScene4(){
                $('#scene-4').animate({width:"0"},"0");              
                $('#scene-1').animate({padding:"5vh"},"0");            
                $('#scene-1').animate({width:"100vh"},"0");            
                console.log("close scene 4");          
        }
      */              
    });
