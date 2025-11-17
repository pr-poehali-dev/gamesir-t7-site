import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Icon from '@/components/ui/icon';

interface OrderDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function OrderDialog({ open, onOpenChange }: OrderDialogProps) {
  const [paymentMethod, setPaymentMethod] = useState('card');

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Оформление заказа</DialogTitle>
          <DialogDescription>
            GameSir T7 — 2,899₽
          </DialogDescription>
        </DialogHeader>

        <form className="space-y-6 mt-4">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <Icon name="User" size={20} className="text-primary" />
              Контактная информация
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Имя *</Label>
                <Input id="firstName" placeholder="Иван" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Фамилия *</Label>
                <Input id="lastName" placeholder="Иванов" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Телефон *</Label>
              <Input id="phone" type="tel" placeholder="+7 (900) 123-45-67" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="example@mail.ru" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <Icon name="MapPin" size={20} className="text-primary" />
              Адрес доставки
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="country">Страна *</Label>
                <Input id="country" placeholder="Россия" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">Город *</Label>
                <Input id="city" placeholder="Москва" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Улица и дом *</Label>
              <Input id="address" placeholder="ул. Ленина, д. 10" required />
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="apartment">Квартира</Label>
                <Input id="apartment" placeholder="12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="entrance">Подъезд</Label>
                <Input id="entrance" placeholder="2" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="floor">Этаж</Label>
                <Input id="floor" placeholder="3" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="postalCode">Почтовый индекс *</Label>
              <Input id="postalCode" placeholder="123456" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="comment">Комментарий к заказу</Label>
              <Textarea 
                id="comment" 
                placeholder="Дополнительная информация для курьера"
                rows={3}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <Icon name="CreditCard" size={20} className="text-primary" />
              Способ оплаты
            </h3>

            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
              <div className="flex items-start space-x-3 p-4 border rounded-lg hover:border-primary/50 transition-colors">
                <RadioGroupItem value="card" id="card" className="mt-1" />
                <Label htmlFor="card" className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name="CreditCard" size={18} className="text-primary" />
                    <span className="font-semibold">Банковская карта</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Visa, Mastercard, Мир
                  </p>
                </Label>
              </div>

              <div className="flex items-start space-x-3 p-4 border rounded-lg hover:border-primary/50 transition-colors">
                <RadioGroupItem value="cash" id="cash" className="mt-1" />
                <Label htmlFor="cash" className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name="Wallet" size={18} className="text-primary" />
                    <span className="font-semibold">Наличными курьеру</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Оплата при получении
                  </p>
                </Label>
              </div>

              <div className="flex items-start space-x-3 p-4 border rounded-lg hover:border-primary/50 transition-colors">
                <RadioGroupItem value="crypto" id="crypto" className="mt-1" />
                <Label htmlFor="crypto" className="flex-1 cursor-pointer">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name="Bitcoin" size={18} className="text-primary" />
                    <span className="font-semibold">Криптовалюта</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    BTC, ETH, USDT
                  </p>
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="pt-4 border-t space-y-4">
            <div className="flex justify-between items-center text-lg">
              <span className="font-semibold">Итого:</span>
              <span className="text-2xl font-bold text-primary">2,899₽</span>
            </div>

            <Button type="submit" size="lg" className="w-full text-lg">
              <Icon name="CheckCircle" className="mr-2" size={20} />
              Подтвердить заказ
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
