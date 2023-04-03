import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";

export const formatToNow = (date: number | Date) =>
  formatDistanceToNow(date, { locale: fr });
