"use client";

import appIcons from "@/utilities/appIcons";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { HTMLInputTypeAttribute } from "react";

type ComponentProps = {
  icon?: string;
  value?: number | string;
  type?: HTMLInputTypeAttribute;
  iconRipple?: boolean;
  onClickIcon?: any;
  fullWidth?: boolean;
  size?: "small" | "medium";
  label?: string;
  placeholder?: string;
  onChange?: any;
};
export default function MuiTextFieldOutlined(
  props: ComponentProps
): JSX.Element {
  return (
    <FormControl
      variant="outlined"
      fullWidth={props.fullWidth}
      size={props.size}
    >
      {props.label && (
        <InputLabel htmlFor={props.label}>{props.label}</InputLabel>
      )}
      <OutlinedInput
        id={props.label}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        endAdornment={
          props.icon && (
            <InputAdornment position="end">
              <IconButton
                disableRipple={props.iconRipple}
                onClick={props.onClickIcon}
                size={props.size}
              >
                {appIcons(props.icon, {
                  fontSize: props.size === "small" ? "small" : "medium",
                })}
              </IconButton>
            </InputAdornment>
          )
        }
        label={props.label}
      />
    </FormControl>
  );
}
