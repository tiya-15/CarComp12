import { navigationData } from "../data/navigationData";

export function searchPages(query) {
  const text = query.toLowerCase();

  return navigationData.filter((page) =>
    page.keywords.some((keyword) =>
      text.includes(keyword.toLowerCase())
    )
  );
}