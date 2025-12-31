import { supabase } from '../../../lib/supabaseClient';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Perform a lightweight query to keep the database active
    const { count, error } = await supabase
      .from('Likes')
      .select('*', { count: 'exact', head: true });

    if (error) {
      console.error('Supabase keep-alive error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      status: 'ok',
      message: 'Supabase queried successfully',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Keep-alive internal error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
