import Image from "next/image";

type ProjectImageProps = {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  aspectRatio?: "video" | "wide" | "auto";
};

export function ProjectImage({
  src,
  alt,
  caption,
  priority = false,
  className = "",
  imageClassName = "",
  aspectRatio = "video",
}: ProjectImageProps) {
  const aspectClass =
    aspectRatio === "wide"
      ? "aspect-video sm:aspect-[16/7]"
      : aspectRatio === "auto"
        ? "min-h-[220px] sm:min-h-[280px]"
        : "aspect-video";

  return (
    <figure className={`space-y-3 ${className}`}>
      <div
        className={`relative w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-sm ${aspectClass}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 1200px, 100vw"
          className={`object-contain p-2 sm:p-3 ${imageClassName}`}
        />
      </div>

      {caption ? (
        <figcaption className="text-center text-xs leading-relaxed text-muted-foreground sm:text-sm">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}