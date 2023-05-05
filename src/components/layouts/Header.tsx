import { Box, Stack, Typography } from "@mui/material";
import { _headerRoutes } from "./routes";

export default function Header(): JSX.Element {
  return (
    <Stack
      component="header"
      paddingX={1}
      paddingY={2}
      sx={{ backgroundColor: "red" }}
    >
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack
          maxWidth={700}
          flex={1}
          sx={{ backgroundColor: "orange" }}
          flexDirection="row"
          alignItems="center"
        >
          <Stack width={130} height={50} justifyContent="center">
            <Typography component="p"  fontSize={24}>
              Teach Zone
            </Typography>
          </Stack>
          <Box>Search-Input</Box>
        </Stack>
        <Stack>Switch(Dark/Light)</Stack>
      </Stack>
      <Stack flexDirection="row">
        {_headerRoutes.map((ctx) => {
          return <div key={ctx["id"]}>{ctx["name"]}</div>;
        })}
      </Stack>
    </Stack>
  );
}
