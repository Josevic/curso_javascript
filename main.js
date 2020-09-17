const servicios = {
  api: "soy api",
  mailer: "soy mailer",
  apollo: {},
};
const enviarCorreo = (srv) => {
  const { mailer, api } = srv;

  console.log(mailer, "  ", api);
};
enviarCorreo(servicios);
//Perimite consultar los objetos a través de una función
