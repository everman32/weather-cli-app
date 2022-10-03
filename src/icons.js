const getIcon = (icon) => {
  const codes = ["01", "02", "03", "04", "09", "10", "11", "13", "50"];
  const icons = ["☀️", "🌤️", "☁️", "☁️", "🌧️", "🌦️", "🌩️", "❄️", "🌫️"];
  return icons.at(codes.indexOf(icon.slice(0, -1)));
};

export default getIcon;
