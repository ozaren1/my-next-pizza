import { prisma } from "@@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req : NextRequest) {
   console.log(req.nextUrl)
   const query = req.nextUrl.searchParams.get('query') || '';

    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: query,
                mode: 'insensitive' //тут я делаю выборку, указывая что регистр не важен а строка contains: query аналогична includes в js
            }
        },
        take: 10, //параметр отвечает за то сколько по умолчанию будет элементов в массиве то есть в выдаче поиска в данном контексте 
    })

    return NextResponse.json(products)
}