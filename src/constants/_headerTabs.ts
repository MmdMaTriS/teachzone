type headerTableProps = {
  id: string;
  name: string;
  hasLink: boolean;
  link: string;
  openNewTab: boolean;
  openMenu: boolean;
  subMenuItems?: headerTableProps[];
};
function createHeaderTabs(props: headerTableProps): headerTableProps {
  return {
    ...props,
  };
}

const _headerTabs = [
  createHeaderTabs({
    id: "Home",
    name: "خانه",
    hasLink: true,
    link: "/",
    openNewTab: false,
    openMenu: false,
  }),
  createHeaderTabs({
    id: "ShortVideo",
    name: "ویدئو کوتاه",
    hasLink: true,
    link: "/story",
    openNewTab: false,
    openMenu: false,
  }),
  createHeaderTabs({
    id: "LongVideo",
    name: "ویدئو کامل",
    hasLink: true,
    link: "/courses",
    openNewTab: false,
    openMenu: false,
  }),
  createHeaderTabs({
    id: "News",
    name: "اخبار",
    hasLink: true,
    link: "/news",
    openNewTab: false,
    openMenu: false,
  }),
  createHeaderTabs({
    id: "Favorites",
    name: "مورد علاقه ها",
    hasLink: true,
    link: "/favorites",
    openNewTab: false,
    openMenu: false,
  }),
];
export default _headerTabs;
