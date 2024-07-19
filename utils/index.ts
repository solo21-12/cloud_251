import { navbar_items } from "@/types";

export const find_current_index = (
  path: string,
  navbar_items_list: navbar_items[]
) => {
  const cur_index = navbar_items_list.findIndex((item) => item.link === path);

  if (cur_index > -1) {
    return cur_index;
  }
  return 0;
};
