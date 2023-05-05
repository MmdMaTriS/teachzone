interface HeaderProps {
  id: number;
  link: string;
  name: string;
}
const createHeaderRoute = (
  id: number,
  link: string,
  name: string
): HeaderProps => {
  return {
    id,
    link,
    name,
  };
};
const _headerRoutes: HeaderProps[] = [
  createHeaderRoute(1, "/", "خانه"),
  createHeaderRoute(2, "/story", "ویدیو کوتاه"),
  createHeaderRoute(3, "/courses", "ویدیو کامل"),
  createHeaderRoute(4, "/roadmap", "نقشه راه"),
  createHeaderRoute(5, "/favorites", "مورد علاقه"),
];

export { _headerRoutes };
