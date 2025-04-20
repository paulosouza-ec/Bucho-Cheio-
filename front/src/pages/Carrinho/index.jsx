import React from 'react';
import './styles.scss'
import Table from './Table';
import { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import {PopUp} from '../../components/PopUp';



const hambuguer = {
    nome: 'produto',
    preco: 'preco',
    quantidade: 'quantidade'
}; 


export const Carrinho = () => {
    const [car,setCar] = useState([1]);
    const [openFinalizar,setOpenFinalizar] = useState(false);

    const removerItem = () => {
        //removerItem
    }
    const endPedido = () => setOpenFinalizar(true);
    const endlessPedido = () => setOpenFinalizar(false);
    const finalizarPedido = () =>{
        return window.location.replace('/home');
    }
  return (
   <>
    <Navbar></Navbar>
      <main>
          <div className="page-title">Seu Carrinho</div>
          <div className="content">
            <PopUp
                titulo = 'Sua pedido foi realizado com sucesso!'
                open={openFinalizar}
                handleClose={endlessPedido}
                aparecebotaook
                onClickButtonSim={()=>finalizarPedido()}
                onClickButtonNao={()=>endlessPedido()}
            />
              <section>
                  <table>
                      <thead>
                          <tr>
                              <th>Hamburger</th>
                              <th>Preço</th>
                              <th>Quantidade</th>
                              <th>Total</th>
                              <th>Remover</th> 
                          </tr>
                      </thead>
                      <tbody>
                        {car.map((item) => (<Table data={item}></Table>))}
                        {car.length === 0 && (
                            <tr>
                                <td colSpan={'5'}>Carrinho de compras vazio!
                                    <button className='botaoVazio' onClick={() => {return window.location.replace('/home')}}>Escolha seu Hamburger
                                    </button>
                                </td>

                            </tr>
                        ) }
                      </tbody>
                  </table>
              </section>
              <aside>
                  <div className="boxResumo">
                      <header>Resumo do Pedido</header>
                      <div className="info">
                          <div><span>Sub-Total</span><span>R$ 120</span></div>
                          <div><span>Frete</span><span>Grátis</span></div>
                          <div><button>Adicionar Cupom de Desconto<i className="bx bx-right-arrow-alt"></i></button></div>
                      </div>
                      <footer>
                          <span>Total</span>
                          <span>R$ 200</span>
                      </footer>
                  </div>
                  <button onClick={() => endPedido()}>Finalizar Compra</button>
              </aside>
          </div>
      </main>
   </>
  );
}


