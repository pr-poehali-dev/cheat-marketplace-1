import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-black to-red-950/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 text-glow-red">
            Контакты
          </h2>
          <p className="text-xl text-gray-400">
            Свяжитесь с нами для покупки или получения поддержки
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-card/80 backdrop-blur-sm border-red-900/30 p-8 hover:border-red-600/50 transition-all hover:box-glow-red group">
            <div className="text-center">
              <div className="mb-4 p-4 bg-red-950/30 rounded-lg w-fit mx-auto group-hover:bg-red-900/40 transition-colors">
                <Icon name="Send" size={48} className="text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Telegram Канал</h3>
              <p className="text-gray-400 mb-4">Новости и обновления</p>
              <Button
                className="bg-red-600 hover:bg-red-700 text-white font-bold"
                onClick={() => window.open('https://t.me/resolverhack', '_blank')}
              >
                @resolverhack
              </Button>
            </div>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-red-900/30 p-8 hover:border-red-600/50 transition-all hover:box-glow-red group">
            <div className="text-center">
              <div className="mb-4 p-4 bg-red-950/30 rounded-lg w-fit mx-auto group-hover:bg-red-900/40 transition-colors">
                <Icon name="ShoppingCart" size={48} className="text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Покупка</h3>
              <p className="text-gray-400 mb-4">Приобретение подписки</p>
              <Button
                className="bg-red-600 hover:bg-red-700 text-white font-bold"
                onClick={() => window.open('https://t.me/funnymindset', '_blank')}
              >
                @funnymindset
              </Button>
            </div>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-red-900/30 p-8 hover:border-red-600/50 transition-all hover:box-glow-red group">
            <div className="text-center">
              <div className="mb-4 p-4 bg-red-950/30 rounded-lg w-fit mx-auto group-hover:bg-red-900/40 transition-colors">
                <Icon name="Globe" size={48} className="text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Форум</h3>
              <p className="text-gray-400 mb-4">Обсуждения и общение</p>
              <Button
                className="bg-red-600 hover:bg-red-700 text-white font-bold"
                onClick={() => window.open('https://resolverfoundhitbox.ru', '_blank')}
              >
                Перейти
              </Button>
            </div>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-red-950/40 to-red-900/20 border-red-800/50 p-8 text-center border-glow-red">
          <Icon name="Skull" size={80} className="text-red-500 mx-auto mb-6 animate-pulse-glow" />
          <h3 className="text-3xl font-bold text-white mb-4">
            Готов начать зарабатывать?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Присоединяйся к Resolver и получи доступ к самому выгодному читу для STALCRAFT. 
            Низкие цены, высокий заработок, приватное сообщество профессионалов.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg box-glow-red font-bold"
              onClick={() => window.open('https://t.me/resolverhack', '_blank')}
            >
              <Icon name="MessageCircle" size={24} className="mr-2" />
              Задать вопрос
            </Button>
            <Button
              size="lg"
              className="bg-white hover:bg-gray-100 text-black px-8 py-6 text-lg font-bold"
              onClick={() => window.open('https://t.me/funnymindset', '_blank')}
            >
              <Icon name="ShoppingCart" size={24} className="mr-2" />
              Купить сейчас
            </Button>
          </div>
        </Card>

        <footer className="mt-16 pt-8 border-t border-red-900/30 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Skull" size={24} className="text-red-600" />
            <span className="text-2xl font-bold text-white">RESOLVER</span>
          </div>
          <p className="text-gray-400 text-sm mb-2">
            Приватный чит для STALCRAFT EU/RU
          </p>
          <p className="text-gray-500 text-xs">
            stalcraft.su • 2025
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;