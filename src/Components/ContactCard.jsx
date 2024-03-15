import { JackInTheBox } from "react-awesome-reveal";
import location from "../assets/icons/location.svg";
import mail from "../assets/icons/mail-icon.svg";
import phone from "../assets/icons/phone-icon.svg";
import entelpuertomontt1 from "../assets/intLocales/entelpuertomontt1.png";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
const Contact = () => {
  return (
    <section className="w-full my-24 md:my-40">
      <div className="md:grid grid-cols-3 lg:w-3/5 m-auto">
        <div className="relative col-span-2 ">
          <div className="py-24 px-8 text-white">
            <p className="text-4xl font-bold">Contáctanos</p>
            <p className="mt-8 w-3/4">
              Si deseas consultar mayor información sobre nuestros servicios o
              tienes alguna duda al respecto, no dudes en contactarte con
              nosotros.
            </p>
          </div>
          <div className="brightness-50 absolute top-0 -z-10 w-full h-full">
            <img
              src={entelpuertomontt1}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="ps-8 py-24 pe-2 flex flex-col gap-16 border border-black">
          <div className="flex items-center gap-2">
            <CiLocationOn className="text-6xl" />
            <div>
              <p className="font-semibold text-lg">Dirección</p>
              <p className="text-gray-500">
                Carlos Antúnez N°2453, Providencia
              </p>
            </div>
          </div>
          <div className="flex items-center  gap-2">
            <CiMail className="text-6xl" />
            <div>
              <p className="font-semibold text-lg">Correo Electronico</p>
              <p className="text-gray-500">byc@barreraycuevas.cl</p>
            </div>
          </div>
          <div className="flex items-center  gap-2">
            <CiPhone className="text-6xl" />
            <div>
              <p className="font-semibold text-lg">Teléfono</p>
              <p className="text-gray-500">+56 22 875 7705</p>
              <p className="text-gray-500">+56 22 875 7708</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
