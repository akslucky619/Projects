function borrow(url, method = "GET") {
    return new promise((res, rej) => {
        var xhr = XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            res(JSON.parse(xhr.response));
            
        };
        xhr.send()
    }
}