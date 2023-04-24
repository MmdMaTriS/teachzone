//# TypeScript Types.d
import { Metadata } from "next";
//# Default values
import _defaultSEO from "@/utilities/defaultSEO";
//# Components
import Stack from "@/components/ClientMUI/Stack";
import Box from "@/components/ClientMUI/Box";
import StoryVideos from "@/templates/StoryVideos";

export const metadata: Metadata = {
  ..._defaultSEO,
  title: "آموزش برنامه نویس و نکات زبان های برنامه نویسی - TeachZone",
  description:
    "مجموعه ای کامل از آموزش و نکات برنامه نویسی و کدنویسی که بتونی سطح علمی و کدنویسی خودت رو ارتقا بدی, از مبتدی تا حرفه ای شدن توی برنامه نویسی رو تجربه کنید",
};

export default function Home() {
  return (
    <Stack
      direction="row-reverse"
      flexWrap="wrap"
      justifyContent="center"
      columnGap={2}
      rowGap={2}
    >
      <Stack flex={3} component="main">
        <Box>
          <StoryVideos count={5} />
        </Box>
        <Stack alignItems="center" mt={3}>
          <Box  sx={{ width: 680, background: "red", minHeight: 420 }}>
            One Videos
          </Box>
        </Stack>
      </Stack>
      <Stack
        flex={1}
        minWidth={320}
        paddingX={1}
        component="aside"
        sx={{ backgroundColor: "orange" }}
      >
        Aside
      </Stack>
    </Stack>
  );
}
