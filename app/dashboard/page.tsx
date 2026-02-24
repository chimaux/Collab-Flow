
import { createSupabaseServerClient } from "@/lib/supabase/server-client";
import Dashboard_component from "../../components/Dashboard_component";
import { redirect } from "next/navigation";



export default async function dashboard() {

    const supabase = await createSupabaseServerClient();
    const { data: { user }, } = await supabase.auth.getUser()
    if (!user) {
        redirect("/auth/login");           // or "/login" — use your actual login path
    }

    return (
        user && <Dashboard_component user={user} />
    )
}

