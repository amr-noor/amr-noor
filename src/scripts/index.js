const data = async () => {
  try {
    const res = await fetch("/data/db.json");
    return res.json();
  } catch (err) {
    throw err;
  }
}

(function () {
  emailjs.init({
    publicKey: import.meta.env.VITE_KEY,
  });
})();

const send = obj => emailjs.send(import.meta.env.VITE_SERVICE, import.meta.env.VITE_TEMPLATE, obj);

export default {
  data,
  send
}