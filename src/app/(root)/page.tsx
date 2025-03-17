import React, { useEffect } from "react";
import {
  Container,
  Title,
  TopBar,
  Filters,
  ProductCard,
  ProductsGroupList,
} from "@@/shared/components/shared";
import { prisma } from "@@/prisma/prisma-client";

export default async function Home() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true //запрос к призме на возврат всех категорий и продуктов привязанных к категориям и items привязанных к продуктам соответсвенно 
        }
      },  
    }
  })


  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar categories={categories.filter((category) => category.products.length > 0)}/>
      <Container className="pb-14">
        <div className="flex gap-[80px]">
          {/*Фильрация*/}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/*Список эл*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map((category, index) => (
                category.products.length > 0 && (
                  <ProductsGroupList
                    key={category.id}
                    title={category.name}
                    categoryId={category.id}
                    items={category.products}
                  />
                )
              ))}
             

             
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
