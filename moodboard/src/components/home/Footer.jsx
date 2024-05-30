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
                      <div className="flex gap-5 max-md:justify-center">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cd0c20aee88bddd40c99c1725afc15ab0fe17ad6186248f1c069cd3f774ef7a?apiKey=26d3383497af445c8a5ef7825b140c3a&"
                          alt="icon_1"
                          className="shrink-0 aspect-square w-[35px]"
                          width={35}
                          height={35}
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1be85aea4db731204ea6c1f4c2f9b91cf49b2d6dc3e02b106c77ddb9ed406cde?apiKey=26d3383497af445c8a5ef7825b140c3a&"
                          alt="icon_2"
                          className="shrink-0 aspect-square w-[35px]"
                          width={35}
                          height={35}
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/65da70e85678e57b54b8474daf755cf9365ec169a38e76f5d4aa67f2a947acf8?apiKey=26d3383497af445c8a5ef7825b140c3a&"
                          alt="icon_3"
                          className="shrink-0 aspect-square w-[35px]"
                          width={35}
                          height={35}
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7cf241b0b6e3917691ad9e2f8dbed004ae3e144aa1f9f64beb22d7677bcd5770?apiKey=26d3383497af445c8a5ef7825b140c3a&"
                          alt="icon_4"
                          className="shrink-0 aspect-square w-[35px]"
                          width={35}
                          height={35}
                        />
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/889cb0a802f62676bfa75fa62bd60aea75e4191df7552767d245a8bc511757d5?apiKey=26d3383497af445c8a5ef7825b140c3a&"
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
                    <h5 className="text-2xl font-bold  capitalize md:mt-7 ">
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
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8575fd0148f8bd23ff9007fe896841248a177f3e6f8a7b1d05c2aab42a8e3df?apiKey=26d3383497af445c8a5ef7825b140c3a&"
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
