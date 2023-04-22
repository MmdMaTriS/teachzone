"use client";

import MuiTextFieldOutlined from "@/components/MuiTextFieldOutlined";
import { Box, Container, Stack, Typography } from "@mui/material";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { ABeeZee } from "next/font/google";
import { useRouter } from "next/navigation";

const ABeeZeeFont = ABeeZee({
  weight: "400",
  subsets: ["latin"],
});
export default function Header(): JSX.Element {
  const router: AppRouterInstance = useRouter();

  return (
    <Container component="header" maxWidth="xl">
      <Stack
        component="header"
        direction="row-reverse"
        display={{ xs: "none", md: "flex" }}
        minHeight={85}
        paddingX={2}
        paddingY={2}
        alignItems="center"
        rowGap={2}
        columnGap={3}
      >
        <Box
          sx={{ minWidth: 80, height: 75 }}
          alignItems="center"
          justifyContent="center"
          display="flex"
        >
          <Typography
            component="strong"
            fontSize={16}
            fontFamily={ABeeZeeFont.style.fontFamily}
            fontWeight="600"
          >
            <Typography
              component="span"
              fontWeight="900"
              fontSize={20}
              color="error"
            >
              T
            </Typography>
            eachZone
          </Typography>
        </Box>
        <Stack sx={{ width: 300, height: 50 }} justifyContent="center">
          <MuiTextFieldOutlined icon="searchIcon" size="small" placeholder="دنبال چی هستی؟" />
        </Stack>
        <Stack flex={1} sx={{ backgroundColor: "pink" }} minHeight={40}>
          Buttons
        </Stack>
      </Stack>
    </Container>
  );
}
