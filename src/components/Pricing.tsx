import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Pricing = () => {
  const plans = [
    {
      name: '7 Дней',
      price: '500₽',
      period: 'неделя',
      features: [
        'Все функции чита',
        'AimBot + ESP',
        'Просветы артефактов',
        'Фарм валюты',
        'Доступ в приватный чат',
        'Стратегии продажи',
        'Свои скупщики',
        'Обновления 24/7'
      ],
      popular: false
    },
    {
      name: '30 Дней',
      price: '1000₽',
      period: 'месяц',
      features: [
        'Все функции чита',
        'AimBot + ESP',
        'Просветы артефактов',
        'Фарм валюты',
        'VIP доступ в приватный чат',
        'Эксклюзивные стратегии продажи',
        'Прямые скупщики',
        'Обновления 24/7',
        'VIP поддержка'
      ],
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-red-950/10 to-black">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 text-glow-red">
            Цены
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Самые низкие цены среди конкурентов с аимом
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-card/80 backdrop-blur-sm p-8 ${
                plan.popular
                  ? 'border-red-600 border-2 box-glow-red scale-105'
                  : 'border-red-900/30'
              } hover:border-red-600/50 transition-all duration-300 animate-fade-in`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  ПОПУЛЯРНЫЙ
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-red-500">{plan.price}</span>
                </div>
                <p className="text-gray-400">за {plan.period}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-300">
                    <Icon name="Check" size={20} className="text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? 'bg-red-600 hover:bg-red-700 box-glow-red'
                    : 'bg-red-700 hover:bg-red-800'
                } text-white font-bold`}
                size="lg"
                onClick={() => window.open('https://t.me/funnymindset', '_blank')}
              >
                Купить
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            ⚠️ Возможны баны от 6/12/24 часов до 4 дней
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;