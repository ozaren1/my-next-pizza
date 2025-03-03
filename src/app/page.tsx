
"use client"
import React, { useEffect } from "react";
import { Button,} from "@/components/ui"
import { Container, Title, TopBar, Filters, ProductCard } from "@/components/shared"

export default function Home() {
  return (
    <>
    <Container className="mt-10">
      <Title text="Все пиццы" size="lg" className="font-extrabold"/>
    </Container>
    <TopBar/>
    <Container className="pb-14">
      <div className="flex gap-[60px]">
        {/*Фильрация*/}
        <div className="w-[250px]">
          <Filters/>
        </div>

        {/*Список эл*/}
        <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductCard id={0} name={''} price={0} imageUrl={'https://media.dodostatic.net/image/r:233x233/11ef9a30c3246adebecb726548cbede9.avif'}/>
            </div>
        </div>
      </div>

    </Container>

    </>
  )
}


