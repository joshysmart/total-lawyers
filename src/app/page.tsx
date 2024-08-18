import Copyright from "@/components/home/Copyright";
import FormSection from "@/components/home/FormSection";
import InfoSection from "@/components/home/InfoSection";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container_bg bg-white w-full flex min-h-screen flex-col items-center">
      <div className="container_bg flex-1 bg-blue w-full flex flex-col items-center justify-center p-4 py-8 lg:py-16 ">
        <div className="w-full lg:max-w-[890px] flex flex-col gap-8 lg:gap-12 items-center">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={200} height={36} />
          </Link>
          <div className="bg-white lg:min-h-[475px] w-full flex flex-col-reverse lg:flex-row rounded overflow-hidden">
            <InfoSection />
            <FormSection />
          </div>
        </div>
      </div>
      <Copyright />
    </main>
  );
}
