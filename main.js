const servicios = {
  api: {},
  mailer: "soy mailer",
  apollo: {},
};
const enviarCorreo = (srv) => {
  const { mailer } = srv;
  console.log(mailer);
};
enviarCorreo(servicios);
//Perimite consultar los objetos a través de una función
