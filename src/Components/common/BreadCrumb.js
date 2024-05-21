import React from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";
import { VscSearch } from "react-icons/vsc";
const BreadCrumb = (props) => {
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
      className="flex justify-between items-center bg-[#262840] text-white md:px-12 sm:px-12 px-4 md:py-24 sm:py-12 py-6"
    >
      <div className="w-full ">
        <div className="flex items-center text-xs mb-10">
          <Fade bottom delay={50} when={visible}>
            <Link to="/" className="hover:text-[#EC6A50]">
              {props.name}
            </Link>

            <p className="">{props.icon}</p>
            <p>{props.pageName}</p>
          </Fade>
        </div>
        <Fade bottom delay={100} when={visible}>
          <h1 className="md:text-5xl text-xl font-bold">{props.pageName}</h1>
        </Fade>
      </div>
      <div className="flex items-center">
        {props.input && (
          <div>
            <input
              type="text"
              placeholder="search and type enter.."
              className=" px-4 pr-44 py-4 rounded-full relative "
            />
            <div className="absolute  top-56 right-28 text-lg text-[#EC6A50] ">
              <button>
                <VscSearch />
              </button>
            </div>
          </div>
        )}
        {props.icons && (
          <div className="flex gap-10">
            <div className="flex flex-row gap-1 items-center">
              <div className="rounded-full h-11 w-20  flex items-center justify-center bg-[#EC6A50]">
                <img
                  src="/Assets/TostartUp/home.svg"
                  alt="img"
                  className="w-9"
                />
              </div>
              <div className="text-sm">
                <h3>Address</h3>
                <p>78, Avenue des Champs-Élysées, 75008 Paris</p>
              </div>
            </div>
            <div className="flex flex-row gap-1 items-center">
              <div className="rounded-full w-16 h-12 flex items-center justify-center bg-[#EC6A50]">
                <img
                  src="/Assets/TostartUp/email.svg"
                  alt="img"
                  className="w-7"
                />
              </div>
              <div className="text-sm">
                <h3>Email</h3>
                <p>contact@agence-vayalis.fr</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default BreadCrumb;
