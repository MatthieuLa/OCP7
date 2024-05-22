function ImageLink({ title, src, url }) {
  return (
    <a href={url} target="_blank">
      <img src={src} className="logo" alt={title} />
    </a>
  );
}

export default ImageLink;
