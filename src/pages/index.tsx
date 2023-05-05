import { SEOProps } from "@/providers/providers";
import { GetStaticProps } from "next";

export default function Home() {
  return (
    <>
      <main>Salam</main>
    </>
  );
}
export const getStaticProps: GetStaticProps<{
  SEO: SEOProps;
}> = async (context) => {
  return {
    props: {
      SEO: {
        title: "آموزش برنامه نویسی و نکات برنامه نویسی - از مبتدی تا پیشرفته",
        description:
          "پیدا کردن مسیر رشد در برنامه نویسی و ارتقا اطلاعات در آن و پیدا کردن دید مناسب در برنامه نویسی از اهداف تیچ زون میباشد | از صفر تا صد برنامه نویسی | بررسی زبان های مختلف برنامه نویسی",
        keywords: [
          "آموزش برنامه نویسی",
          "آموزش رایگان برنامه نویسی",
          "جاوااسکریپت",
          "Javascript",
          "JS",
          "پایتون",
          "هوش مصنوعی",
          "دوره ی برنامه نویسی پیشرفته",
          "C++",
          "PHP",
          "Ruby",
          "React",
          "React Native",
          "مجموعه آموزش برنامه نویسی",
          "سی پلاس پلاس",
          "ویدیو آموزش برنامه نویسی",
          "وردپرس",
          "wordpress",
        ],
      },
    },
  };
};
