// Remove 'use client' from this file since it's server-side code
import { NextResponse } from "next/server";

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');

    if (!search) {
        return new Response("Search query is missing", { status: 400 });
    }

    try {
        const api = `http://api.openweathermap.org/geo/1.0/direct?q=${search}&appid=40957144dd09f20d66c6d541c84a3adf`;
        const fetchData = await fetch(api);
        const resData = await fetchData.json();
        return NextResponse.json(resData);
    } catch (error) {
        return new Response("Error in getting API data", { status: 500 });
    }
}
