console.log('lyx i like you so much! you are my Goddess ！ ')

const lyxXhr = ({ type, url }) => {
    return new Promise((res, rej) => {
        let xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject();;
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) { // 已经接收到全部响应数据，执行以下操作
                let data = xhr.responseText;
                res(data)
            }
        };
        xhr.open(type, url, true);// 指定连接方式和地址----文件方式
        // 发送请求
        xhr.send();
    })

}
const testAjaxBtn = document.getElementById('testAjaxBtn');
testAjaxBtn.onclick = () => {
    console.log(1234)
    lyxXhr({ type: 'get', url: '/getData' })
    .then(data=> {
        console.log('哇噢，成功啦，开心ing',data)
    })
};