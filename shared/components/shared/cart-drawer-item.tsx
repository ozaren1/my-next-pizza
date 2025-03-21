import { cn } from "@/lib";
import React from "react";
import * as CartItem from "./cart-item-details"
import { CartItemProps } from "./cart-item-details/cart-item-details.types";
import { CountButton } from "./count-button";
import { Trash2Icon } from "lucide-react";


interface Props extends CartItemProps{
  onClickCountButton?: (type: 'plus' | 'minus') => void;
  className?: string;
  onClickRemove?: () => void
}

export const CartDrawerItem: React.FC<Props> = ({
  id,
  imageUrl,
  name,
  price,
  quantity,
  details, 
  onClickRemove,
  onClickCountButton,
  className }) => {
  return (
    <div className={cn('flex bg-white p-5 gap-6', className)}>
      <CartItem.Image src={imageUrl} />
      <div className="flex-1 ">
        <CartItem.Info details={details} name={name}/>
        <hr className="my-3"/>
        <div className="flex items-center justify-between">
          <CountButton onClick={onClickCountButton} value={quantity}/>
            <div className="flex items-center gap-3">
                <CartItem.Price value={price}/>
                <Trash2Icon onClick={onClickRemove} size={16} className="text-gray-400 cursor-pointer hover:text-gray-600"/>
            </div>
        </div>
      </div>
    </div>
  );
};
