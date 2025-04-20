Feature: Finalizar pedido
    As a Cliente 
    I want to finalizar pedido
    So that para receber os itens selecionados

    Scenario: Finalizar um pedido com sucesso
    Given estou na pagina de pedidos
    And seleciono a forma de pagamento
    When escolho a opção "finalizar pedido"
    Then aparece uma mensagem de confirmação do pedido

 

    Scenario: Remover item 
    Given estou na pagina de pedidos
    When escolho a opção "remover"
    Then aparece uma mensagem de confirmação de remoção
    And ao confirma a exclusão o item selecionado deve ser excluido 

 

    Scenario: Adicionar novo item
    Given estou na pagina de pedidos
    When escolho ver cardápio
    Then retorno para página cardápio

   

    



