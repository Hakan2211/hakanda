function YouTubeEmbed({ id, caption }) {
  return (
    <figure className="mb-8">
      <figcaption className="py-4 text-sm text-muted-foreground text-center">
        {caption}
      </figcaption>
      <iframe
        className="w-full aspect-video rounded-[8px]"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </figure>
  );
}

export default YouTubeEmbed;
