import React, {} from "react";
import { Button } from "@@/shared/components/ui";
import { PizzaImage, Title } from "@@/shared/components/shared";
import { cn } from "@/lib/utils";


interface Props {
    imageUrl: string;
    name: string;
    ingredients: any[];
    items: any[];
    loading?: boolean;
    onSubmit: (itemId: number, ingredients: number[]) => void;
    className?: string;
  }


export const ChoosePizzaForm: React.FC<Props> = ({ 
    name,
    items,
    imageUrl,
    ingredients,
    loading,
    onSubmit,
    className, }) => {

const textDetails = '30см традиционное тесто 30 '
const totalPrice = 350;
const size = 30;

  return (
    <div className={cn(className, 'flex flex-1')}>
        <PizzaImage imageUrl={imageUrl} size={size}/>
        <div className="w-[490px] bg-[#f7f6f5] p-7">
            <Title text={name} size="md" className="font-extrabold mb-1" />
            <p className="text-gray-400">{textDetails}</p>
            <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
            Добавить в корзину за {totalPrice} ₽
            </Button>
        </div>
   </div>
  );
};
