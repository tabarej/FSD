this.onmessage = function(event){
    let obj = event.data;
    let res = obj.num1+ obj.num1;
    this.postMessage(res);
}