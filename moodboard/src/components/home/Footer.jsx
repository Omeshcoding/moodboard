import Copyright from '../Copyright';

const Footer = () => {
  return (
    <footer className="bg-[#770C15] text-white  md:px-20 pb-6 mt-8 max-md:text-center pt-8">
      <div className="mt-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[83%] max-md:ml-0 max-md:w-full text-white">
                  <div className="flex flex-col grow max-md:mt-10">
                    <div className="text-3xl font-bold  max-md:text-2xl">
                      <span className="">SubhMangalPlanning</span>
                    </div>
                    <div className="mt-10 text-2xl font-semibold leading-10 max-md:mt-10">
                      Abse Wedding Planning bhi hogi subh mangal
                    </div>
                    <div className="mt-10 max-md:pr-5 max-md:mt-10">
                      <p className="text-xl mb-4 ml-2">Follow us for more !</p>
                      <div className="flex gap-5 max-md:justify-center text-white">
                        <img
                          loading="lazy"
                          src="/Facebook.svg"
                          alt="icon_1"
                          className="shrink-0 aspect-square w-[35px] "
                          width={35}
                          height={35}
                        />
                        <img
                          loading="lazy"
                          src="Instagram.svg"
                          alt="icon_2"
                          className="shrink-0 aspect-square w-[35px]"
                          width={35}
                          height={35}
                        />
                        <img
                          loading="lazy"
                          src="Tik tok.svg"
                          alt="icon_3"
                          className="shrink-0 aspect-square w-[35px]"
                          width={35}
                          height={35}
                        />
                        <img
                          loading="lazy"
                          src="/Youtube.svg"
                          alt="icon_4"
                          className="shrink-0 aspect-square w-[35px]"
                          width={35}
                          height={35}
                        />
                        <img
                          loading="lazy"
                          src="Twitter.svg"
                          alt="icon_5"
                          className="shrink-0 aspect-square w-[35px]"
                          width={35}
                          height={35}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[17%] max-md:ml-0 max-md:w-full ">
                  <div className="flex flex-col mt-14 text-xl  max-md:mt-10">
                    <h5 className="text-2xl font-bold capitalize "> Menu </h5>
                    <div className="mt-11 max-md:mt-10">Home</div>

                    <div className="mt-7">About us</div>
                    <div className="mt-7">Serices</div>
                    <div className="mt-6">Reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow px-px mt-2.5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col self-stretch my-auto text-xl max-md:mt-10">
                    <h5 className="text-2xl font-bold  capitalize md:mt-12 ">
                      {' '}
                      Services{' '}
                    </h5>
                    <div className="mt-11 max-md:mt-10">Wedding Plan</div>
                    <div className="mt-6">Task Scheduling</div>
                    <div className="mt-6">Vendor Management</div>
                    <div className="mt-7">Astrology services</div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[72%] max-md:ml-0 max-md:w-full">
                  <img
                    loading="lazy"
                    src="map.png"
                    alt="ext_48 image"
                    className="grow w-full aspect-[1.16] max-md:mt-10"
                    width={1200}
                    height={1035}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shrink-0 mt-20 border-solid bg-stone-300 border-[3px] border-stone-300 h-[3px] max-md:mt-10 max-md:max-w-full" />
      <Copyright />
    </footer>
  );
};

export default Footer;
