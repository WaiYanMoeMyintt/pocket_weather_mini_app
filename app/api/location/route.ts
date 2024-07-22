import { NextResponse } from "next/server";
import React, {useState, useEffect, useContext} from "react"


export async function GET(){
    try {
        const api = `http://api.openweathermap.org/geo/1.0/direct?q=yangon&appid=40957144dd09f20d66c6d541c84a3adf`
        const fetchData = await fetch(api);
        const resData   = await fetchData.json();
        return NextResponse.json(resData);
    }
    catch(error) {
        return new Response("Error in getting api data ", { status: 500 });
    }
  
} 