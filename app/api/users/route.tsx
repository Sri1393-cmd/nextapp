import { NextRequest, NextResponse } from "next/server";
const { prisma } = require('@prisma/client');

export async function GET(request: NextRequest,
   { params }: { params: { id: number }}
){
   /*return NextResponse.json([
    {id:1, name:"Laxmi"},
    {id:2, name:"Priya"}
   ]);*/
   if(params.id > 10)
      return NextResponse.json({error:"User Not Found"},{status:404})
   const users = await prisma.user.findMany();
   return NextResponse.json(users);
}