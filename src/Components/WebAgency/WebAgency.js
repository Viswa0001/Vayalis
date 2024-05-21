import React from "react";
import data from "../../Content/WebAgency/WebAgency.json";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";
const WebAgency = () => {
  const [visible, setVisible] = React.useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className=" lg:px-16 px-6 grid place-items-center justify-center"
    >
      {data &&
        data?.Agency.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-center gap-4 py-10"
          >
            {index % 2 === 0 ? (
              <>
                <div className="md:w-1/2">
                  <Fade bottom delay={50} when={visible}>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-auto"
                    />
                  </Fade>
                </div>
                <div className="md:w-1/2">
                  <Fade bottom delay={100} when={visible}>
                    <h2 className="text-2xl font-bold mb-5">{item.title}</h2>
                    <p className="tracking-wide">{item.descrip}</p>
                  </Fade>
                </div>
              </>
            ) : (
              <>
                <div className="md:w-1/2 order-2 md:order-1">
                  <Fade bottom delay={50} when={visible}>
                    <h2 className="text-2xl font-bold mb-5">{item.title}</h2>
                    <p className="tracking-wide">{item.descrip}</p>
                  </Fade>
                </div>
                <div className="md:w-1/2 order-1 md:order-2">
                  <div className="p-5">
                    <Fade bottom delay={100} when={visible}>
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-auto"
                      />
                    </Fade>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
    </div>
  );
};

export default WebAgency;
// // import React from "react";
// import data from "../../Content/WebAgency/WebAgency.json";
// const LeftImage = ({ image, heading, description }) => {
//   return (
//     <div className="md:flex  justify-center px-16  items-center ">
//       <div className="md:w-1/2 w-full px-16 py-4">
//         <img src={image} alt="img" className="" />
//       </div>
//       <div className="md:w-1/2 w-full grid  space-y-8">
//         <h4 className="text-3xl font-semibold">{heading}</h4>
//         <p className="leading-8">{description}</p>
//       </div>
//     </div>
//   );
// };
// const RightImage = ({ image, heading, description }) => {
//   return (
//     <div className="md:flex justify-center items-center py-16 px-16 bg-[#322C41] text-white">
//       <div className="md:w-1/2 w-full grid space-y-8">
//         <h4 className="text-3xl font-semibold">{heading}</h4>
//         <p className="leading-8">{description}</p>
//       </div>
//       <div className="md:w-1/2 w-full px-10 py-4">
//         <img src={image} alt="img" className="w-full" />
//       </div>
//     </div>
//   );
// };
// const ImageText = ({ image, heading, description, reverse }) => {
//   return (
//     <div
//       className={`md:flex flex-col-reverse md:flex-row justify-center items-center ${
//         reverse ? "md:flex-row-reverse" : ""
//       }`}
//     >
//       <div className="md:w-1/2 w-full px-10 py-4">
//         <img src={image} alt="img" className="w-full" />
//       </div>
//       <div className="md:w-1/2 w-full px-6 grid space-y-8 text-start">
//         <h4 className="md:text-3xl text-xl font-semibold">{heading}</h4>
//         <p className="leading-8">{description}</p>
//       </div>
//     </div>
//   );
// };
// const WebAgency = () => {
//   return (
//     <div className=" my-16 ">
//       <div>
//         {data.Agency.map((value, id) => (
//           <div key={id} className="my-24 md:block hidden ">
//             {id % 2 === 0 ? (
//               <LeftImage
//                 image={value.img}
//                 heading={value.title}
//                 description={value.descrip}
//               />
//             ) : (
//               <RightImage
//                 image={value.img}
//                 heading={value.title}
//                 description={value.descrip}
//               />
//             )}
//           </div>
//         ))}
//         <div className="my-16 md:hidden block ">
//           {data.Agency.map((d, i) => (
//             <ImageText
//               image={d.img}
//               heading={d.title}
//               description={d.descrip}
//               reverse={i % 2 !== 0}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WebAgency;
