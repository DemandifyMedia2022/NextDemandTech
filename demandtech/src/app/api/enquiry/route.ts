import { NextResponse } from "next/server";
import { supabaseServer } from "../../../../lib/supabaseClient";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { error } = await supabaseServer.from("enquiries").insert([
      {
        first_name: body.firstName,
        last_name: body.lastName,
        work_email: body.workEmail,
        phone_country: body.phoneCountry,
        phone_number: body.phoneNumber,
        project_type: body.projectType,
        project_details: body.projectDetails,
        priority: body.priority,
        company_name: body.companyName,
        website: body.website,
        industry: body.industry,
        company_size: body.companySize,
        meeting_date: body.meetingDate || null,
        meeting_time: body.meetingTime || null,
        meeting_format: body.meetingFormat || null,
      },
    ]);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Supabase insert error:", err.message);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
