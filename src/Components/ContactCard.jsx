import Titles from "../Layouts/Title";
import { JackInTheBox } from "react-awesome-reveal";
import location from "../assets/icons/location.svg";
import mail from "../assets/icons/mail-icon.svg";
import phone from "../assets/icons/phone-icon.svg";

const Contact = () => {
  return (
    <main className="bg-black text-white py-12">
      <Titles title={"Contacto"} color={"white"}></Titles>

      <section className="w-3/4 m-auto ">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-1 lg:items-center lg:gap-x-16">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 text-center">
              <JackInTheBox>
                <div className="block  bg-black border-gray-100 p-12 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                  <span className="inline-block rounded-lg p-3">
                    <img src={location} />
                  </span>
                  <h2 className="mt-2 font-bold text-2xl">Dirección</h2>
                  <p className="mt-4 block text-base ">
                    Carlos Antúnez N°2453, Providencia, RM
                  </p>
                </div>
                <div className="block  bg-black border-gray-100 p-12 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                  <span className="inline-block rounded-lg p-3">
                    <img src={mail} />
                  </span>
                  <h2 className="mt-2 font-bold text-2xl">Correo</h2>
                  <p className="mt-4 block text-base ">byc@barreraycuevas.cl</p>
                </div>
                <div className="block  bg-black border-gray-100 p-12 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
                  <span className="inline-block rounded-lg p-3">
                    <img src={phone} />
                  </span>
                  <h2 className="mt-2 font-bold text-2xl">Teléfono</h2>
                  <p className="mt-4 block text-base ">+56 22 875 7705</p>
                  <p className="mt-4 block text-base ">+56 22 875 7708</p>
                </div>
              </JackInTheBox>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Contact;
