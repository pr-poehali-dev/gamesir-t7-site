import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Index = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: 'Zap',
      title: 'Холловские триггеры',
      description: 'Мгновенный отклик 0.5мс для киберспортивного преимущества'
    },
    {
      icon: 'Gamepad2',
      title: 'Программируемые кнопки',
      description: 'Настройте каждую кнопку под свой стиль игры'
    },
    {
      icon: 'Vibrate',
      title: 'Продвинутая вибрация',
      description: 'HD вибрация для максимального погружения'
    },
    {
      icon: 'Cable',
      title: 'USB-C подключение',
      description: 'Стабильное проводное соединение без задержек'
    }
  ];

  const specs = [
    { label: 'Отклик', value: '0.5ms', icon: 'Timer' },
    { label: 'Совместимость', value: 'Xbox', icon: 'MonitorPlay' },
    { label: 'Подключение', value: 'USB-C', icon: 'Cable' },
    { label: 'Вибрация', value: 'HD', icon: 'Vibrate' },
    { label: 'Кнопки', value: 'Программируемые', icon: 'Settings2' },
    { label: 'Корпус', value: 'Прозрачный', icon: 'Eye' }
  ];

  const reviews = [
    {
      name: 'Алексей',
      avatar: 'A',
      rating: 5,
      text: 'Лучший геймпад для киберспорта! Отклик просто космический, выиграл турнир.',
      game: 'Apex Legends'
    },
    {
      name: 'Мария',
      avatar: 'M',
      rating: 5,
      text: 'Прозрачный корпус выглядит невероятно. Подсветка стиков — огонь!',
      game: 'Fortnite'
    },
    {
      name: 'Дмитрий',
      avatar: 'Д',
      rating: 5,
      text: 'Эргономика на высоте, руки не устают даже после 8 часов игры.',
      game: 'Warzone'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden px-4 py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        
        <div className="container relative mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm tracking-wider">
                  DESIGNED FOR XBOX
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                GameSir
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-glow-pulse">
                  T7
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
                Проводной геймпад с холловскими триггерами и прозрачным корпусом для максимальной точности
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/50">
                  <Icon name="ShoppingCart" className="mr-2" size={20} />
                  Купить сейчас
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                  <Icon name="Play" className="mr-2" size={20} />
                  Смотреть обзор
                </Button>
              </div>
            </div>
            
            <div className="relative animate-slide-up">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 blur-3xl" />
              <img 
                src="https://cdn.poehali.dev/files/58180a96-04b9-4f96-8f6a-a6cb5d33d21c.png"
                alt="GameSir T7 Controller"
                className="relative w-full max-w-2xl mx-auto drop-shadow-2xl animate-glow-pulse"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/50 backdrop-blur">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Характеристики
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {specs.map((spec, index) => (
              <Card 
                key={index} 
                className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 bg-card/80 backdrop-blur"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={spec.icon} size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">{spec.label}</div>
                    <div className="text-xl font-bold">{spec.value}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Особенности
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16">
            Технологии, которые дают преимущество
          </p>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeFeature === index
                      ? 'border-primary shadow-lg shadow-primary/20 bg-primary/5'
                      : 'hover:border-primary/30'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      activeFeature === index ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'
                    }`}>
                      <Icon name={feature.icon} size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="relative">
              <div className="sticky top-8">
                <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
                  <img 
                    src="https://cdn.poehali.dev/files/7a35a8df-9b94-45d7-b73a-90d46569cf46.png"
                    alt="GameSir T7 Features"
                    className="relative w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/50 backdrop-blur">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Отзывы геймеров
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16">
            Что говорят профессионалы
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12 border-2 border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-primary font-bold">
                        {review.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold">{review.name}</div>
                      <div className="text-sm text-muted-foreground">{review.game}</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-primary fill-primary" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    "{review.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Готов к победе?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Получи киберспортивное преимущество с GameSir T7. 
              Доставка по всей России за 2-3 дня.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">4,990₽</div>
                <div className="text-sm text-muted-foreground line-through">5,990₽</div>
              </div>
              
              <Button size="lg" className="text-xl px-12 py-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-xl shadow-primary/30">
                <Icon name="ShoppingBag" className="mr-2" size={24} />
                Заказать со скидкой
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={20} className="text-primary" />
                Гарантия 12 месяцев
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Truck" size={20} className="text-primary" />
                Бесплатная доставка
              </div>
              <div className="flex items-center gap-2">
                <Icon name="RotateCcw" size={20} className="text-primary" />
                Возврат 14 дней
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border/50 bg-card/30 backdrop-blur">
        <div className="container mx-auto text-center text-muted-foreground">
          <div className="flex justify-center gap-6 mb-6">
            <Button variant="ghost" size="sm">
              <Icon name="Youtube" size={20} />
            </Button>
          </div>
          <p className="text-sm">
            © 2024 GameSir. Designed for champions.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;