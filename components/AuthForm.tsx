
import React, { useState } from 'react';

interface AuthFormProps {
  isLogin: boolean;
}

export const AuthForm: React.FC<AuthFormProps> = ({ isLogin }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {!isLogin && (
        <div className="space-y-1">
          <label className="text-xs font-bold text-gray-400 uppercase ml-1">Nome Completo</label>
          <input
            type="text"
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all"
            placeholder="Ex: João Silva"
          />
        </div>
      )}

      <div className="space-y-1">
        <label className="text-xs font-bold text-gray-400 uppercase ml-1">E-mail</label>
        <input
          type="email"
          required
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all"
          placeholder="seu@email.com"
        />
      </div>

      <div className="space-y-1">
        <div className="flex justify-between items-center ml-1">
          <label className="text-xs font-bold text-gray-400 uppercase">Senha</label>
          {isLogin && (
            <a href="#" className="text-[10px] font-bold text-orange-400 hover:text-orange-300 uppercase">Esqueceu?</a>
          )}
        </div>
        <input
          type="password"
          required
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/50 transition-all"
          placeholder="••••••••"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-orange-600 via-red-600 to-purple-800 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-orange-500/20 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed group"
      >
        {loading ? (
          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            <span>{isLogin ? 'Entrar na Plataforma' : 'Criar Conta VIP'}</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </>
        )}
      </button>

      {isLogin && (
        <div className="flex items-center space-x-3 mt-4">
          <div className="flex-1 h-[1px] bg-white/10"></div>
          <span className="text-[10px] text-gray-500 font-bold uppercase">Ou entre com</span>
          <div className="flex-1 h-[1px] bg-white/10"></div>
        </div>
      )}

      {isLogin && (
        <div className="grid grid-cols-2 gap-4">
          <button type="button" className="flex items-center justify-center space-x-2 bg-white/5 border border-white/10 py-3 rounded-xl hover:bg-white/10 transition-colors">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
            <span className="text-xs font-bold">Google</span>
          </button>
          <button type="button" className="flex items-center justify-center space-x-2 bg-white/5 border border-white/10 py-3 rounded-xl hover:bg-white/10 transition-colors">
            <img src="https://www.svgrepo.com/show/303114/facebook-3.svg" className="w-5 h-5" alt="Facebook" />
            <span className="text-xs font-bold">Facebook</span>
          </button>
        </div>
      )}
    </form>
  );
};
