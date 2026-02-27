import Login_component from "@/components/Login_component";
import { createSupabaseServerClient } from "@/lib/supabase/server-client";
import { redirect } from "next/navigation";



export default async function Login() {


    const supabase = await createSupabaseServerClient();
    const { data: { user }, } = await supabase.auth.getUser()
    if (user) {
        redirect("/dashboard");           // or "/login" — use your actual login path
    }

  return (
 !user && <Login_component />
  )
}
