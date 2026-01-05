import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'Как долго длятся баны?',
      answer: 'Вы будете забанены от 6, 12 или 24 часов до 4 дней, в зависимости от различных факторов. Чит детект и используется для заработка валюты, вы окупите подписку буквально за пару дней, передавая вещи на второй аккаунт через тактики, описанные в приватном чате.'
    },
    {
      question: 'Почему цены такие низкие?',
      answer: 'Мы фокусируемся на массовом рынке и заработке через валюту, а не на завышенных ценах. Resolver — это самый доступный чит с полным функционалом аима среди конкурентов.'
    },
    {
      question: 'Что такое приватный чат?',
      answer: 'После покупки подписки вы получаете доступ к закрытому Telegram-чату, где делимся стратегиями заработка, безопасной продажи валюты и контактами проверенных скупщиков.'
    },
    {
      question: 'Как быстро я получу доступ?',
      answer: 'Сразу после оплаты. Обратитесь к @funnymindset для покупки, получите файл чита и инструкции. Доступ в приватный чат предоставляется в течение 5 минут.'
    },
    {
      question: 'Поддерживаются ли EU и RU сервера?',
      answer: 'Да, Resolver работает на обоих серверах STALCRAFT — EU и RU. Все функции доступны без ограничений.'
    },
    {
      question: 'Как часто выходят обновления?',
      answer: 'Мы обновляем чит после каждого патча игры в течение 2-6 часов. Поддержка работает 24/7, и вы всегда будете иметь актуальную версию.'
    },
    {
      question: 'Могу ли я вернуть деньги?',
      answer: 'Возвраты не предусмотрены из-за специфики цифрового продукта. Однако мы гарантируем работоспособность чита и оперативную поддержку.'
    },
    {
      question: 'Как связаться с поддержкой?',
      answer: 'Используйте наш Telegram бот @resolverhack для технических вопросов или @funnymindset для покупки и коммерческих вопросов.'
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-gradient-to-b from-red-950/10 to-black">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 text-glow-red">
            Вопросы и ответы
          </h2>
          <p className="text-xl text-gray-400">
            Ответы на самые частые вопросы о Resolver
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card/80 backdrop-blur-sm border-red-900/30 rounded-lg px-6 hover:border-red-600/50 transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <AccordionTrigger className="text-white hover:text-red-500 text-left py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;