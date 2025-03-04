import "dotenv/config";
import { createClient } from "@supabase/supabase-js";

const supabaseAuthClient = createClient(
  process.env.SUPABASE_AUTH_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default supabaseAuthClient;
