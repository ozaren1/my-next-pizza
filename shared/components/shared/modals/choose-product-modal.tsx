
"use client"
import React, {} from "react";
import { Dialog } from "@@/shared/components/ui";
import { cn } from "@/lib/utils";
import { DialogContent } from "@@/shared/components/ui/dialog";
import {ChooseProductForm , ChoosePizzaForm} from "@@/shared/components/shared";
import { useRouter } from "next/navigation";
import {ProductWithRelations} from "@@/@types/prisma"


interface Props {
  product: ProductWithRelations;
  className?: string;
}


export const ChooseProductModal: React.FC<Props> = ({ className, product }) => {
    const router = useRouter();
    const isPizzaForm = Boolean(product.items[0].pizzaType) // если нет pizzaType то продукт не яляется пиццей, соотвественно рендерим другую форму
  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
        <DialogContent className={cn(
          'p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className,
        )}>
          {isPizzaForm ? (
            <ChoosePizzaForm imageUrl={product.imageUrl} name={product.name} ingredients={[]} onSubmit={() => null} items ={[]}/>
          ) : (
            <ChooseProductForm imageUrl={product.imageUrl} name={product.name} onSubmit={() => null} />
          )}
           
        </DialogContent>
    </Dialog>
  );
};
