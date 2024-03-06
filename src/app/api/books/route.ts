import { getData } from "@/server/actions"

export async function GET() {
    const data = await getData()
  return Response.json({data})
}