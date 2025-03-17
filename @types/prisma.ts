import { Ingredient, Product, ProductItem } from "@prisma/client";



export type ProductWithRelations = Product & {items: ProductItem[]; ingredients: Ingredient[]} ;

//Кастомный тип в котором к типу Product из prisma докрпучиваем связь с ingredients и ыProductItem