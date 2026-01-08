import React from 'react';
import { Company } from '../types';

type Props = {
  companies: Company[];
  updateCompany: (c: Company) => void;
};

export const Dashboard: React.FC<Props> = ({ companies }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Panel</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {companies.length === 0 ? (
          <div className="p-6 bg-white rounded shadow">No hay empresas todavía.</div>
        ) : companies.map(c => (
          <div key={c.id} className="p-4 bg-white rounded shadow flex justify-between items-center">
            <div>
              <div className="font-medium">{c.name}</div>
              <div className="text-sm text-slate-500">{c.address}</div>
            </div>
            <div className="text-sm font-semibold" style={{ color: c.color }}>{c.type}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
