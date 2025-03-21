import { prisma } from "@@/prisma/prisma-client"
/**
 Функция провряет существует ли корзина если нет то создает новую
 */
export const findOrCreateCart = async (token: string) => {
    let userCart = await prisma.cart.findFirst({
        where: {
            token,
        },
    });

    if(!userCart){
        userCart = await prisma.cart.create({
            data: {
                token,
            }
        });
    }

    return userCart;
};