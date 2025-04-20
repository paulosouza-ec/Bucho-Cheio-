Feature: Login de cliente 
As a cliente do estabelecimento 
I want to logar no sistema
So that eu possa acessar as funcionalidades internas do sistema como um usuário comum

# Cenário: Login bem-sucedido: senha e email corretos
Given  eu estou na página de login do site de delivery
When eu insiro meu email: "psgs@cin.ufpe.br" e senha "12345678" nos campos de login
And o email e senha consta como já anteriormente cadastrado no sistema
And confirmo a operação clicando em "login"
Then eu sou redirecionado para a página inicial do cardápio

# Cenário: Login mal-sucedido:  email inválido

  Given que eu estou na página de login do site de delivery
  And há a existência de um usuário cadastrado com o email "psgs@cin.ufpe.br"
  When eu preencho os campos com o email "ppssggss@cin.ufpe.br" e senha "12345678"
  And confirmo a operação clicando em "login"
  Then vejo a mensagem de erro "Email ou senha incorretos."

# Cenário: Login mal-sucedido: senha inválida

  Given que eu estou na página de login do site de delivery
  And há a existência de um usuário cadastrado com o email "psgs@cin.ufpe.br" e senha "12345678"
  When eu insiro a senha inválida "02345679" para o email "psgs@cin.ufpe.br"
  And confirmo a operação clicando em "login"
  Then vejo a mensagem de erro "Email ou senha incorretos."

# Cenário: Login mal-sucedido: campo de email vazio

  Given que eu estou na página de login do site de delivery
  and há a existência de um usuário cadastrado com o email "psgs@cin.ufpe.br" e senha "12345678"
  When no campo de preenchimento apenas digito o email "psgs@cin.ufpe.br" e deixo o campo senha em branco
  And Confirmo a operação clicando em "login"
  Then vejo as mensagens de erro "Insira seu email"
  And sou inapto a utilizar as funcionalidades do sistema

# Cenário: Login  mal-sucedido: campo de senha vazio

  Given que eu estou na página de login do site de delivery
  and há a existência de um usuário cadastrado com o email "psgs@cin.ufpe.br" e senha "12345678"
  When no campo de preenchimento apenas digito a senha "12345678" e deixo o campo de email em branco
  And Confirmo a operação clicando em "login"
  Then vejo as mensagens de erro "Insira  sua senha"
  And sou inapto a utilizar as funcionalidades do sistema


# Cenário: Login mal-sucedido: campo de senha e email vazios

  Given que eu estou na página de login do site de delivery
  and há a existência de um usuário cadastrado com o email "psgs@cin.ufpe.br" e senha "12345678"
  When o campo de preenchimento de email e senha permanecem vazios
  And Confirmo a operação clicando em "login"
  Then vejo as mensagens de erro "Insira sua senha" e "Insira  seu email"
  And sou inapto a utilizar as funcionalidades do sistema


# Cenário: Cliente faz o logout no sistema
  Given que estou na página de editar perfil, cardápio ou carrinho
  And há a existência de um usuário cadastrado com o email "psgs@cin.ufpe.br" e senha "12345678"
  And estou logado com o email "psgs@cin.ufpe.br" e senha "1234568"
  When pressiono o botão de sair da conta
  Then sou redirecionado para a página de login

