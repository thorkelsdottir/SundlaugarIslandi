$(document).ready(function() {
    
    /*Search á undirsíðu slideUp/Down */
    $("#leitar_hnappur").click(function() {
        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $("#dropdown_leit").slideUp();
            document.getElementById("search_icon").src =
                "icon/search_icon.svg";
            $(".undirsida_main").removeClass("blur");
        } else {
            $(this).addClass("open");
            $("#dropdown_leit").slideDown();
            document.getElementById("search_icon").src =
                "icon/close_icon.svg";
            $(".undirsida_main").addClass("blur");
        }

    });

       /*mixItUp virknin til að filtera spjöldin eftir stadsetningum og opnunartíma*/
    $(function(){
    $('#cardsBig').mixItUp();
    $('#cards_small').css('display', 'none');

    });
   

    $("#four_cards").click(function () {
        $('.cardsSmall').css('display', 'block');
        $('.Cards_big').css('display', 'none');
        document.getElementById("show_two_cards").src="icon/show_two_cards_light.svg";
        document.getElementById("show_four_cards").src="icon/show_four_cards_dark.svg";
         $(function(){
        $('#cards_small').mixItUp();
    });
    });
    $("#two_cards").click(function () {
        $('.Cards_big').css('display', 'block');
        $('.cardsSmall').css('display', 'none');
        document.getElementById("show_two_cards").src="icon/show_two_cards_dark.svg";
        document.getElementById("show_four_cards").src="icon/show_four_cards_light.svg";
    });



/* icon-a carosel á undirsíðu */
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        pullDrag:true,
        slideBy:1,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })

/*suggestive LEIT á forsíðu og undirsíðu*/
    var substringMatcher = function(strs) {
        return function findMatches(q, cb) {
            var matches, substringRegex;
            // an array that will be populated with substring matches
            matches = [];
            // regex used to determine if a string contains the substring `q`
            substrRegex = new RegExp(q, 'i');
            // iterate through the pool of strings and for any string that
            // contains the substring `q`, add it to the `matches` array
            $.each(strs, function(i, str) {
                if (substrRegex.test(str)) {
                    matches.push(str);
                }
            });
            cb(matches);
            $('.tt-suggestion').each(function(){
                $(this).click(function () {
                    
                    console.log($(this).text());
                    if($(this).text() === "Hofsóslaug"){
                        window.location.href = 'hofsos.html';
                    }

                    // til að leitin geti filterað kortin eftir ákveðnum leitarorðum
                    else if($(this).text() === "Dýfingar"){
                        
                        $('#cardsBig').mixItUp('filter', '.bretti');
                        $('#cards_small').mixItUp('filter', '.bretti');
                    }
                    else if($(this).text() === "Reykjavík"){
                        
                        $('#cardsBig').mixItUp('filter', '.hofud');
                        $('#cards_small').mixItUp('filter', '.hofud');
                    }
                    else if($(this).text() === "Rennibraut"){
                        
                        $('#cardsBig').mixItUp('filter', '.renni');
                        $('#cards_small').mixItUp('filter', '.renni');
                    }
                      else if($(this).text() === "Vesturland"){
                        
                        $('#cardsBig').mixItUp('filter', '.vestur');
                        $('#cards_small').mixItUp('filter', '.vestur');
                    }
                       else if($(this).text() === "Austurland"){
                        
                        $('#cardsBig').mixItUp('filter', '.austur');
                        $('#cards_small').mixItUp('filter', '.austur');
                    }
                       else if($(this).text() === "Norðurland"){
                        
                        $('#cardsBig').mixItUp('filter', '.nordur');
                        $('#cards_small').mixItUp('filter', '.nordur');
                    }
                       else if($(this).text() === "Suðurland"){
                        
                        $('#cardsBig').mixItUp('filter', '.sudur');
                        $('#cards_small').mixItUp('filter', '.sudur');
                    }
                      else if($(this).text() === "Sjósund"){
                        
                        $('#cardsBig').mixItUp('filter', '.sjosund');
                        $('#cards_small').mixItUp('filter', '.sjosund');
                    }


                });
            });
        };
    };
    // leitarorð fyrir suggestive-dropdown
    var states = ["Hofsóslaug", "Höfuðborgin",
        "Vesturland", "Hoppukastali", "Laugardalslaug",
        "Lágafellslaug", "Austurland", "Suðurland",
        "Norðurland", "Krossneslaug", "Breiðholtslaug",
        "Rennibraut", "Gufubað", "Heitur pottur",
        "Útisundlaug", "Innisundlaug", "Vaðlaug",
        "Eimbað", "Akureyrarlaug", "Stökkbretti",
        "Dýfingar", "Akureyri", "Reykjavík",
        "Sundhöll Reykjavíkur", "Hveragerði", "Selfoss",
        "Nauthólsvík", "Sjósund", "Gravarvogslaug",
        "Sundnámskeið", "Kópavogslaug", "Salalaug"
    ];

    $("#the-basics .typeahead").typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    },
    {
        name: 'states',
        source: substringMatcher(states)
    });


// Hide Header on on scroll down og show header on scroll upp
        var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = $('header').outerHeight();

        $(window).scroll(function(event){
            didScroll = true;
        });

        setInterval(function() {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }   
        }, 250);

        function hasScrolled() {
            var st = $(this).scrollTop();
            
            // Make sure they scroll more than delta
            if(Math.abs(lastScrollTop - st) <= delta)
                return;
            
            if (st > lastScrollTop && st > navbarHeight){
                // Scroll Down
                $('header').removeClass('nav-down').addClass('nav-up');
            } else {
                // Scroll Up
                if(st + $(window).height() < $(document).height()) {
                    $('header').removeClass('nav-up').addClass('nav-down');
                }
            }
            
            lastScrollTop = st;
        }


    /* bara í MOBILE stadsetningarval slideUp/Down */
    $("#velja_stad_takki").click(function() {
        $("#stad-val").slideDown();
        $(".baksida_main").addClass("blur");

    });
      $(".myMobileButton").click(function() {
        $("#stad-val").slideUp();
        $(".baksida_main").removeClass("blur");

    });


});