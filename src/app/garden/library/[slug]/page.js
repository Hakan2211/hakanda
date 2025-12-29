export default function BookPage({ params }) {
  return (
    <div className="space-y-6">
       <h1 className="text-3xl font-bold">Book: {params.slug}</h1>
       <div className="prose dark:prose-invert">
         <p>This is where the detailed notes and review for the book would go.</p>
       </div>
    </div>
  )
}

