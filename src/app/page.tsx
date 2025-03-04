"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/ui";
import {
  Container,
  Title,
  TopBar,
  Filters,
  ProductCard,
  ProductsGroupList,
} from "@/components/shared";
import { title } from "process";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pb-14">
        <div className="flex gap-[80px]">
          {/*Фильрация*/}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/*Список эл*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: "dddd",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/01953ced168c758399984df8561623a3.avif",
                    price: 520,
                    items: [{ price: 520 }],
                  },
                  {
                    id: 2,
                    name: "dddd",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/01953ced168c758399984df8561623a3.avif",
                    price: 520,
                    items: [{ price: 520 }],
                  },
                ]}
              />

              <ProductsGroupList
                title="Комбо"
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: "dddd",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/01953ced168c758399984df8561623a3.avif",
                    price: 520,
                    items: [{ price: 520 }],
                  },
                  {
                    id: 2,
                    name: "dddd",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/01953ced168c758399984df8561623a3.avif",
                    price: 520,
                    items: [{ price: 520 }],
                  },
                  {
                    id: 3,
                    name: "dddd",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/01953ced168c758399984df8561623a3.avif",
                    price: 520,
                    items: [{ price: 520 }],
                  },
                  {
                    id: 4,
                    name: "dddd",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:233x233/01953ced168c758399984df8561623a3.avif",
                    price: 520,
                    items: [{ price: 520 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
