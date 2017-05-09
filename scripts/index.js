
jwplayer.key="N2Z47h5lEkdFZFPwrPS0j5p+FH3UmaACS13lzg==";
var jwplayerHeight=$("#video-wrapper").css("height");
var jwplayerWidth=$("#video-wrapper").css("width");
Player= jwplayer("video").setup({
    "stretching": "uniform",
    "primary":"html5",
    "preload":"none",
    "flashplayer":"scripts/jwplayer-7.9.1/jwplayer.flash.swf",
    "controls":true,
    "nextupoffset":"-4",                /*最后几秒钟出现下一个视频弹出框*/
    "width":jwplayerWidth,
    "height":jwplayerHeight,

    //"file":"videos/rabbit/tinyRabbit1.mp4",     //一个文件的写法
    //"image":"images/tinyRabbit1.jpg",
    //"title":"我最爱的兔子",
    //"description":"我最爱的兔子，哈哈哈哈***",

    "playlist": [
        {
            "file": "videos/rabbit/tinyRabbit1.mp4",
            "image":"images/tinyRabbit1.jpg",
            "title": "兔子刚买回来",
            "description":"兔子刚买回来在吃胡萝卜片，哈哈哈哈***",
            "mediaid": "1"
        },
        {
            "file": "videos/rabbit/tinyRabbit2.mp4",
            "image":"images/tinyRabbit2.jpg",
            "title": "兔子刚买回来",
            "description":"兔子刚买回来在吃胡萝卜片,呵呵呵呵",
            "mediaid": "2"
        },
        {
            "file": "videos/rabbit/inGuangXi.mp4",
            "image":"images/inGuangXi.jpg",
            "title": "西大操场看兔子",
            "description":"西大操场看兔子",
            "mediaid": "3"
        },{
            "file": "videos/rabbit/20150307.mp4",
            "image":"images/20150307.jpg",
            "title": "笼子里的兔子",
            "description":"在家里的铁笼子里面吃萝卜叶子，哈哈哈哈***",
            "mediaid": "4"
        }
    ],
    "localization":{
        "nextUp":"下一个兔子视频"
    }
});

//小火箭
$(function() {
    var e = $("#rocket-to-top"),
        i = true;
    $(window).scroll(function() {
        var t = $(document).scrollTop();
        t == 0 ? e.css("background-position") == "0px 0px" ? e.fadeOut("slow") : i && (i = !1, $(".level-2").css("opacity", 1), e.delay(100).animate({
                marginTop: "-1000px"
            },
            "normal",
            function() {
                e.css({
                    "margin-top": "-125px",
                    display: "none"
                });
                    i = !0
            })) : e.fadeIn("slow")
    });
        e.hover(function() {
                $(".level-2").css("display","block").stop().animate({
                    opacity: 1
                });
            },
            function() {
                $(".level-2").css("display","none").stop().animate({
                    opacity: 0
                });
            });
        $(".level-3").click(function() {
            function t() {
                var t = e.css("background-position");
                if (e.css("display") == "none" || i == false) {
                    clearInterval(n);
                        e.css("background-position", "0px 0px");
                    return
                }
                switch (t){
                    case "0px 0px":
                        e.css("background-position", "-298px 0px");
                        break;
                    case "-298px 0px":
                        e.css("background-position", "-447px 0px");
                        break;
                    case "-447px 0px":
                        e.css("background-position", "-596px 0px");
                        break;
                    case "-596px 0px":
                        e.css("background-position", "-745px 0px");
                        break;
                    case "-745px 0px":
                        e.css("background-position", "-298px 0px");
                }
            }
            if (!i) return;
            n = setInterval(t, 50);
                $("html,body").animate({scrollTop: 0},"slow");
        });
});