import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./Card";
import { ImageWithFallback } from "./ImageWithFallback";

export function FavoriteCard({
  image,
  title,
  subtitle,
  reason,
}: {
  image?: string;
  title: string;
  subtitle?: string;
  reason: string;
}) {
  return (
    <Card className="overflow-hidden">
      {image ? (
        <div className="relative w-full aspect-[3/4] sm:aspect-[16/9]">
          <ImageWithFallback
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      ) : null}
      <CardHeader className={image ? "pb-2" : ""}>
        <CardTitle className="text-base">{title}</CardTitle>
        {subtitle ? <CardDescription>{subtitle}</CardDescription> : null}
      </CardHeader>
      <CardContent className="pb-5">
        <p className="text-sm text-muted-foreground">{reason}</p>
      </CardContent>
    </Card>
  );
}
