// Correção da função de máscara e ajuste do nome da função para 'mask'
$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(DDD) 12345-6789'
});

// Correção da função de máscara e ajuste do nome da função para 'mask'
$('#cpf').mask('000.000.000-00', {
    placeholder: '123.456.789-00'
});

// Correção da função de máscara e ajuste do nome da função para 'mask'
$('#cep').mask('00000-000', {
    placeholder: '012345-678'
});

// Correção das regras de validação (tradução correta das propriedades)
$('form').validate({
    rules: {
        nome: {
            required: true // Alterado 'requerido' para 'required'
        },
        email: {
            required: true, // Alterado 'requerido' para 'required'
            email: true
        },
        telefone: {
            required: true // Alterado 'requerido' para 'required'
        },
        endereco: {
            required: true // Alterado 'requerido' para 'required'
        },
        cep: {
            required: true // Alterado 'requerido' para 'required'
        },
        cpf: {
            required: true // Alterado 'requerido' para 'required'
        },
    },
    submitHandler: function (form) {
        alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
        form.reset();
    },
    invalidHandler: function (form, validator) {
        alert("Por favor, preencha os campos para prosseguir com a compra!");
    }
});






// $('#telefone').mascara('(00) 00000-0000', {
//     placeholder: '(DDD) 12345-6789'
// })

// $('#cpf').mascara('000.000.000-00', {
//     placeholder: '123.456.789-00'
// })

// $('#cep').mascara('00000-000', {
//     placeholder: '012345-678'
// })

// $('form').validate({
//     rules: {
//         nome: {
//             requerido: true
//         },
//         email: {
//             requerido: true,
//             email: true
//         },
//         telefone: {
//             requerido: true
//         },
//         endereco: {
//             requerido: true
//         },
//         cep: {
//             requerido: true
//         },
//         cpf: {
//             requerido: true
//         },
//     },
//     submitHandler: function (form) {
//         alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
//         form.reset();
//     },
//     invalidHandler: function (form, validator) {
//         alert("Por favor, preencha os campos para prosseguir com a compra!");
//     }
// })