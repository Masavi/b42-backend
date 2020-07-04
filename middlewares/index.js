module.exports = {
  showDate: (req, res, next) => {
    const date = new Date();
    console.log(`🌎 Año de Petición: ${date.getFullYear()}`);
    next();
  },
};
