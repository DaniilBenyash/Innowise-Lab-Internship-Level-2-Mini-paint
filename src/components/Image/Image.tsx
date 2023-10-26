type ImageProps = {
  width?: string,
  height?: string,
  src: string,
  alt?: string,
}

export const Image = ({ width, height, src, alt }: ImageProps) => {
  return <img width={width} height={height} src={src} alt={alt} />;
};
