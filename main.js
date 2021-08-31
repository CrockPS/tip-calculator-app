function cinco(){
    const contaInput = document.querySelector("#input1");
    const pessoaInput = document.querySelector("#input3");
    const conta = parseFloat(contaInput.value, 10);
    const pessoa = parseFloat(pessoaInput.value, 10);

    var tipAmount = conta * 0.05 / pessoa;
    var total = tipAmount + conta / pessoa;

    document.querySelector("#value1").innerHTML = "$"+parseFloat(tipAmount.toFixed(2));
    document.querySelector("#value2").innerHTML = "$"+parseFloat(total.toFixed(2));
}

function dez(){
    const contaInput = document.querySelector("#input1");
    const pessoaInput = document.querySelector("#input3");
    const conta = parseFloat(contaInput.value, 10);
    const pessoa = parseFloat(pessoaInput.value, 10);

    var tipAmount = conta * 0.10 / pessoa;
    var total = tipAmount + conta / pessoa;

    document.querySelector("#value1").innerHTML = "$"+parseFloat(tipAmount.toFixed(2));
    document.querySelector("#value2").innerHTML = "$"+parseFloat(total.toFixed(2));
}

function quinze(){
    const contaInput = document.querySelector("#input1");
    const pessoaInput = document.querySelector("#input3");
    const conta = parseFloat(contaInput.value, 10);
    const pessoa = parseFloat(pessoaInput.value, 10);

    var tipAmount = conta * 0.15 / pessoa;
    var total = tipAmount + conta / pessoa;

    document.querySelector("#value1").innerHTML = "$"+parseFloat(tipAmount.toFixed(2));
    document.querySelector("#value2").innerHTML = "$"+parseFloat(total.toFixed(2));
}

function vinteCinco(){
    const contaInput = document.querySelector("#input1");
    const pessoaInput = document.querySelector("#input3");
    const conta = parseFloat(contaInput.value, 10);
    const pessoa = parseFloat(pessoaInput.value, 10);

    var tipAmount = conta * 0.25 / pessoa;
    var total = tipAmount + conta / pessoa;

    document.querySelector("#value1").innerHTML = "$"+parseFloat(tipAmount.toFixed(2));
    document.querySelector("#value2").innerHTML = "$"+parseFloat(total.toFixed(2));
}

function cinquenta(){
    const contaInput = document.querySelector("#input1");
    const pessoaInput = document.querySelector("#input3");
    const conta = parseFloat(contaInput.value, 10);
    const pessoa = parseFloat(pessoaInput.value, 10);

    var tipAmount = conta * 0.5 / pessoa;
    var total = tipAmount + conta / pessoa;

    document.querySelector("#value1").innerHTML = "$"+parseFloat(tipAmount.toFixed(2));
    document.querySelector("#value2").innerHTML = "$"+parseFloat(total.toFixed(2));
}

function custom(){
    const contaInput = document.querySelector("#input1");
    const pessoaInput = document.querySelector("#input3");
    const customInput = document.querySelector("#input2");

    const conta = parseFloat(contaInput.value, 10);
    const pessoa = parseFloat(pessoaInput.value, 10);
    const valor = parseFloat(customInput.value, 10);

    var tipAmount = conta * (valor/100) / pessoa;
    var total = tipAmount + conta / pessoa;

    document.querySelector("#value1").innerHTML = "$"+parseFloat(tipAmount.toFixed(2));
    document.querySelector("#value2").innerHTML = "$"+parseFloat(total.toFixed(2));
}