import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import { useState } from "react";
import logo from "../Assets/cookie-svgrepo-com.svg";
const Cookies = () => {
  const data = [
    {
      title: "cookie",
      description: "cookieyes-consent",
    },
    {
      title: "duration",
      description: "1 year",
    },
    {
      title: "the description",
      description:
        "CookieYes place ce témoin pour mémoriser les préférences des utilisateurs en matière de consentement afin que",
    },
  ];
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="fixed bottom-8 left-4">
        <img src={logo} alt="img" className="w-[30px] " />
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-4xl h-[50vh] space-y-4 border bg-white p-3">
            <DialogTitle className="font-bold">
              <div className="flex justify-between">
                Customize Consent Prefences
                <button onClick={() => setIsOpen(false)}>x</button>
              </div>
            </DialogTitle>
            <Description>
              <div className="grid">
                <small>
                  We use cookies to help you navigate efficiently and perform
                  certain features. You will find detailed information about all
                  cookies under each consent category below.
                </small>
                <small>
                  Cookies that are categorized as “necessary” are stored on your
                  browser as they are essential to enable basic functionality of
                  the website. ... Show more
                </small>
              </div>
            </Description>

            <Disclosure>
              <DisclosureButton className="py-2">
                <div className="flex justify-between text-sm ">
                  <p> Is team pricing available?</p>
                  <p className="text-green-800">Always Active</p>
                </div>
                <div className="text-start">
                  <p className="text-sm">
                    Necessary cookies are crucial to the basic functionality of
                    the website and the website will not function as intended
                    without them. These cookies do not store any personally
                    identifiable data.
                  </p>
                </div>
              </DisclosureButton>
              <DisclosurePanel className="text-black">
                <div>
                  {data.map((value) => (
                    <div className="text-xs flex justify-start ">
                      <p className="w-1/6 ">{value.title}</p>
                      <p>{value.description}</p>
                    </div>
                  ))}
                </div>
              </DisclosurePanel>
            </Disclosure>

            <div className="flex justify-evenly items-end">
              <button className=" border border-blue-400 text-blue-400 p-2">
                reject everything
              </button>
              <button className="border border-blue-400 text-blue-400 p-2">
                save my Prefences
              </button>
              <button className="border border-blue-400 text-blue-400 p-2">
                Accept everything
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
export default Cookies;
