export const logger = (value, ...args) =>
  console.log("[LOG]❗️ ", value, ...args);

const welcomeLogger = ({ title, content }) => {
  const style1 =
    "font-family:helvetica; font-size:20px; font-size:45px; font-weight:bold; color:red; -webkit-text-stroke:1px black;";
  const style2 = "font-family:helvetica; font-size:20px;";

  console.log(`\n%c${title} \n%c${content.join("")}`, style1, style2);
};

/**
 * Initial welcome in the console as Facebook
 * use only at the beginning of your App
 */
export const startWelcome = () =>
  welcomeLogger({
    title: "Attenzione!",
    content: ["Sei sulla console di Covid App "],
  });
