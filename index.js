console.log('lyx i like you so much! you are my Goddess ！ peng said ')

const testAjaxBtn = document.getElementById('testAjaxBtn'); 
const lyxXhr = ({type,url}) => {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            // 已经接收到全部响应数据，执行以下操作
            var data = xhr.responseText;
            console.log(data);
        }
    };
    // 指定连接方式和地址----文件方式
    xhr.open(type, url, true);
    // 发送请求
    xhr.send();
}
testAjaxBtn.onclick = () => {
    console.log(1234)
    lyxXhr({type:'get', url:'/getData' })
};