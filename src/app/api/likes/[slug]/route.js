import { supabase } from '../../../../lib/supabaseClient';
import CryptoJS from 'crypto-js';

export async function GET(request, { params }) {
  const { slug } = params;

  const { data: likes, error } = await supabase
    .from('Likes')
    .select('likes')
    .eq('slug', slug);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  } else {
    const totalLikes = likes.reduce((sum, like) => sum + like.likes, 0);
    return new Response(JSON.stringify({ totalLikes }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function POST(request, { params }) {
  const { slug } = params;
  const { ip } = await request.json();
  const hashedIp = CryptoJS.SHA256(ip).toString();

  const { data: existingLike, error: findError } = await supabase
    .from('Likes')
    .select('id, likes')
    .eq('slug', slug)
    .eq('ip_address', hashedIp)
    .single();

  if (findError && findError.code !== 'PGRST116') {
    return new Response(JSON.stringify({ error: findError.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  } else if (existingLike) {
    const newLikes = Math.min(existingLike.likes + 1, 8);

    const { data, error } = await supabase
      .from('Likes')
      .update({ likes: newLikes })
      .eq('id', existingLike.id);

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } else {
    const { data, error } = await supabase
      .from('Likes')
      .insert([{ slug, ip_address: hashedIp, likes: 1 }]);

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify(data), {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }
}
