import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

export async function GET(_: Request) {
  const supabase = createRouteHandlerClient({ cookies });

  const { data, error } = await supabase.from('timezones').select('*');

  if (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'Error fetching timezones' },
      { status: 500 }
    );
  }

  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const supabase = createRouteHandlerClient({ cookies });

  const data = await req.json();

  const { error } = await supabase.from('timezones').insert(data);

  if (error) {
    console.log(error);
    return NextResponse.json(
      { message: 'Error creating timezone' },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: 'success' });
}
