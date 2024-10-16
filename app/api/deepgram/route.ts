import { DeepgramError, createClient } from "@deepgram/sdk";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // gotta use the request object to invalidate the cache every request :vomit:
  const url = request.url;
  const deepgram = createClient(process.env.NEXT_PUBLIC_DEEPGRAM_API_KEY ?? "");

  let { result: projectsResult, error: projectsError } =
    await deepgram.manage.getProjects();
  console.log(projectsResult);
  if (projectsError) {
    return NextResponse.json(projectsError);
  }
  console.log(projectsResult);

  return NextResponse.json({ ...projectsResult, url, key: process.env.NEXT_PUBLIC_DEEPGRAM_API_KEY });
}
