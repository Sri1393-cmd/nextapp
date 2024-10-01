import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
const { prisma } = require('@prisma/client');



export async function GET(
    request: NextRequest,
    { params }: { params: { id: number } }) {
        const user = await prisma.user.findUnique({
            where: {id: params.id}
        })

        if(!user)
        return NextResponse.json({error:"User Not Found"},{status:404})
    //    const users = await prisma.user.findMany();
        return NextResponse.json(user);
}