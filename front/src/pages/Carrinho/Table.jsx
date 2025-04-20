import React from 'react';

const Table = ({data}) => {
    return (
        <tr>
                          <td>
                              <div className="product">
                                  <img src="https://picsum.photos/100/120" alt=""></img>
                                  <div className="info">
                                      <div className="name">Nome do Hamburguer</div>
                                      
                                  </div> 
                              </div>
                          </td>
                          <td>R$ 40</td>
                          <td>
                              <div className="qty">
                                  <button><i className="bx bx-minus"></i></button>
                                  <span>2</span>
                                  <button><i className="bx bx-plus"></i></button>
                              </div>
                          </td>
                          <td>R$ 100</td>
                          <td>
                              <button className="remover"><i className="bx bx-x"></i></button>
                          </td>
                        </tr>
                        
    );
};

export default Table;