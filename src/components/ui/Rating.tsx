import { StarEmpty, StarFull, StarHalf } from "@/assets/icons";

interface RatingProps {
  rating: number;
}
export default function Rating({ rating }: RatingProps) {
  const wholePart = Math.floor(rating);
  const decimalPart = rating % 1 > 0 ? 1 : 0;
  const emptyStars = 5 - (wholePart + decimalPart);

  return (
    <div className="flex items-center text-yellow">
      {[...Array(wholePart)].map((_, index) => (
        <StarFull key={index} />
      ))}
      {[...Array(decimalPart)].map((_, index) => (
        <StarHalf key={index} />
      ))}
      {[...Array(emptyStars)].map((_, index) => (
        <StarEmpty key={index} />
      ))}
    </div>
  );
}
