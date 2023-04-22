import SearchIcon from "@mui/icons-material/Search";

export default function appIcons(name: string, args?: any): any {
  const icon = {
    searchIcon: <SearchIcon {...args} />,
  }[name];
  return icon || "";
}
