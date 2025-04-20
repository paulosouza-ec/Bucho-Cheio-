Feature: Cadastro no sistema
    As a usuário não cadastrado no sistema
    I want to realizar cadastro no sistema
    So that eu posso usar o sistema
    And fazer o login plataforma

    Scenario: Cadastro bem sucedido
        Given estou na tela de "Cadastro"
        And não existe um usuário com o campo obrigatório "EMAIL" com o valor "teste@gmail.com" e o campo opcional "CPF" com o valor "12345678910"
        When eu preencho o campo "NOME" com o valor "Wellinne"
        And eu preencho o campo "CPF" com o valor "12345678910"
        And eu preencho o campo "SENHA" com o valor "12345678"
        And eu preencho o campo "CONFIRMAR SENHA" com o valor "12345678"
        And eu preencho o campo "TELEFONE" com o valor "(99) 99999-9999"
        And eu preencho o campo "EMAIL" com o valor "teste@gmail.com"
        And eu preencho o campo "ENDEREÇO" com o valor "rua 12, numero 34, Várzea, Recife"
        And seleciono a opção "Salvar"
        And seleciono a opção "Sim"
        Then o cadastrado é realizado com sucesso
        And sou redirecionado para a tela de "Login"

    Scenario: Cadastro mal sucedido por email incorreto
        Given estou na tela de "Cadastro"
        And não existe um usuário com o campo obrigatório "EMAIL" com o valor "teste@gmail.com"
        When eu preencho no campo "EMAIL" com o valor "teste.com"
        And eu preencho o campo "CPF" com o valor "12345678910"
        And eu preencho o campo "SENHA" com o valor "12345678"
        And eu preencho o campo "CONFIRMAR SENHA" com o valor "12345678"
        And eu preencho o campo "TELEFONE" com o valor "(99) 99999-9999"
        And eu preencho o campo "NOME" com o valor "Wellinne"
        And eu preencho o campo "ENDEREÇO" com o valor "rua 12, numero 34, Várzea, Recife"
        And seleciono a opção "Salvar"
        Then o cadastro não é realizado com sucesso
        And eu vejo uma mensagem de erro informando "Email inválido"

    Scenario: Cadastro mal sucedido por telefone incorreto
        Given estou na tela de "Cadastro"
        And não existe um usuário com o campo obrigatório "EMAIL" com o valor "teste@gmail.com"
        When eu preencho no campo "EMAIL" com o valor "teste@gmail.com"
        And eu preencho o campo "CPF" com o valor "12345678910"
        And eu preencho o campo "SENHA" com o valor "12345678"
        And eu preencho o campo "CONFIRMAR SENHA" com o valor "12345678"
        And eu preencho o campo "TELEFONE" com o valor "(99) 99999-99"
        And eu preencho o campo "NOME" com o valor "Wellinne"
        And eu preencho o campo "ENDEREÇO" com o valor "rua 12, numero 34, Várzea, Recife"
        And seleciono a opção "Salvar"
        Then o cadastro não é realizado com sucesso
        And eu vejo uma mensagem de erro informando "Telefone inválido"

    Scenario: Cadastro mal sucedido por CPF incorreto
        Given estou na tela de "Cadastro"
        And não existe um usuário com o campo obrigatório "EMAIL" com o valor "teste@gmail.com" e o campo opcional "CPF" com o valor "123.456.789-10"
        When eu preencho no campo "EMAIL" com o valor "teste@gmail.com"
        And eu preencho o campo "SENHA" com o valor "12345678"
        And eu preencho o campo "CONFIRMAR SENHA" com o valor "12345678"
        And eu preencho o campo "TELEFONE" com o valor "(99) 99999-9999"
        And eu preencho o campo "NOME" com o valor "Wellinne"
        And eu preencho o campo "CPF" com o valor "12345678"
        And eu preencho o campo "ENDEREÇO" com o valor "rua 12, numero 34, Várzea, Recife"
        And seleciono a opção "Salvar"
        Then o cadastro não é realizado com sucesso
        And eu vejo uma mensagem de erro informando "CPF inválido"

    Scenario: Cadastro mal sucedido por senha e confirmar senha serem diferentes
        Given estou na tela de "Cadastro"
        And não existe um usuário com o campo obrigatório "EMAIL" com o valor "teste@gmail.com"
        When eu preencho no campo "EMAIL" com o valor "teste@gmail.com"
        And eu preencho o campo "CPF" com o valor "12345678910"
        And eu preencho o campo "SENHA" com o valor "123456789"
        And eu preencho o campo "CONFIRMAR SENHA" com o valor "12345678"
        And eu preencho o campo "TELEFONE" com o valor "(99) 99999-9999"
        And eu preencho o campo "NOME" com o valor "Wellinne"
        And eu preencho o campo "ENDEREÇO" com o valor "rua 12, numero 34, Várzea, Recife"
        And seleciono a opção "Salvar"
        Then o cadastro não é realizado com sucesso
        And eu vejo uma mensagem de erro informando "Senha Inválida"

    Scenario: Cadastro mal sucedido por email não preenchida
        Given estou na tela de "Cadastro"
        And não existe um usuário com o campo obrigatório "EMAIL" com o valor "teste@gmail.com" e o campo obrigatório "CPF" com o valor "12345678910"
        When eu preencho o campo "NOME" com o valor "Wellinne"
        And eu preencho o campo "CPF" com o valor "12345678910"
        And eu preencho o campo "SENHA" com o valor "12345678"
        And eu preencho o campo "CONFIRMAR SENHA" com o valor "12345678"
        And eu preencho o campo "TELEFONE" com o valor "(99) 99999-9999"
        And eu preencho o campo "ENDEREÇO" com o valor "rua 12, numero 34, Várzea, Recife"
        And seleciono a opção "Salvar"
        Then o cadastrado não é realizado com sucesso
        And eu vejo uma mensagem de erro informando "Email inválido"

        Scenario: Cadastro mal sucedido por confirmação de email não preenchida
        Given estou na tela de "Cadastro"
        And não existe um usuário com o campo obrigatório "CONFIRMAR EMAIL" com o valor "teste@gmail.com" e o campo obrigatório "CPF" com o valor "12345678910"
        When eu preencho o campo "NOME" com o valor "Wellinne"
        And eu preencho o campo "CPF" com o valor "12345678910"
        And eu preencho o campo "SENHA" com o valor "12345678"
        And eu preencho o campo "CONFIRMAR SENHA" com o valor "12345678"
        And eu preencho o campo "TELEFONE" com o valor "(99) 99999-9999"
        And eu preencho o campo "ENDEREÇO" com o valor "rua 12, numero 34, Várzea, Recife"
        And seleciono a opção "Salvar"
        Then o cadastrado não é realizado com sucesso
        And eu vejo uma mensagem de erro informando "Confirmação de email inválida"

    Scenario: Cadastro mal sucedido por senha não preenchida
        Given estou na tela de "Cadastro"
        And não existe um usuário com o campo obrigatório "EMAIL" com o valor "teste@gmail.com" e o campo obrigatório "CPF" com o valor "12345678910"
        When eu preencho o campo "NOME" com o valor "Wellinne"
        And eu preencho o campo "CPF" com o valor "12345678910"
        And eu preencho o campo "TELEFONE" com o valor "(99) 99999-9999"
        And eu preencho no campo "EMAIL" com o valor "teste@gmail.com"
        And eu preencho o campo "ENDEREÇO" com o valor "rua 12, numero 34, Várzea, Recife"
        And seleciono a opção "Salvar"
        Then o cadastrado não é realizado com sucesso
        And eu vejo uma mensagem de erro informando "Senha inválida"

    Scenario: Cadastro mal sucedido por nome não preenchido
        Given estou na tela de "Cadastro"
        And não existe um usuário com o campo obrigatório "EMAIL" com o valor "teste@gmail.com" e o campo obrigatório "CPF" com o valor "12345678910"
        When eu preencho o campo "CPF" com o valor "12345678910"
        And eu preencho o campo "TELEFONE" com o valor "(99) 99999-9999"
        And eu preencho no campo "EMAIL" com o valor "teste@gmail.com"
        And eu preencho o campo "SENHA" com o valor "12345678"
        And eu preencho o campo "CONFIRMAR SENHA" com o valor "12345678"
        And eu preencho o campo "ENDEREÇO" com o valor "rua 12, numero 34, Várzea, Recife"
        And seleciono a opção "Salvar"
        Then o cadastrado não é realizado com sucesso
        And eu vejo uma mensagem de erro informando "Nome inválido"

    Scenario: Cadastro mal sucedido por telefone não preenchida
        Given estou na tela de "Cadastro"
        And não existe um usuário com o campo obrigatório "EMAIL" com o valor "teste@gmail.com" e o campo obrigatório "CPF" com o valor "12345678910"
        When eu preencho o campo "NOME" com o valor "Wellinne"
        And eu preencho o campo "CPF" com o valor "12345678910"
        And eu preencho no campo "EMAIL" com o valor "teste@gmail.com"
        And eu preencho o campo "SENHA" com o valor "12345678"
        And eu preencho o campo "CONFIRMAR SENHA" com o valor "12345678"
        And eu preencho o campo "ENDEREÇO" com o valor "rua 12, numero 34, Várzea, Recife"
        And seleciono a opção "Salvar"
        Then o cadastrado não é realizado com sucesso
        And eu vejo uma mensagem de erro informando "Telefone inválido"

    Scenario: Cadastro mal sucedido por endereço não preenchido
        Given estou na tela de "Cadastro"
        And não existe um usuário com o campo obrigatório "EMAIL" com o valor "teste@gmail.com" e o campo obrigatório "CPF" com o valor "12345678910"
        When eu preencho o campo "NOME" com o valor "Wellinne"
        And eu preencho o campo "CPF" com o valor "12345678910"
        And eu preencho o campo "TELEFONE" com o valor "(99) 99999-9999"
        And eu preencho no campo "EMAIL" com o valor "teste@gmail.com"
        And eu preencho o campo "SENHA" com o valor "12345678"
        And eu preencho o campo "CONFIRMAR SENHA" com o valor "12345678"
        And seleciono a opção "Salvar"
        Then o cadastrado não é realizado com sucesso
        And eu vejo uma mensagem de erro informando "Endereço inválido"
 
    Scenario: Cadastro mal sucedido por senha não preenchida
        Given estou na tela de "Cadastro"
        And não existe um usuário com o campo obrigatório "EMAIL" com o valor "teste@gmail.com" e o campo obrigatório "CPF" com o valor "12345678910"
        When eu preencho o campo "NOME" com o valor "Wellinne"
        And eu preencho o campo "CPF" com o valor "12345678910"
        And eu preencho o campo "TELEFONE" com o valor "(99) 99999-9999"
        And eu preencho no campo "EMAIL" com o valor "teste@gmail.com"
        And eu preencho o campo "ENDEREÇO" com o valor "rua 12, numero 34, Várzea, Recife"
        And eu preencho o campo "CONFIRMAR SENHA" com o valor "12345678"
        And seleciono a opção "Salvar"
        Then o cadastrado não é realizado com sucesso
        And eu vejo uma mensagem de erro informando "Senha inválida"

         Scenario: Cadastro mal sucedido por confirmação de senha não preenchida
        Given estou na tela de "Cadastro"
        And não existe um usuário com o campo obrigatório "EMAIL" com o valor "teste@gmail.com" e o campo obrigatório "CPF" com o valor "12345678910"
        When eu preencho o campo "NOME" com o valor "Wellinne"
        And eu preencho o campo "CPF" com o valor "12345678910"
        And eu preencho o campo "TELEFONE" com o valor "(99) 99999-9999"
        And eu preencho no campo "EMAIL" com o valor "teste@gmail.com"
        And eu preencho o campo "ENDEREÇO" com o valor "rua 12, numero 34, Várzea, Recife"
        And eu preencho o campo "SENHA" com o valor "12345678"
        And seleciono a opção "Salvar"
        Then o cadastrado não é realizado com sucesso
        And eu vejo uma mensagem de erro informando "Confirmação de senha inválida"
