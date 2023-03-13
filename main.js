console.setGlobalLogConfig({
    "file": "/sdcard/1.txt"
});


log("wait for search page")
waitForActivity("com.ddsy.songyao.activity.SearchListPlusActivity")
log("start")
// check_buy()


//在新线程执行的代码
threads.start(function () {
    setInterval(function () {
        var sendButton = text("搜索").findOne();
        sendButton.click();
        textContains("28分达").waitFor();
        log("开始检测")
        className("android.widget.RelativeLayout").depth(10).find().forEach(function (one_product) {
            desc = one_product.findOne(className("android.widget.TextView").textContains("小儿"));
            if (desc != null) {
                add_shop_cart = one_product.findOne(id("oneKeyToShopCar"))
                if (add_shop_cart != null) {
                    click_result = add_shop_cart.click()
                    log("in stock" + click_result);
                    media.playMusic("./music/1.wav", 1, true);
                    sleep(media.getMusicDuration() * 3);
                } else {
                    log("no stock")
                }
            }

        });
    }, random(1000, 8000))
});



var desc;
var add_shop_cart;
var click_result;

function check_buy() {
    log("开始检测")
    // toast("开始检测")
    className("android.widget.RelativeLayout").depth(10).find().forEach(function (one_product) {
        // 泰诺林
        desc = one_product.findOne(className("android.widget.TextView").textContains("小儿"));
        if (desc != null) {
            add_shop_cart = one_product.findOne(id("oneKeyToShopCar"))
            if (add_shop_cart != null) {
                click_result = add_shop_cart.click()
                log("in stock" + click_result);
                media.playMusic("./music/1.wav", 1, true);
                sleep(media.getMusicDuration() * 3);
            } else {
                log("no stock")
            }
        }

    });
}

