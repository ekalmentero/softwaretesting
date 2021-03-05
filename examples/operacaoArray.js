
function operacaoArray(items, callbackOp, num) {
    var atItems = [];
    for (let index = 0; index < items.length; index++) {
        atItems[index] = callbackOp(items[index], num);
    }
    return atItems;
}

module.exports = {
    operacaoArray  
}