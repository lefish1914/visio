import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import './OrderSearch.css';

const OrderSearch = () => {
  const orders = {
    pendentes: [
      {
        numeroPedido: '1646546546456',
        produto: {
            nome: 'camera',
            sku: 123654,
            quantidade: '12',
            valor: 'R$ 50.000,00',
            image: 'camera-infravermelho-hdcvi-4mp-vhd-3430-b-g6-dir.png'
          },
        name: 'José da Silva',
        cep: '13400-000',
        cidade: 'Piracicaba',
        estado: 'SP',
        endereco: 'Rua sem saída nº 0',
        
      },
    ],
    concluidos: [
      {
        numeroPedido: '4564654564664564',
        produto: {
            nome: 'Vídeo Porteiro',
            sku: 7891011,
            quantidade: '1',
            valor: 'R$ 20,00',
            image: 'ALLO-WT7-2.png'
          },
        name: 'Maria Severina',
        cep: '13400-999',
        cidade: 'Passos',
        estado: 'MG',
        endereco: 'Rua sem saída nº 0',
        
      },
    ],
  };

  const [selectedStatus, setSelectedStatus] = useState('pendentes');
  const [filteredOrders, setFilteredOrders] = useState([]);

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const handleSearch = () => {
    const result = orders[selectedStatus];
    setFilteredOrders(result);
  };

  const handleCopySKU = (sku) =>{
    navigator.clipboard.writeText(sku);
    alert(`Sku ${sku} copiado para a área de transferência!`)
  }

  return (
    <div className="container">
      <h2 className="title">Busca de Pedidos</h2>
      <div>
        <label className="label" htmlFor="order-status">Selecione o Status:</label>
        <select
          className="select"
          id="order-status"
          value={selectedStatus}
          onChange={handleStatusChange}
        >
          <option value="pendentes">Pedidos Pendentes</option>
          <option value="concluidos">Pedidos Concluídos</option>
        </select>
        <button className="button" onClick={handleSearch}>Buscar</button>
      </div>

      <div className="results">
        <h3>Resultados:</h3>
        {filteredOrders.length > 0 ? (
          <table className="order-table">
            <thead>
              <tr>
                <th>NUMERO DO PEDIDO</th>
                <th>Produto</th>
                <th>Nome</th>
                <th>CEP</th>
                <th>Cidade</th>
                <th>Estado</th>
                <th>Endereço</th>
                <th>SKU</th>
                <th>Quantidade</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.numeroPedido}>
                  <td>{order.numeroPedido}</td>
                  <td>
                    <img src={order.produto.image} alt={order.produto.nome} className="product-image" />
                    {order.produto.nome}
                  </td>
                  <td>{order.name}</td>
                  <td>{order.cep}</td>
                  <td>{order.cidade}</td>
                  <td>{order.estado}</td>
                  <td>{order.endereco}</td>
                  <td>{order.produto.sku}
                  <FontAwesomeIcon
                  icon={faCopy}
                  className='copy-icon'
                  onClick={() => handleCopySKU(order.produto.sku)}
                  />
                  </td>
                  <td>{order.produto.quantidade}</td>
                  <td>{order.produto.valor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Nenhum pedido encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default OrderSearch;
