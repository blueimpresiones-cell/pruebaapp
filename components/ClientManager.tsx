import React from 'react';
import { Company, ObraSubtype, CompanyType } from '../types';

type Props = {
  companies: Company[];
  updateCompany: (c: Company) => void;
  addCompany: (name: string, address: string, type: CompanyType, subtypes?: ObraSubtype[], extraData?: any) => void;
  deleteCompany: (id: string) => void;
};

export const ClientManager: React.FC<Props> = ({ companies, addCompany, deleteCompany }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Clientes</h2>
        <button onClick={() => addCompany(`Cliente ${Date.now()}`, 'Sin dirección', 'INDUSTRIA')} className="bg-indigo-600 text-white px-3 py-2 rounded">Nuevo</button>
      </div>

      <div className="grid gap-3">
        {companies.map(c => (
          <div key={c.id} className="p-4 bg-white rounded shadow flex justify-between items-center">
            <div>
              <div className="font-medium">{c.name}</div>
              <div className="text-xs text-slate-500">{c.phone}</div>
            </div>
            <button onClick={() => deleteCompany(c.id)} className="text-rose-600">Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientManager;
