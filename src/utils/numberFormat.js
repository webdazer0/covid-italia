const LOCALE = {
  IT: "it-IT",
  US: "en-US",
};

const locale = LOCALE.IT;

const format = (value) => {
  const customformat = new Intl.NumberFormat(locale);
  return customformat.format(value);
};
export const UtilsNumber = { format };
