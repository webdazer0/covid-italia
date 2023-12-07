import { format as tFormat } from "timeago.js";

const format = (value) => tFormat(value, "it");

export const UtilsDate = { format };
