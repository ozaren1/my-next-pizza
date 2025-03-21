
"use client"
import React, {} from "react";
import { Dialog } from "@@/shared/components/ui";
import { cn } from "@/lib/utils";
import { DialogContent, DialogTitle } from "@@/shared/components/ui/dialog";
import {ChooseProductForm , ChoosePizzaForm} from "@@/shared/components/shared";
import { useRouter } from "next/navigation";
import {ProductWithRelations} from "@@/@types/prisma"
import { useCartStore } from "@@/shared/store";


interface Props {
  product: ProductWithRelations;
  className?: string;
}


export const ChooseProductModal: React.FC<Props> = ({ className, product }) => {
    const router = useRouter();
    const firstItem = product.items[0];
    const isPizzaForm = Boolean(firstItem.pizzaType) // если нет pizzaType то продукт не яляется пиццей, соотвественно рендерим другую форму

    const addCartItem = useCartStore((state) => state.addCartItem)

    const onAddProduct = () => {
      addCartItem({
        productItemId: firstItem.id,
      })
    }

    const onAddPizza = (productItemId: number, ingredients: number[]) => {
      addCartItem({
        productItemId,
        ingredients,
      })
    }



  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogTitle></DialogTitle>{/*тоже хз*/}
        <DialogContent className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className,
        )}>
          {isPizzaForm ? (
            <ChoosePizzaForm onSubmit={onAddPizza} imageUrl={product.imageUrl} name={product.name} ingredients={product.ingredients}  items ={product.items}/>
          ) : (
            <ChooseProductForm onSubmit={onAddProduct} imageUrl={product.imageUrl} name={product.name} price={firstItem.price} />
          )}
           
        </DialogContent>
    </Dialog>
  );
};
