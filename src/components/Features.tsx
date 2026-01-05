import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: 'Target',
      title: 'AimBot & ESP',
      description: 'Точный аим и полная информация о противниках на экране'
    },
    {
      icon: 'DollarSign',
      title: 'Фарм валюты',
      description: 'Эффективный заработок игровой валюты для продажи'
    },
    {
      icon: 'Handshake',
      title: 'Скупщики валюты',
      description: 'Возможность продать валюту скупщикам в приватном чате'
    },
    {
      icon: 'Gem',
      title: 'Поиск артефактов',
      description: 'Автоматическое обнаружение ценных артефактов'
    },
    {
      icon: 'Zap',
      title: 'Быстрый фарм',
      description: 'Ускоренный сбор ресурсов и выполнение заданий'
    },
    {
      icon: 'Eye',
      title: 'ESP игроков',
      description: 'Информация о здоровье, дистанции и инвентаре игроков'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gradient-to-b from-black to-red-950/10">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 text-glow-red">
            Возможности
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Полный набор функций для доминирования в STALCRAFT и эффективного заработка
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-card/80 backdrop-blur-sm border-red-900/30 p-6 hover:border-red-600/50 transition-all duration-300 hover:box-glow-red group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-red-950/30 rounded-lg group-hover:bg-red-900/40 transition-colors">
                  <Icon name={feature.icon as any} size={48} className="text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;