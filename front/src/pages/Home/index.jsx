import { useState, useEffect } from "react";
import "./style.css";
//import '@fortawesome/fontawesome-free/css/all.css';

import axios from 'axios';
import { Botao } from "../../components/Botao";
import { Navbar } from "../../components/Navbar";


export const Home = () => {
  const [selectedItemPrice, setSelectedItemPrice] = useState(0);
  const search = () => {
    const input = document.querySelector('[name="search"]');
    const searchTerm = input.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    console.log('Pesquisar:', searchTerm);

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      const name = card.querySelector('.name-item').textContent.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
      if (name.includes(searchTerm)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });

    document.getElementById('item-modal').style.display = 'none';
  }

    const [editarNome, setEditarNome] = useState('');
    const [items, setItems] = useState([]);
    const [idItem, setIdItem] = useState(0);
    const [ingredientes, setIngredientes] = useState('');
    const [editarIngredientes, setEditarIngredientes] = useState('');
    const [editarImagem, setEditarImagem] = useState('');
    const [adicionas, setAdicionais] = useState([]);
    const [editarPreco, setEditarPreco] = useState('');
    const [editar, setEditar] = useState(false);
    const [openSalvar, setOpenSalvar] = useState(false);
    const [openDeletar, setOpenDeletar] = useState(false);
    const handleOpenSalvar = () => setOpenSalvar(true);
    const handleCloseSalvar = () => setOpenSalvar(false);
    const handleOpenDeletar = () => setOpenDeletar(true);
    const handleCloseDeletar = () => setOpenDeletar(false);
    const [ehAdmin,setEhAdmin] = useState(Number(localStorage.getItem('@BuchoCheio:key'))===2)

    const adicionarItem = () => {
      axios.post(`http://localhost:3001/item`, {
        nome: 'Hamburguer', 
        ingredientes: 'Hamburguer, alface, tomate, queijo, pão', 
        imagem: 'https://cdn2.revistahoteis.com.br/wp-content/uploads/2022/05/Hilton-Barra_Barra-burguerTomas-RangelOK.jpg', 
        adicionais: ['Bacon, Maionese da Casa, Ovo, Cheddar'], 
        preco: '16.90'
      }).then((response) => {
        return window.location.reload();
      })
        .catch((response) => {
          alert(response);
        })
    }
    
    const salvarItems = () => {
      axios.put(`http://localhost:3001/item/${idItem}`, {
        nome: editarNome, ingredientes: editarIngredientes, imagem: editarImagem, adicionais: adicionas, preco: editarPreco
      }).then((response) => {
        return hideItemModal();
      })
        .catch((response) => {
          alert(response);
        })
    }

    const deletarItems = () => {
      axios.delete(`http://localhost:3001/item/${idItem}`).then((response) => {
        return window.location.reload( );
      })
        .catch((response) => {
          alert(response);
        })
    }

    useEffect(() => {
      axios.get(`http://localhost:3001/item`)
        .then((response) => {
          setItems(response.data);
        })
    }, [])

    useEffect(() => {
      if(idItem !== 0){
      axios.get(`http://localhost:3001/item/${idItem}`)
        .then((response) => {
          setIngredientes(response.data.ingredientes);
          setAdicionais(response.data.adicionais);
          setEditarIngredientes(response.data.ingredientes);
          setEditarNome(response.data.nome);
          setEditarImagem(response.data.imagem);
          setEditarPreco(response.data.preco);
        })
      }
    }, [idItem])

  function toggleClearIcon(event) {
    const input = event.target;
    const clearIcon = input.nextElementSibling;
    clearIcon.style.display = input.value ? "inline" : "none";
  }

  function clearSearch(event) {
    const input = event.target.previousElementSibling;
    input.value = "";
    toggleClearIcon(event);
    input.focus();
  }

  function checkForEnter(event) {
    search();
  }

  function showItemModal(event) {
    const card = event.currentTarget;
    const imageSrc = card.querySelector("img").src;
    const title = card.querySelector(".name-item").textContent;
    const priceElement = card.querySelector(".cost-item");
    setSelectedItemPrice(
      parseFloat(priceElement.textContent.replace("R$", "").trim())
    );
    document.getElementById("quantity").value = 1; // Reseta a quantidade para 1
    updateTotalPrice();
    const modal = document.getElementById("item-modal");
    modal.querySelector(".modal-image").src = imageSrc;
    modal.querySelector(".modal-title").textContent = title;
    modal.style.display = "block";
  }

  function hideItemModal() {
    document.getElementById("item-modal").style.display = "none";
  }

  function updateTotalPrice() {
    const quantity = parseInt(document.getElementById("quantity").value);
    const totalPrice = (quantity * selectedItemPrice).toFixed(2);
    document.getElementById("item-price").textContent = totalPrice;
  }

  function increaseQuantity() {
    const quantityInput = document.getElementById("quantity");
    const currentQuantity = parseInt(quantityInput.value);
    quantityInput.value = currentQuantity + 1;
    updateTotalPrice();
  }

  function decreaseQuantity() {
    const quantityInput = document.getElementById("quantity");
    const currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
      quantityInput.value = currentQuantity - 1;
    }
    updateTotalPrice();
  }

  return (
    <div className="main-bg">
      <Navbar />
      <section id="cardapio">
        <div className="main-content grid-one-content">
          <div id="heading-cardapio">
            <h2>Cardápio</h2>
            <div className="search-bar">
              <div className="search-input-wrapper">
                <i
                  className="fa fa-search search-icon"
                  onClick={search}
                ></i>
                <input
                  type="text"
                  placeholder="Busque por um item"
                  name="search"
                  onInput={toggleClearIcon}
                  onKeyUp={checkForEnter}
                />
                <i
                  className="fa fa-times clear-icon"
                  onClick={clearSearch}
                  style={{ display: "none" }}
                ></i>
              </div>
            </div>

            { ehAdmin && (
              <div style={{marginLeft: 18}}>
                <Botao 
                  width={150}
                  text='Gerenciar Cardápio'
                  backgroundColor='#FF9D01'
                  color='#FFF2DE'
                  backgroundColorHover='#FFF2DE'
                  colorHover='#FF9D01'
                  borderHover='2px solid #FF9D01'
                  onClick={() => setEditar(true)}
                />
              </div>
            )}
          </div>
          <div className="grid">
            {items.map((item, index) => (
            <article className="card" onClick={(target) => {showItemModal(target); setIdItem(item.id)} } key={Number(index)}>
              <img
                src={item.imagem}
                alt="Comida 1"
              />
              {editar ? (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h3 className="name-item">{item.nome}</h3>
                  <span class="material-symbols-outlined">edit</span>
                </div>
              ) : <h3 className="name-item">{item.nome}</h3>}
              <span className="cost-item">R$ {item.preco}</span>
            </article>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <div id="item-modal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={hideItemModal}>
            &times;
          </span>
          <img className="modal-image" src="" alt="Item Imagem" />
          <div className="modal-info">
            <h3 className="modal-title">Nome do item</h3>
            <p className="modal-ingredients">Ingredientes: </p>
            {editar ? 
            <input type="text" className="modal-ingredients-list" value={editarIngredientes} onChange={(e) => setEditarIngredientes(e.target.value)}/> :
            <div className="modal-ingredients-list">{ingredientes}</div>
            }
            <div className="modal-extras">
              <label htmlFor="extra">Adicionais:</label>
            {adicionas.map((item,index)=>(
              <div key={item} className="checkbox-wrapper">
                <input key={item} type="checkbox" name="extra1" id="extra1" />
                <label htmlFor="extra1">{item}</label>
              </div>
              ))}
            </div>
            <div className="modal-observations">
              <label htmlFor="observations">Observações:</label>
              <textarea id="observations" name="observations"></textarea>
            </div>
            <div className="modal-footer">
              <div className="modal-quantity">
                <button type="button" onClick={decreaseQuantity}>
                  -
                </button>
                <input
                  type="number"
                  id="quantity"
                  value="1"
                  min="1"
                  onInput={updateTotalPrice}
                />
                <button type="button" onClick={increaseQuantity}>
                  +
                </button>
              </div>
              <button type="button" className="button-add">
                Adicionar (R$ <span id="item-price">0,00</span>)
              </button>
            </div>
            { editar && (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 5}}>
              <Botao
                  width={120}
                  text='Deletar'
                  backgroundColor='#DD1C1A'
                  color='#FFF2DE'
                  backgroundColorHover='#FFF2DE'
                  colorHover='#DD1C1A'
                  borderHover='2px solid #DD1C1A'
                  onClick={() => {
                    deletarItems();
                  }}
                />

                <Botao
                  width={130}
                  text='Salvar'
                  backgroundColor='#FF9D01'
                  color='#FFF2DE'
                  backgroundColorHover='#FFF2DE'
                  colorHover='#FF9D01'
                  borderHover='2px solid #FF9D01'
                  onClick={() => {
                    salvarItems();
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      { editar && (
      <div className="Container-buttons">
              <Botao
                  width={150}
                  text='Adicionar Item'
                  backgroundColor='#FF9D01'
                  color='#FFF2DE'
                  backgroundColorHover='#FFF2DE'
                  colorHover='#FF9D01'
                  borderHover='2px solid #FF9D01'
                  onClick={() => {
                    adicionarItem();
                  }}
                />

              <div style={{ marginLeft: 30 ,marginRight: 300}}>
                <Botao 
                  width={150}
                  text='Cancelar'
                  backgroundColor='transparent'
                  color='#FF9D01'
                  border='2px solid #FF9D01'
                  backgroundColorHover='#FF9D01'
                  colorHover='#FFF2DE'
                  borderHover='2px solid #FF9D01'
                  onClick={() => setEditar(false)}
                />
            </div>
          </div>
      )}
    </div>
  );
}
