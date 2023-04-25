//# TypeScript Types.d
import { Metadata } from "next";
//# Default values
import _defaultSEO from "@/utilities/defaultSEO";
//# Components
import Stack from "@/components/ClientMUI/Stack";
import Box from "@/components/ClientMUI/Box";
import Typography from "@/components/ClientMUI/Typography";
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
      alignItems="flex-start"
      columnGap={2}
      rowGap={2}
      marginBottom={2}
    >
      <Stack
        flex={3}
        component="main"
        flexDirection={{ lg: "column", xs: "column-reverse" }}
      >
        <Box>
          <StoryVideos count={4} />
        </Box>
        <Stack
          flexDirection={{ xs: "column-reverse", lg: "row" }}
          columnGap={1}
          rowGap={2}
          justifyContent="space-between"
          mt={{ lg: 3, xs: 0 }}
        >
          <Box>
            <Typography component="h1" fontWeight="500" fontSize={14}>
              از متد Call, Apply, Bind در چه مواقعی استفاده کنیم؟
            </Typography>
          </Box>
          <Box
            sx={{ background: "red", minHeight: 420, maxWidth: 720 }}
            minWidth={320}
            width={1}
          >
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
