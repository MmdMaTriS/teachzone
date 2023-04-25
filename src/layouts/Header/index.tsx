"use client";

import MuiDrawer from "@/components/MuiDrawer";
import MuiTextFieldOutlined from "@/components/MuiTextFieldOutlined";
import _headerTabs from "@/constants/_headerTabs";
import appIcons from "@/utilities/appIcons";
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { ABeeZee } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FormEvent, useState } from "react";

const ABeeZeeFont = ABeeZee({
  weight: "400",
  subsets: ["latin"],
});

function TypoLogo(): JSX.Element {
  return (
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
  );
}
export default function Header(): JSX.Element {
  const path = usePathname();
  const [searchValue, setSearchValue] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleClickSearch = (e: FormEvent<HTMLButtonElement>) => {
    //# -> Change route to SearchPage
  };
  const handleChangeSearchValue = (e: FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };
  const handleCloseDrawer = (): void => {
    setOpenDrawer(false);
  };
  const handleOpenDrawer = (): void => {
    setOpenDrawer(true);
  };
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
        <TypoLogo />
        <Stack sx={{ width: 330, height: 50 }} justifyContent="center">
          <MuiTextFieldOutlined
            icon="searchIcon"
            size="small"
            placeholder="دنبال چی هستی؟"
            onClickIcon={handleClickSearch}
            onChange={handleChangeSearchValue}
            value={searchValue}
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
                      sx={{ paddingX: 3, fontWeight: "500", fontSize: 15 }}
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
      <Stack
        display={{ xs: "flex", md: "none" }}
        minHeight={85}
        paddingX={1}
        paddingY={2}
        alignItems="center"
        justifyContent="space-between"
        rowGap={2}
        columnGap={3}
        flexDirection="row"
      >
        <Stack>
          <IconButton onClick={handleOpenDrawer}>
            {appIcons("settingsIcon")}
          </IconButton>
        </Stack>
        <Stack flex={1}>
          <MuiTextFieldOutlined
            icon="searchIcon"
            size="small"
            placeholder="دنبال چی هستی؟"
            onClickIcon={handleClickSearch}
            onChange={handleChangeSearchValue}
            value={searchValue}
          />
        </Stack>
        <MuiDrawer
          isOpen={openDrawer}
          onClose={handleCloseDrawer}
          anchor="right"
        >
          <Stack minWidth={230} padding={2}>
            <TypoLogo />
            {_headerTabs.map((ctx) => {
              if (ctx["hasLink"]) {
                return (
                  <Stack key={ctx["id"]} marginBottom={2}>
                    <Link href={ctx["link"]}>
                      <Button
                        variant="text"
                        fullWidth
                        sx={{ paddingX: 3, fontWeight: "700", fontSize: 15 }}
                        disabled={ctx["link"] === path}
                        onClick={handleCloseDrawer}
                      >
                        {ctx["name"]}
                      </Button>
                    </Link>
                  </Stack>
                );
              }
            })}
          </Stack>
        </MuiDrawer>
      </Stack>
    </Container>
  );
}
