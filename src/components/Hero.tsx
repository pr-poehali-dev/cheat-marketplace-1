import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/20 to-black"></div>
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 animate-float">
          <Icon name="Skull" size={128} className="text-red-600" />
        </div>
        <div className="absolute bottom-40 right-20 w-24 h-24 animate-float" style={{ animationDelay: '1s' }}>
          <Icon name="Skull" size={96} className="text-red-600" />
        </div>
      </div>

      <div className="container relative z-10 px-4 text-center animate-fade-in">
        <div className="mb-8 inline-block">
          <div className="relative">
            <Icon name="Skull" size={120} className="text-red-600 animate-pulse-glow mx-auto mb-4" />
            <h1 className="text-7xl md:text-8xl font-bold text-white text-glow-red tracking-wider">
              RESOLVER
            </h1>
          </div>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
          Приватный чит для STALCRAFT EU/RU
        </p>
        
        <p className="text-lg md:text-xl text-red-500 mb-8 max-w-2xl mx-auto font-medium">
          Заработок валюты • Низкие цены • Приватный чат со стратегиями
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg box-glow-red font-rajdhani font-bold tracking-wide"
            onClick={() => window.open('https://t.me/resolverhack', '_blank')}
          >
            <Icon name="MessageCircle" size={24} className="mr-2" />
            Открыть бота
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-red-600 text-red-500 hover:bg-red-600/10 px-8 py-6 text-lg border-glow-red font-rajdhani font-bold tracking-wide"
            onClick={() => window.open('https://t.me/funnymindset', '_blank')}
          >
            <Icon name="ShoppingCart" size={24} className="mr-2" />
            Купить подписку
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-red-900/30 rounded-lg p-4 border-glow-red">
            <Icon name="Target" size={32} className="text-red-500 mx-auto mb-2" />
            <p className="text-sm text-gray-400">Aim + ESP</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-red-900/30 rounded-lg p-4 border-glow-red">
            <Icon name="DollarSign" size={32} className="text-red-500 mx-auto mb-2" />
            <p className="text-sm text-gray-400">Фарм валюты</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-red-900/30 rounded-lg p-4 border-glow-red">
            <Icon name="Shield" size={32} className="text-red-500 mx-auto mb-2" />
            <p className="text-sm text-gray-400">Защита от бана</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-red-600" />
      </div>
    </section>
  );
};

export default Hero;
