import logoFondoNegro from "../assets/logos/logoFondoNegro.png";
const Footer = () => {
  return (
    <section className="w-full bg-black mt-8 p-8">
      <div className="text-white flex flex-wrap gap-20 items-center justify-center m-auto w-3/4">
        <img
          src={logoFondoNegro}
          alt="logo barrera y cuevas arquitectos"
          className="max-w-56"
        />
        <div className="flex flex-col gap-4 items-center md:items-start text-center">
          <p>Carlos Antúnez N°2453, Providencia</p>
          <p>byc@barreraycuevas.cl</p>
          <p>+56 22 875 7705</p>
          <p>+56 22 875 7708</p>
        </div>
      </div>
    </section>
  );
};
export default Footer;
