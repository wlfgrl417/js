function repetir(a,b) {
    var arrayBase = []
    for (var i=0; i < a;i++) {
    arrayBase.push(b);
    }
    return arrayBase;
}
var arrayFinal = repetir(3,"oi");
console.log(arrayFinal);