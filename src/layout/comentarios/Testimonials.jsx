import Slider from 'react-slick';
import styled from 'styled-components';
import "./Testimonials.css";
import testOne from "../../assets/images/cliente1.jpg";
import testTwo from "../../assets/images/cliente2.jpg";
import testThree from "../../assets/images/cliente3.jpg";
import testFour from "../../assets/images/cliente4.jpg";




const TestimonialsContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const TestimonialCard = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin: 20px;
`;

const TestimonialImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 10px auto;
`;

const TestimonialText = styled.p`
  font-family: 'Arial', sans-serif;
`;

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: 'Pablito Escobar',
      image: testOne,
      comment: "Estoy muy contenta con el gimnasio [nombre del gimnasio]. Las máquinas son de última generación y los entrenadores son muy profesionales. El ambiente es muy agradable y siempre hay gente con ganas de ayudarse mutuamente. Lo recomiendo al 100%.",
    },
    {
      id: 2,
      name: 'Alex Roldan',
      image: testTwo,
      comment: "Llevo varios años entrenando en [nombre del gimnasio] y estoy muy satisfecho. Las máquinas son de alta calidad y el personal es muy amable y atento. Siempre me siento como en casa. Es un gimnasio muy recomendable.",
    },
    {
      id: 3,
      name: 'Kevin Garson',
      image: testThree,
      comment: "He estado en muchos gimnasios, pero este se destaca. Las máquinas americanas son de primera categoría y el entorno es realmente inspirador. Si buscas un lugar donde te sientas motivado y apoyado en tu viaje de fitness, ¡este es el lugar!",
    },
    {
        id: 2,
        name: 'Diana Ozorio',
        image: testFour,
        comment:"Nunca pensé que pudiera disfrutar de ir al gimnasio. Pero desde que empecé a entrenar en [nombre del gimnasio] he descubierto que me encanta. Me siento como si estuviera en un club social más que en un gimnasio. Es el mejor gimnasio que he conocido.",
      },
    // Agrega más testimonios aquí
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <TestimonialsContainer className='my-4'>
      <h2>Testimonios de Clientes</h2>
      <Slider {...settings}>
        {testimonialsData.map((testimonial) => (
          <TestimonialCard key={testimonial.id}>
            <TestimonialImage src={testimonial.image} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <TestimonialText>{testimonial.comment}</TestimonialText>
          </TestimonialCard>
        ))}
      </Slider>
    </TestimonialsContainer>
  );
};

export default Testimonials;
