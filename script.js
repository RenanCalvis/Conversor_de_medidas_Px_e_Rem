document.addEventListener('DOMContentLoaded', function(){
    var inputNumberA = document.getElementById('numeroA');
    var inputNumberB = document.getElementById('numeroB');

    inputNumberA.addEventListener('input', function(){
        var resultado = PixToRem(inputNumberA.value);
        inputNumberB.value = resultado;
    });

    inputNumberB.addEventListener('input', function(){
        var resultado = RemToPix(inputNumberB.value);
        inputNumberA.value = resultado;
    });
});

PixToRem = (pixvalue) => {
    if (pixvalue === '') {
        return '';
    }
    return (pixvalue / 16).toString();
}

RemToPix = (remvalue) => {
    if (remvalue === '') {
        return '';
    }
    return (remvalue * 16).toString();
}
