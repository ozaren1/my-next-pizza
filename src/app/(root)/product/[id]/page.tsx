import { prisma } from "@@/prisma/prisma-client"
import { notFound } from "next/navigation";
import { Container, GroupVariants, PizzaImage, Title } from "@@/shared/components/shared";


  
  export default async function ProductPage({ params }: any) {
    const { id } = params;
  
  console.log(params)
    const product = await prisma.product.findFirst({where : {id: Number(id)}}); //получение из бд продукта по его id
    if(!product){
        return notFound();
    }
    
    return (
        <>
        <Container className="flex my-10">
            <div className="flex flex-1">
                <PizzaImage imageUrl = {product.imageUrl} size={30}/>
            </div>
            <div className="w-[490px] bg-[#FCFCFC] p-7">
                <Title text={product.name} size="md" className="font-extrabold mb-1"/>
                <p className="text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, facilis quisquam! Tenetur dolore porro laudantium rem officia similique aut voluptatem! Ex voluptates nemo nam fuga, tempore rerum placeat at totam!</p>
                <GroupVariants value="2" items= {[
                    {
                        name: 'Маленткая',
                        value: '1',
                    },
                    {
                        name: 'Средняя',
                        value: '2',
                    },
                    {
                        name: 'Большая',
                        value: '3',
                        disabled: true
                    },
                ]}/>
            </div>
        </Container>
        
        </>
    )
}