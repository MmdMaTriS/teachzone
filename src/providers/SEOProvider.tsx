import Head from "next/head";
import { memo } from "react";
import { SEOProps } from "./providers";
import { useRouter } from "next/router";

function SEOProvider(props: SEOProps) {
  const { title, description, keywords } = props;
  const router = useRouter();
  return (
    <Head>
      <meta charSet="UTF-8" />
      <link
        rel="canonical"
        href={`https://teachzone.ir${router.asPath}`}
        key="canonical"
      />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords.join(", ")} />}
    </Head>
  );
}
SEOProvider.defaultProps = {
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
    "wordpress",
    "وردپرس",
  ],
};
export default memo(SEOProvider);
