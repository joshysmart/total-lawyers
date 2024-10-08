import { GoogleIcon } from "@/assets/icons";
import Image from "next/image";
import Rating from "../ui/Rating";
import norton from "@/assets/icons/norton-logo.png";
import bbb from "@/assets/icons/bbb.png";
import en from "@/language/en";

export default function Support() {
  const rating = 4.3;

  return (
    <>
      <p className="text-lg leading-5 lg:mt-10">{en.moreInfo}</p>

      <div className="flex items-center gap-8 mt-3">
        <div className="flex items-center text-lg">
          <GoogleIcon />
          <Rating rating={rating} />
        </div>
        <div className="flex items-center gap-8">
          <Image src={norton} alt="Norton logo" width={54} height={34} />
          <Image src={bbb} alt="Norton logo" width={84} height={34} />
        </div>
      </div>
    </>
  );
}
