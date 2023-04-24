import Drawer from "@mui/material/Drawer";

interface DrawerProps {
  children: React.ReactNode;
  anchor?: "right" | "left" | "bottom" | "top" | undefined;
  isOpen: boolean;
  onClose: () => void;
}
export default function MuiDrawer(props: DrawerProps) {
  const { children, anchor = undefined, isOpen = false, onClose } = props;

  return (
    <Drawer anchor={anchor} open={isOpen} onClose={onClose} >
      {children}
    </Drawer>
  );
}
