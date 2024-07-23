// Remove 'use client' from this file since it's server-side code
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search");

  try {
    const api = `http://api.weatherapi.com/v1/current.json?key=b60f450a882847bf8ab151033241907&q=${search}&aqi=yes`;
    const fetchData = await fetch(api);
    const resData = await fetchData.json();
    return NextResponse.json(resData);
  } catch (error) {
    return new Response("Error in getting API data", { status: 500 });
  }
}
