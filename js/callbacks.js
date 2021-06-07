const huiswerkMaken = (vak, callback) => {
  setTimeout(() => {
    console.log(`Ik begin met het maken van mijn ${vak} huiswerk.`);
    callback();
  }, 2000);
};

const klaarNotificatie = () => {
  console.log(`Mijn huiswerk is af!`);
};

huiswerkMaken("Geschiedenis", klaarNotificatie);
