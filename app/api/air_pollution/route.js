import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search");
  try {
    const locationAPI = `http://api.openweathermap.org/geo/1.0/direct?q=${search}&appid=40957144dd09f20d66c6d541c84a3adf`;
    const fetchData = await fetch(locationAPI);
    const resData = await fetchData.json();
    if(!resData && resData.length === 0){
      return NextResponse.json({ error: "Location not found" }, { status: 404 });
    }
    const lat = resData[0].lat;
    const lon = resData[0].lon;

    if (lat && lon) {
      const pollutionAPI = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=40957144dd09f20d66c6d541c84a3adf`;
      const fetchPollution = await fetch(pollutionAPI);
      const resPollution = await fetchPollution.json();
      return NextResponse.json(resPollution);
    }
  } catch(err) {
     console.error(`API have issues ${err.message}`)
  }
}
