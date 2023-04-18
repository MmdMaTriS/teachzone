import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // return new Response(
  //   "We are looking for a Back-End Developer Visit our coopration page",
  //   {
  //     status: 200,
  //     statusText: "Ok",
  //   }
  // );
  return NextResponse.json(
    { time: new Date().toISOString() },
    {
      status: 200,
      statusText: "nOK",
    }
  );
}
