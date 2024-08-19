import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './OrderSearch.css';

const OrderSearch = () => {
  const orders = {
    pendentes: [
      {
        id: 1,
        name: 'José da Silva',
        cep: '13400-000',
        cidade: 'Piracicaba',
        estado: 'SP',
        endereco: 'Rua sem saída nº 0',
        produto: 'Câmera de alta definição',
        sku: 123654,
        quantidade: '12',
        custo: 'R$ 40.000,00',
        desconto: 'R$ 5.000,00',
        valor: 'R$ 50.000,00',
        valorTotal: 'R$ 45.000,00',
        status: 'Pendente',
        descricao: 'Câmera de alta definição',
        imagem: 'camera-infravermelho-hdcvi-4mp-vhd-3430-b-g6-dir.png',
      },
    ],
    concluidos: [
      {
        id: 2,
        name: 'Maria Severina',
        cep: '13400-999',
        cidade: 'Passos',
        estado: 'MG',
        endereco: 'Rua sem saída nº 0',
        produto: 'Câmera de entrada',
        sku: 7891011,
        quantidade: '1',
        custo: 'R$ 18,00',
        desconto: 'R$ 2,00',
        valor: 'R$ 20,00',
        valorTotal: 'R$ 18,00',
        status: 'Concluído',
        descricao: 'Câmera de entrada',
        imagem: 'camera-infravermelho-hdcvi-4mp-vhd-3430-b-g6-dir.png',
      },
      {
        id: 3,
        name: 'Renato Louro',
        cep: '13400-896',
        cidade: 'Limeira',
        estado: 'SP',
        endereco: 'Rua sem saída nº 0',
        produto: 'Câmera profissional',
        sku: 131415,
        quantidade: '12',
        custo: 'R$ 500,00',
        desconto: 'R$ 60,00',
        valor: 'R$ 560,00',
        valorTotal: 'R$ 500,00',
        status: 'Concluído',
        descricao: 'Câmera profissional',
        imagem: 'camera-infravermelho-hdcvi-4mp-vhd-3430-b-g6-dir.png',
      },
    ],
  };

  const [selectedStatus, setSelectedStatus] = useState('pendentes');
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [expanded, setExpanded] = useState(false);

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const handleSearch = () => {
    const result = orders[selectedStatus];
    setFilteredOrders(result);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="order-search-page">
      <div className="order-search-container">
        <h2 className="title">Busca de Pedidos</h2>
        <div>
          <label className="label" htmlFor="order-status">
            Selecione o Status:
          </label>
          <select
            className="select"
            id="order-status"
            value={selectedStatus}
            onChange={handleStatusChange}
          >
            <option value="pendentes">Pedidos Pendentes</option>
            <option value="concluidos">Pedidos Concluídos</option>
          </select>
          <button className="button" onClick={handleSearch}>
            Buscar
          </button>
        </div>

        <div className="results">
          <h3>Resultados:</h3>
          {filteredOrders.length > 0 ? (
            <>
              <table className="order-table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>CEP</th>
                    <th>Cidade</th>
                    <th>Estado</th>
                    <th>Endereço</th>
                    <th>Produto</th>
                    <th>SKU</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.name}</td>
                      <td>{order.cep}</td>
                      <td>{order.cidade}</td>
                      <td>{order.estado}</td>
                      <td>{order.endereco}</td>
                      <td>
                        <img
                          src={order.imagem}
                          alt={order.produto}
                          className="product-image"
                        />
                        {order.produto}
                      </td>
                      <td>{order.sku}</td>
                      <td>{order.quantidade}</td>
                      <td>{order.valor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="expand-icon-container">
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="expand-icon"
                  onClick={handleExpandClick}
                />
              </div>

              {expanded && (
                <table className="order-details">
                  <thead>
                    <tr>
                      <th>Descrição</th>
                      <th>Custo</th>
                      <th>Desconto</th>
                      <th>Valor Total</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredOrders.map((order) => (
                      <tr key={order.id}>
                        <td>{order.descricao}</td>
                        <td>{order.custo}</td>
                        <td>{order.desconto}</td>
                        <td>{order.valorTotal}</td>
                        <td>{order.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </>
          ) : (
            <p>Nenhum pedido encontrado.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderSearch;
