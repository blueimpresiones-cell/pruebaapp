import React, { useState } from 'react';

type Props = {
  onLogin: (username: string) => void;
  LogoComponent?: React.FC<{ className?: string }>;
};

export const Login: React.FC<Props> = ({ onLogin, LogoComponent }) => {
  const [username, setUsername] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) onLogin(username.trim());
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow">
        <div className="mb-4 flex justify-center">
          {LogoComponent ? <LogoComponent /> : <h1 className="text-2xl font-bold">Baudi</h1>}
        </div>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm text-slate-600 mb-1">Usuario</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="ej: juan.perez" />
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
