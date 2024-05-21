import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";
const ContactForm = () => {
  const [visible, setVisible] = React.useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);
  const [capVal, setCapval] = useState(null);
  return (
    <div
      ref={ref}
      className="xl:flex gap-10 bg-[#FF7256] lg:px-14 md:px-6  pt-14 pb-32 md:space-y-0 space-y-5"
    >
      <Fade bottom delay={50} when={visible}>
        <div className="md:w-1/4">
          <p className="text-white lg:text-4xl text-3xl">Be Contacted</p>
        </div>
        <div className="grid w-full space-y-10">
          <form className="w-full space-y-4">
            <div className="flex w-full  sm:gap-10 gap-2">
              <div class="relative z-0 w-full">
                <input
                  type="text"
                  id="floating_standard"
                  class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-white peer"
                  placeholder=" "
                />
                <label
                  for="floating_standard"
                  class="absolute text-sm text-white  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Your email*
                </label>
              </div>
              <div className="group bg-white flex justify-center hover:bg-[#051C3C] md:px-4 px-2 py-1  w-fit">
                <button
                  disabled={!capVal}
                  className="text-[#FF7256] font-semibold uppercase group-hover:text-white "
                >
                  send
                </button>
              </div>
            </div>

            <ReCAPTCHA
              sitekey="6Ldn1NcpAAAAAOPqRopJ2OjpYV-OTTwYcqC0Hvsa"
              onChange={(val) => setCapval(val)}
            />
          </form>
        </div>
      </Fade>
    </div>
  );
};

export default ContactForm;
