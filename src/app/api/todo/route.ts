import { NextResponse } from "next/server";

export async function GET(){
	const response = await fetch("https://jsonplaceholder.typicode.com/todos?");
	const data = await response.json();

	return NextResponse.json({data});
}