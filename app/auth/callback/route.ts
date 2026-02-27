// app/auth/callback/route.ts

import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server-client";

export const dynamic = "force-dynamic"; // ensures cookies work correctly

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  // If Supabase sent an auth code, exchange it for a session
  if (code) {
    const supabase = await createSupabaseServerClient();

    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error("OAuth exchange error:", error.message);
      return NextResponse.redirect(
        `${requestUrl.origin}/auth/login?error=auth_callback_failed`
      );
    }
  }

  // redirect after successful login
  return NextResponse.redirect(`${requestUrl.origin}/dashboard`);
}