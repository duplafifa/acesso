
import React, { useState } from 'react';
import { AuthForm } from './components/AuthForm';
import { Background } from './components/Background';

const App: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(prev => !prev);
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden bg-black">
      {/* Dynamic Background with Logo Reference */}
      <Background />

      {/* Main Auth Container */}
      <div className="relative z-10 w-full max-w-md transition-all duration-500 transform">
        <div className="flex flex-col items-center mb-8">
          {/* Logo Placeholder - The user would place their actual logo here */}
          <div className="w-32 h-32 mb-4 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-red-600 to-purple-800 rounded-2xl blur-xl opacity-50 animate-glow"></div>
            <div className="relative z-10 text-center font-black italic text-2xl tracking-tighter leading-none">
              <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">DUPLA<br/>FIFA</span>
              <div className="text-[10px] text-green-400 mt-1 not-italic font-bold">tips</div>
            </div>
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight text-white text-center">
            {isLogin ? 'Bem-vindo de volta!' : 'Crie sua conta VIP'}
          </h1>
          <p className="text-gray-400 mt-2 text-sm text-center">
            {isLogin 
              ? 'Acesse os melhores palpites de FIFA do mercado.' 
              : 'Junte-se ao time de elite da Dupla FIFA Tips.'}
          </p>
        </div>

        <div className="glass p-8 rounded-3xl neon-border shadow-2xl">
          <AuthForm isLogin={isLogin} />
          
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="text-gray-400 text-sm">
              {isLogin ? 'Não tem uma conta?' : 'Já possui uma conta?'}
              <button 
                onClick={toggleAuthMode}
                className="ml-2 text-orange-400 font-bold hover:text-orange-300 transition-colors focus:outline-none"
              >
                {isLogin ? 'Cadastre-se' : 'Faça Login'}
              </button>
            </p>
          </div>
        </div>

        <footer className="mt-8 text-center text-gray-500 text-[10px] uppercase tracking-widest font-bold">
          &copy; {new Date().getFullYear()} DUPLA FIFA TIPS • TODOS OS DIREITOS RESERVADOS
        </footer>
      </div>
    </div>
  );
};

export default App;
