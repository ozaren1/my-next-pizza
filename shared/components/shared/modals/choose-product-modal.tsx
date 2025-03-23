
"use client"
import React, {} from "react";
import { Dialog } from "@@/shared/components/ui";
import { cn } from "@/lib/utils";
import { DialogContent } from "@@/shared/components/ui/dialog";
import {ChooseProductForm , ChoosePizzaForm} from "@@/shared/components/shared";
import { useRouter } from "next/navigation";
import {ProductWithRelations} from "@@/@types/prisma"
import { useCartStore } from "@@/shared/store";
import toast from "react-hot-toast";


interface Props {
  product: ProductWithRelations;
  className?: string;
}


export const ChooseProductModal: React.FC<Props> = ({ className, product }) => {
    const router = useRouter();
    const firstItem = product.items[0];
    const isPizzaForm = Boolean(firstItem.pizzaType) // если нет pizzaType то продукт не яляется пиццей, соотвественно рендерим другую форму

    const addCartItem = useCartStore((state) => state.addCartItem);
    const loading = useCartStore((state) => state.loading);





 const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
  try{
   const itemId = productItemId ?? firstItem.id;
   await addCartItem({
    productItemId: itemId,
    ingredients,
   })
   toast.success(product.name + " добавлен в корщину");
    router.back()
  }catch(error){
    toast.error("Не удалось добавить товар в корзину")
    console.error(error)
  }
 }
  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}  >
        <DialogContent className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className,
        )}>
          {isPizzaForm ? (
            <ChoosePizzaForm loading={loading} onSubmit={onSubmit} imageUrl={product.imageUrl} name={product.name} ingredients={product.ingredients}  items ={product.items}/>
          ) : (
            <ChooseProductForm loading={loading} onSubmit={() => onSubmit?.()} imageUrl={product.imageUrl} name={product.name} price={firstItem.price} />
          )}
           
        </DialogContent>
    </Dialog>
  );
};
