import { prisma } from "@@/prisma/prisma-client"
import { notFound } from "next/navigation";
import { ChooseProductModal, Container, GroupVariants, Title } from "@@/shared/components/shared";

interface ProductModalPageProps {
    params: { id: string };
  }
  
  export default async function ProductModalPage({ params }: ProductModalPageProps) {
    const { id } = params;
    const product = await prisma.product.findFirst({
      where:{
        id: Number(id),
      },
      include: {
        ingredients: true,
        items: true
      }
    })



if (!product){
 return  notFound();
}

    return (
       <ChooseProductModal product={product}/>
    )
}