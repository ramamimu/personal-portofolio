import Image from "next/image";

export default function NextImage({
  className,
  src,
  alt,
  width,
  height,
  ...args
}: {
  className?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  args?: any;
}) {
  return (
    <div className={className}>
      <Image src={src} alt={alt} width={width} height={height} {...args} />
    </div>
  );
}
