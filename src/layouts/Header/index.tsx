"use client";

import MuiTextFieldOutlined from "@/components/MuiTextFieldOutlined";
import _headerTabs from "@/constants/_headerTabs";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { ABeeZee } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ABeeZeeFont = ABeeZee({
  weight: "400",
  subsets: ["latin"],
});
export default function Header(): JSX.Element {
  const path = usePathname();

  return (
    <Container component="header" maxWidth="xl">
      <Stack
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
            fontSize={17}
            fontFamily={ABeeZeeFont.style.fontFamily}
            fontWeight="600"
          >
            <Typography
              component="span"
              fontWeight="900"
              fontSize={21}
              color="error"
            >
              T
            </Typography>
            eachZone
          </Typography>
        </Box>
        <Stack sx={{ width: 330, height: 50 }} justifyContent="center">
          <MuiTextFieldOutlined
            icon="searchIcon"
            size="small"
            placeholder="دنبال چی هستی؟"
          />
        </Stack>
        <Stack
          flex={1}
          alignItems="center"
          minHeight={40}
          flexDirection="row"
          flexWrap="wrap"
          rowGap={1}
          columnGap={1}
        >
          {_headerTabs.map((ctx) => {
            if (ctx["hasLink"]) {
              return (
                <Stack key={ctx["id"]}>
                  <Link href={ctx["link"]}>
                    <Button
                      variant="text"
                      fullWidth
                      sx={{ paddingX: 3, fontWeight: "700" }}
                      disabled={ctx["link"] === path}
                    >
                      {ctx["name"]}
                    </Button>
                  </Link>
                </Stack>
              );
            }
          })}
        </Stack>
      </Stack>
    </Container>
  );
}
