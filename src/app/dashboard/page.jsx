import React from "react";
import axios from "axios";

const loadCustomers = async () => {
  const { data } = await axios.get(
    "http://localhost:3000/api/dashboard/customers"
  );

  return data;
};

const Dashboard = async () => {
  const customers = await loadCustomers();
  console.log(customers);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center">
        Tabla de clientes - Préstamos
      </h1>

      <table className="table-auto w-full whitespace-no-wrap border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-center py-2">Nombre</th>
            <th className="text-center py-2">Apellido</th>
            <th className="text-center py-2">Telfono</th>
            <th className="text-center py-2">Prestamo</th>
            <th className="text-center py-2">Porcentaje</th>
            <th className="text-center py-2">Ganancia Mensual</th>
            <th className="text-center py-2">Fecha del Prestamo</th>
            <th className="text-center py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr className="hover:bg-gray-200">
            <td className="text-center py-2">{customer.name}</td>
            <td className="text-center py-2">{customer.lastname}</td>
            <td className="text-center py-2">{customer.phone}</td>
            <td className="text-center py-2">{customer.loan}$</td>
            <td className="text-center py-2">{customer.loan_percentage}%</td>
            <td className="text-center py-2">{customer.loan*(customer.loan_percentage/100)}$</td>
            <td className="text-center py-2">{customer.loan_date}</td>
            <td className="text-center py-2">Pendiente</td>
            <td className="text-center py-2">Ver Más</td>
          </tr>
          ))}
          {/* <tr className="hover:bg-gray-200">
            <td className="text-center py-2">Adrian</td>
            <td className="text-center py-2">Moreno</td>
            <td className="text-center py-2">04241457926</td>
            <td className="text-center py-2">500$</td>
            <td className="text-center py-2">20%</td>
            <td className="text-center py-2">100$</td>
            <td className="text-center py-2">29/10/2024</td>
            <td className="text-center py-2">Pendiente</td>
            <td className="text-center py-2">Ver Más</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
