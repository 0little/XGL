//打开网页时需从后台获取最新动态信息，并在首页展示


//导航栏部分
var header = new Vue({
    el: '#header',
    data: {
        logoUrl: '../img/logo.png',
        items: [
            {href: 'homePage.html', content: '首页'},
            {href: 'overview.html', content: '实验室简介'},
            {href: 'display', content: '成果展示'},
            {href: 'join', content: '加入我们'}
        ]
    }
});

//图片显示部分
var picture = new Vue({
    el: '#picture',
    data: {
        imgItems: [
            {
                url: '../img/android.png',
                show: false
            },
            {
                url: '../img/java.jpg',
                show: false
            },
            {
                url: '../img/web.png',
                show: false
            }
        ]
    },
    mounted: function () {
        var i = 0; //图片下标
        var that = this; //将this对象即该Vue实例先保存
        var timer = null;

        autoplay();

        function autoplay() {
            //将上一张图片设置成不可见
            i = i % that.imgItems.length;
            that.imgItems[(i-1 < 0) ? i-1+3 : i-1].show = false;

            //将当前图片设置为可见,
            that.imgItems[i++].show = true;

            //自动更换
            timer = setTimeout(autoplay, 3000);
        }
    }
});

//实验室动态部分
var news = new Vue({
    el: '#news',
    data: {
        //从后台获取，展示小于等于五条
        item: {

        }
    }
});