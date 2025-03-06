function validarCPF() {
    let cpf = document.getElementById("cpf").value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (cpf.length !== 11) {
        document.getElementById("resultado").innerText = "CPF inválido! Deve conter 11 dígitos.";
        document.getElementById("resultado").style.color = "red";
        return false;
    }

    // Verifica se todos os dígitos são iguais, o que invalida o CPF
    if (/^(\d)\1{10}$/.test(cpf)) {
        document.getElementById("resultado").innerText = "CPF inválido!";
        document.getElementById("resultado").style.color = "red";
        return false;
    }

    // Cálculo do primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) {
        document.getElementById("resultado").innerText = "CPF inválido!";
        document.getElementById("resultado").style.color = "red";
        return false;
    }

    // Cálculo do segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) {
        document.getElementById("resultado").innerText = "CPF inválido!";
        document.getElementById("resultado").style.color = "red";
        return false;
    }

    document.getElementById("resultado").innerText = "CPF válido!";
    document.getElementById("resultado").style.color = "green";
    return true;
}