//默认数据

var money = 5
var column = [0, 1]
var xz_time = 2
var xz_num = 7
var sy_time = ""
var actionflag = false

// 接收消息
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    // console.log(request.time)
    sy_time = request.sy_time

    if (request.result) {
        sendResponse({
            // response: request,
            actionflag: actionflag,
            money: money,
            column: column,
            sy_time: sy_time,
            xz_time: xz_time,
            xz_num: xz_num,
        });
    }
});
