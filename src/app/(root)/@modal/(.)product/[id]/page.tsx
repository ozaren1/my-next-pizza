import { prisma } from "@@/prisma/prisma-client";
import { notFound } from "next/navigation";
import { ChooseProductModal } from "@@/shared/components/shared";



export default async function ProductModalPage( {
  params,
}: {
  params: Promise<{ id: string }>
}  ) {
  const id = (await params).id;
  const product = await prisma.product.findFirst({
    where: {
      id: Number(id), // Приводим id к числу
    },
    include: {
      ingredients: true,
      items: true
    }
  });

  if (!product) {
    return notFound();
  }

  return <ChooseProductModal product={product} />;
}
