import html from "../../public/html.png";
import css from "../../public/css.jpg";
import react from "../../public/reactjs.png";
import javascript from "../../public/javascript.png";
import reactnative from "../../public/reactjs.png";
import shopify from "../../public/shopify.jpg";
import graphql from "../../public/graphql.png";
import tailwind from "../../public/tailwind.png";
import bootstrap from "../../public/bootstrap.jpg";
function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: react,
      name: "ReactJs",
    },
    {
      id: 5,
      logo: reactnative,
      name: "React Native",
    },
    {
      id: 6,
      logo: shopify,
      name: "Shopify",
    },
    {
      id: 7,
      logo: graphql,
      name: "Graphql",
    },
    {
      id: 8,
      logo: tailwind,
      name: "Tailwind css",
    },
    {
      id: 9,
      logo: bootstrap,
      name: "Bootstrap",
    },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 pt-9"
    >
      <div>
        <h1 className="text-5xl font-bold mb-5 text-center text-gray-800">Experience</h1>
        <p className="text-center text-xl mb-10 text-gray-600">
          I've more than 1 years of experience in the below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-2 rounded-full md:w-[180px] md:h-[180px] shadow-lg p-4 hover:shadow-xl cursor-pointer hover:scale-105 duration-300 transition-transform"
              key={id}
            >
              <img src={logo} className="w-[100px] h-[100px] rounded-full mb-3" alt={name} />
              <div className="text-center text-xl font-semibold text-gray-800">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
