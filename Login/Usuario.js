const { v4: uuidv4 } = require("uuid")

class Usuario {
    constructor({ cod, nome, email, senha }) {
        this.cod = cod ?? uuidv4();
        this.nome = nome;
        this.email = email;
        this.senha = senha;

        // Valida a senha ao criar o usuário
        this.validarSenha();
    }

    validarSenha() {
        if (!this.senha) {
            throw new Error('Senha é obrigatória.');
        }

        // Verifica se a senha contém pelo menos um caractere maiúsculo, um especial e um número
        const regexMaiuscula = /[A-Z]/;
        const regexEspecial = /[!@#$%^&*(),.?":{}|<>]/;
        const regexNumero = /[0-9]/;

        if (!regexMaiuscula.test(this.senha)) {
            throw new Error('A senha deve conter pelo menos um caractere maiúsculo.');
        }

        if (!regexEspecial.test(this.senha)) {
            throw new Error('A senha deve conter pelo menos um caractere especial.');
        }

        if (!regexNumero.test(this.senha)) {
            throw new Error('A senha deve conter pelo menos um número.');
        }

        // Verifica se a senha tem pelo menos 8 caracteres (ou o mínimo desejado)
        if (this.senha.length < 8) {
            throw new Error('A senha deve ter pelo menos 8 caracteres.');
        }
    }
}

modules.export = Usuario;