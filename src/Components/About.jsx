
import Title from "../Layouts/Title";
import ButtonLayout from "../Layouts/ButtonLayout";
import { AttentionSeeker } from "react-awesome-reveal";

const About = () => {
  return (
    <section>
      <Title color="black" title="Nosotros"></Title>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 w-3/5 m-auto mt-16">
        <div className="border flex items-center justify-center p-8">
          <div className="text-center md:text-start py-8">
            <h1 className="text-4xl font-bold">Barrera & Cuevas</h1>
            <p className="text-2xl text-gray-600">Arquitectos Asociados</p>
            <ButtonLayout
              title="Contacto"
              width="w-1/2"
              margin="m-auto md:ms-0"
            ></ButtonLayout>
          </div>
        </div>

        <AttentionSeeker effect="pulse">
          <img
            className="w-full h-full object-cover hidden md:block "
            src="https://res.cloudinary.com/dvuggm2if/image/upload/v1710398234/int.locales/7/cgrbemwo0znovxclq7ra.png"
            alt=""
          />
        </AttentionSeeker>
      </div>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 w-3/5 m-auto my-2">
        <AttentionSeeker effect="pulse">
          <img
            className="w-full h-full object-cover hidden md:block "
            src="https://res.cloudinary.com/dvuggm2if/image/upload/v1710398234/int.locales/10/apgilmtypipuosmce32s.png"
            alt=""
          />
        </AttentionSeeker>
        <div className="border flex items-center justify-center">
          <div className="text-start">
            <p className="text-2xl text-gray-600 p-8">
              Estamos dedicados a la prestación de servicios profesionales de
              arquitectura, con énfasis en{" "}
              <span className="font-bold">asesorías a empresas</span> en la
              gestión y desarrollo de sus proyectos, en áreas como las
              <span className="font-bold">
                {" "}
                habilitaciones interiores de oficinas y locales comerciales
              </span>
              , en proyectos habitacionales e industriales, institucionales y de
              almacenamiento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
