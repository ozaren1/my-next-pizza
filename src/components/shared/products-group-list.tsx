"use client";

import React, { useEffect, useRef } from "react";
import { Title } from "./title";
import { ProductCard } from "./product-card";
import { useIntersection } from "react-use";
import { useCategoryStore } from "../../../store/category";

interface Props {
  title: string;
  items: any[];
  className?: string;
  categoryId: number;
  listClassName?: string;
}
export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  className,
  categoryId,
  listClassName,
}) => {
  const intersectionRef = useRef(null);
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4,
  });
  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [intersection?.isIntersecting, categoryId, title]);
  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className="grid grid-cols-3 gap-[50px]">
        {items.map((item, i) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.items[0].price}
          />
        ))}
      </div>
    </div>
  );
};
