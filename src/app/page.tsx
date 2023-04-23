import { Metadata } from "next";
import Link from "next/link";
import Typography from "@/components/Typography";

export const metadata: Metadata = {
  title: "آموزش برنامه نویس و نکات زبان های برنامه نویسی - TeachZone",
  description:
    "مجموعه ای کامل از آموزش و نکات برنامه نویسی و کدنویسی که بتونی سطح علمی و کدنویسی خودت رو ارتقا بدی, از مبتدی تا حرفه ای شدن توی برنامه نویسی رو تجربه کنید",
};
export default function Home() {
  return (
    <main>
      Main Root Page
      <Typography component="h1" fontSize={30}>
        Hello
      </Typography>
      <Link href="/favorites">Click to Navigate </Link>
    </main>
  );
}
