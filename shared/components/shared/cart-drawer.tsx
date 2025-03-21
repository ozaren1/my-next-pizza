"use client"
import { cn, getCartItemDetails } from "@/lib";
import React, { useEffect, useMemo } from "react";
import Link from "next/link";
import { Button } from "../ui";
import { ArrowRight } from "lucide-react";
import { CartDrawerItem } from "./cart-drawer-item";
import { useCartStore } from "@@/shared/store";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@@/shared/components/ui/sheet"
import { PizzaSize, PizzaType } from "@@/shared/constans/pizza";

interface Props {
  className?: string;
}


export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({ children ,className }) => {
 

  const { items, totalAmount, fetchCartItems, updateItemQuantity, removeCartItem } = useCartStore(); {/**изначально тут была массивная деструктуризация но неккст ругается */}

  

  useEffect(() => {
    fetchCartItems();
  }, [])


  const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
    const newQuantity = type == 'plus' ? quantity + 1 : quantity - 1;
    updateItemQuantity(id , newQuantity)
  }
  return (
    <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
            <SheetHeader>
                <SheetTitle>
                    В корзине <span className="font-bold">{items.length}</span>
                </SheetTitle>
            </SheetHeader>
            {/** items */}
            <div className="-mx-6 mt-5 overflow-auto flex-1 scrollbar">
              <div className=" mb-2">
                {
                  items.map((item) => (
                    <CartDrawerItem 
                    key={item.id}
                    id={item.id}
                    onClickCountButton={(type) => onClickCountButton(item.id, item.quantity, type)}
                    onClickRemove = {() => removeCartItem(item.id)}
                    quantity={item.quantity} 
                    name={item.name}
                    price={item.price} 
                    details={item.pizzaSize && item.pizzaType ? getCartItemDetails(item.ingredients, item.pizzaType as PizzaType, item.pizzaSize as PizzaSize) : ''} 
                    imageUrl="https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp"
                  />
                  ))
                }
               
              </div>
            
            </div>
           
            <SheetFooter className="-mx-6 bg-white p-8">
            <div className="w-full">
                  <div className="flex mb-4">
                    <span className="flex flex-1 text-lg text-neutral-500">
                      Итого
                      <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
                    </span>

                    <span className="font-bold text-lg">{totalAmount}</span>
                  </div>
                  <Link href="/checkout">
                    <Button
                      
                      type="submit"
                      className="w-full h-12 text-base">
                      Оформить заказ
                      <ArrowRight className="w-5 ml-2" />
                    </Button>
                  </Link>
            </div>
            </SheetFooter>
        </SheetContent>
    </Sheet>

  );
};
