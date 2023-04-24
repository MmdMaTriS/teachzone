import SearchIcon from "@mui/icons-material/Search";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";

export default function appIcons(name: string, args?: any): any {
  const icon = {
    searchIcon: <SearchIcon {...args} />,
    settingsIcon: <TuneOutlinedIcon {...args} />,
  }[name];
  return icon || "";
}
