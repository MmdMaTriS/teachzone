//# Types
import { StoryVideos } from "./types";
//# Components
import Stack from "@/components/ClientMUI/Stack";

export default function StoryVideos(props: StoryVideos): JSX.Element {
  const { count, horizontal } = props;
  return (
    <Stack
      alignItems="center"
      justifyContent={{ md: "space-between", xs: "center" }}
      rowGap={2}
      columnGap={1}
      direction="row"
      flexWrap="wrap"
    >
      {Array(count)
        .fill(null)
        .map((ctx, idx) => {
          return (
            <Stack
              key={idx}
              minWidth={{ xs: 160, sm: 160, md: 180 }}
              minHeight={{ xs: 160, sm: 160, md: 180 }}
              sx={{ borderRadius: 1, backgroundColor: "#c9c9c9" }}
            >
              {++idx}
            </Stack>
          );
        })}
    </Stack>
  );
}
