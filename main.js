const servicios = {
  api: {},
  mailer: "soy mailer",
  apollo: {},
};
const enviarCorreo = ({ mailer }) => {
  console.log(mailer);
};
enviarCorreo(servicios);
//Perimite consultar los objetos a través de una función
