var rule={
            title: '测试',
            host: 'https://xchina.site/',
            // homeUrl:'/',
            url: '/videos/fyclass/fypage.html',
            searchUrl: '/videos/keyword-**/fypage.html',
            searchable: 2,//是否启用全局搜索,
            quickSearch: 0,//是否启用快速搜索,
            filterable: 0,//是否启用分类筛选,
            headers: {//网站的请求头,完整支持所有的,常带ua和cookies
                'User-Agent': 'MOBILE_UA',
                // "Cookie": "searchneed=ok"
            },
            class_parse: '.content-box&&a;a&&Text;a&&href;.*/(.*?)\.html',//分类列表,分类文字,分类链接,正则表达式通配网址链接
            play_parse: true,
            lazy: ``,
            limit: 6,
            推荐: '.video-index;.video;a&&title;.img&&style;.tags&&Text;a&&href',//主体元素,影片列表,影片标题,影片图片,影片描述,影片链接
            double: true, // 推荐内容是否双层定位
            一级: '.video-list&&.video;a&&title;.img&&style;.tags&&Text;a&&href',//影片列表,影片标题,影片图片,影片描述,影片链接
            二级: {
                "title": ".hero-title-item&&Text;.tag&&Text",//影片标题,影片类型
                "img": ".img&&style",//影片图片
                "desc": ".video-detail&&.item:eq(0)&&Text;.video-detail&&.item:eq(0)&&Text;.hero-title-item&&Text;.model-container&&Text;.video-detail&&.item:eq(-1)&&Text",//影片描述（未知/未知/地区/演员/导演）
                "content": ".hero-title-item&&Text",//影片简介
                "tabs": ".stui-pannel__head&&h3",//播放线路列表
                "lists": ".stui-content__playlist&&li"//播放剧集列表
            },
            搜索: '.video-list&&.video;a&&title;.img&&style;.tags&&Text;a&&href',//影片列表,影片标题,影片图片,影片描述,影片链接
        }
