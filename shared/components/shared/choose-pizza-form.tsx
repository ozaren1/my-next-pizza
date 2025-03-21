'use client'
import React from "react";
import { Button} from "@@/shared/components/ui";
import { PizzaImage, Title, GroupVariants, IngredientItem } from "@@/shared/components/shared";
import { mapPizzaType, PizzaSize, PizzaType, pizzaTypes } from "@@/shared/constans/pizza";
import { Ingredient, ProductItem } from "@prisma/client";
import { calcTotalPizzaPrice, cn } from "@/lib";
import { usePizzaOptions } from "@@/shared/hooks";

interface Props {
    imageUrl: string;
    name: string;
    ingredients: Ingredient[];
    items: ProductItem[];
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
    className,
   }) => {

    const {
      size,
      type,
      selectedIngredients,
      availableSizes,
      setSize,
      setType,
      addIngredient,
      currentItemId
    } = usePizzaOptions(items);

    const totalPrice = calcTotalPizzaPrice(
      type,
      size,
      items,
      ingredients,
      selectedIngredients,
    );

    const textDetails = `${size} см, ${mapPizzaType[type]} пицца`;

    const handleClickAdd = () => {
      if(currentItemId){
        onSubmit(currentItemId, Array.from(selectedIngredients));
      } 
    };
  
  
  return (
    <div className={cn(className, 'flex flex-1')}>
        <PizzaImage imageUrl={imageUrl} size={size}/>
        <div className="w-[490px] bg-[#f7f6f5] p-7">
            <Title text={name} size="md" className="font-extrabold mb-1" />
            <p className="text-gray-400">{textDetails}</p>

            <div className="flex flex-col gap-5 mt-5">
              <GroupVariants items={availableSizes} value={String(size)} onClick={value => setSize(Number(value) as PizzaSize)}  />
              <GroupVariants items={pizzaTypes} value={String(type)} onClick={value => setType(Number(value) as PizzaType)}/>
            </div>
            <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5">
            <div className="grid grid-cols-3 gap-3">
              {
                ingredients.map((ingredient) => (
                  <IngredientItem
                  key={ingredient.id}
                  name={ingredient.name}
                  price={ingredient.price}
                  imageUrl={ingredient.imageUrl}
                  onClick={() => addIngredient(ingredient.id)}
                  active={selectedIngredients.has(ingredient.id)}
                  />
                  
                ))
              }
            </div>
            </div>
            
            <Button onClick={handleClickAdd} className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
            Добавить в корзину за {totalPrice} ₽
            </Button>
        </div>
   </div>
  );
};
