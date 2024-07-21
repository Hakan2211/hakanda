import { supabase } from '../../../../lib/supabaseClient';

export async function GET(request, { params }) {
  const { slug } = params;
  const deviceIdentifier = request.nextUrl.searchParams.get('deviceIdentifier');

  const { data: likes, error } = await supabase
    .from('Likes')
    // Select both likes and deviceIdentifier
    .select('likes, deviceIdentifier')
    .eq('slug', slug);
  // .eq('deviceIdentifier', deviceIdentifier)
  // .single();

  if (error?.details === 'The result contains 0 rows') {
    return new Response(
      JSON.stringify({ totalLikes: 0, totalLikesAllUsers: 0 }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  } else {
    const currentUserLikes = likes.find(
      (like) => like.deviceIdentifier === deviceIdentifier
    );

    return new Response(
      JSON.stringify({
        totalLikes: currentUserLikes?.likes || 0,
        totalLikesAllUsers: likes.reduce((acc, like) => acc + like.likes, 0),
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

// export async function POST(request, { params }) {
//   const { slug } = params;
//   const { deviceIdentifier, maxLikes } = await request.json();

//   const { data: existingLike, error: findError } = await supabase
//     .from('Likes')
//     .select('id, likes')
//     .eq('slug', slug)
//     .eq('deviceIdentifier', deviceIdentifier)
//     .single();

//   if (findError && findError.code !== 'PGRST116') {
//     return new Response(JSON.stringify({ error: findError.message }), {
//       status: 500,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   } else if (existingLike) {
//     const newLikes = Math.min(existingLike.likes + 1, maxLikes);

//     const { data, error } = await supabase
//       .from('Likes')
//       .update({ likes: newLikes })
//       .eq('id', existingLike.id)
//       .select();

//     if (error) {
//       return new Response(JSON.stringify({ error: error.message }), {
//         status: 500,
//         headers: { 'Content-Type': 'application/json' },
//       });
//     } else {
//       return new Response(JSON.stringify(data), {
//         status: 200,
//         headers: { 'Content-Type': 'application/json' },
//       });
//     }
//   } else {
//     const { data, error } = await supabase
//       .from('Likes')
//       .insert([{ slug, deviceIdentifier, likes: 1 }])
//       .select();

//     if (error) {
//       return new Response(JSON.stringify({ error: error.message }), {
//         status: 500,
//         headers: { 'Content-Type': 'application/json' },
//       });
//     } else {
//       return new Response(JSON.stringify(data), {
//         status: 201,
//         headers: { 'Content-Type': 'application/json' },
//       });
//     }
//   }
// }

export async function POST(request, { params }) {
  const { slug } = params;
  const { deviceIdentifier, maxLikes } = await request.json();

  const { data: existingLike, error: findError } = await supabase
    .from('Likes')
    .select('id, likes')
    .eq('slug', slug)
    .eq('deviceIdentifier', deviceIdentifier)
    .single();

  if (findError && findError.code !== 'PGRST116') {
    return new Response(JSON.stringify({ error: findError.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  } else if (existingLike) {
    const newLikes = Math.min(existingLike.likes + 1, maxLikes);

    const { data, error } = await supabase
      .from('Likes')
      .update({ likes: newLikes })
      .eq('id', existingLike.id)
      .select();

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      const { data: allLikes, error: allLikesError } = await supabase
        .from('Likes')
        .select('likes')
        .eq('slug', slug);

      if (allLikesError) {
        return new Response(JSON.stringify({ error: allLikesError.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      const totalLikesAllUsers = allLikes.reduce(
        (acc, like) => acc + like.likes,
        0
      );

      return new Response(JSON.stringify({ data, totalLikesAllUsers }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } else {
    const { data, error } = await supabase
      .from('Likes')
      .insert([{ slug, deviceIdentifier, likes: 1 }])
      .select();

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      const { data: allLikes, error: allLikesError } = await supabase
        .from('Likes')
        .select('likes')
        .eq('slug', slug);

      if (allLikesError) {
        return new Response(JSON.stringify({ error: allLikesError.message }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      const totalLikesAllUsers = allLikes.reduce(
        (acc, like) => acc + like.likes,
        0
      );

      return new Response(JSON.stringify({ data, totalLikesAllUsers }), {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }
}
