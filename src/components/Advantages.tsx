import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

const Advantages = () => {
  const advantages = [
    {
      icon: 'DollarSign',
      title: 'Заработок валюты',
      description: 'Эффективные методы фарма для максимальной прибыли. Получайте игровую валюту быстрее конкурентов.'
    },
    {
      icon: 'TrendingDown',
      title: 'Низкие цены',
      description: 'Самые доступные тарифы среди всех читов с аимом на рынке. Качество без переплаты.'
    },
    {
      icon: 'Users',
      title: 'Приватный чат',
      description: 'Доступ к закрытому сообществу с проверенными стратегиями продажи и передачи валюты.'
    },
    {
      icon: 'Handshake',
      title: 'Свои скупщики',
      description: 'Прямые контакты проверенных скупщиков для быстрой и безопасной продажи валюты.'
    },
    {
      icon: 'Shield',
      title: 'Минимальный риск',
      description: 'Оптимизированные настройки для снижения вероятности обнаружения античитом.'
    },
    {
      icon: 'Clock',
      title: 'Обновления 24/7',
      description: 'Постоянная поддержка и обновления после каждого патча игры. Всегда актуальная версия.'
    }
  ];

  return (
    <section id="advantages" className="py-20 px-4 bg-gradient-to-b from-black to-red-950/10">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 text-glow-red">
            Преимущества
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Почему Resolver — лучший выбор для заработка в STALCRAFT
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <Card
              key={index}
              className="bg-card/80 backdrop-blur-sm border-red-900/30 p-6 hover:border-red-600/50 transition-all duration-300 hover:box-glow-red group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col">
                <div className="mb-4 p-3 bg-red-950/30 rounded-lg w-fit group-hover:bg-red-900/40 transition-colors">
                  <Icon name={advantage.icon as any} size={40} className="text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-red-950/40 to-red-900/20 border-red-800/50 p-8 text-center border-glow-red">
            <Icon name="Skull" size={64} className="text-red-500 mx-auto mb-4 animate-pulse-glow" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Присоединяйся к сообществу профессионалов
            </h3>
            <p className="text-gray-300 mb-6">
              Более 500+ активных пользователей уже зарабатывают с Resolver. Получи доступ к эксклюзивным стратегиям и проверенным скупщикам.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="bg-black/30 px-6 py-3 rounded-lg">
                <p className="text-red-500 font-bold text-2xl">500+</p>
                <p className="text-gray-400 text-sm">Активных пользователей</p>
              </div>
              <div className="bg-black/30 px-6 py-3 rounded-lg">
                <p className="text-red-500 font-bold text-2xl">24/7</p>
                <p className="text-gray-400 text-sm">Поддержка</p>
              </div>
              <div className="bg-black/30 px-6 py-3 rounded-lg">
                <p className="text-red-500 font-bold text-2xl">100%</p>
                <p className="text-gray-400 text-sm">Обновлений</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
