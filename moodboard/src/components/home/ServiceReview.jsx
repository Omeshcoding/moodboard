import useSmoothScroll from '../../hooks/useSmoothScroll';

const ServiceReview = () => {
  useSmoothScroll();
  return (
    <section
      id="reviews"
      className="bg-gradient-to-tr to-red-800 from-white self-stretch py-20 xl:pl-20  w-full max-md:px-2 max-md:mt-10 max-md:max-w-full h-full lg:h-[1000px] flex gap-20  items-center flex-col lg:flex-row mb-10
   "
    >
      <div className="flex flex-col grow px-12 py-20 mt-1.5  text-center shadow-lg max-md:px-5 max-md:mt-10 max-md:max-w-full bg-white w-[500px] ">
        <h3 className="self-center mt-14 text-4xl font-bold text-900 capitalize max-md:mt-10 text-red-900 ">
          {' '}
          Client Review To Our Service{' '}
        </h3>
        <p className="mt-20 text-base leading-6 text-neutral-700  max-md:max-w-full">
          Listen what our previous customers have to say about us !
        </p>
      </div>
      <div className="w-[60%]">
        <div className=" mb-20">
          <div>
            <div className="relative">
              <img
                src="/review1.png"
                alt="review1"
                height={391}
                width={262}
                className="z-20 relative"
              />
              {/* <img /> */}
              <div className=" z-30 md:absolute top-8 left-48 w-[380px] h-full md:h-[266px] bg-white flex flex-col grow px-12 py-8 mt-1.5 gap-4  text-left shadow-lg max-md:px-5  max-md:max-w-full  ">
                <h4 className="text-2xl font-bold">Garima</h4>
                <div className="flex">
                  {Array(5)
                    .fill(1)
                    .map((_, index) => (
                      <img
                        key={index}
                        src="/star.png"
                        alt="rectangle"
                        height={30}
                        width={30}
                        className=""
                      />
                    ))}
                </div>

                <p className="text-sm leading-6">
                  SubhMangalPlanning made our wedding day truly magical. Their
                  attention to detail and dedication ensured everything went
                  perfectly. We couldn&apos;t have asked for more!
                </p>
              </div>
              <img
                src="/rectangle.png"
                alt="rectangle"
                height={380}
                width={344}
                className="absolute top-10 md:left-24 z-0"
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="relative">
              <img
                src="/review2.png"
                alt="review2"
                height={391}
                width={262}
                className="z-20 relative"
              />

              <div className=" z-30 md:absolute top-[4.5rem] left-48 w-[380px] h-full md:h-[266px] bg-white flex flex-col grow px-12 mt-1.5 gap-4  text-left shadow-lg max-md:px-5 py-8 max-md:max-w-full  ">
                <h4 className="text-2xl font-bold">Shreya Sharma</h4>
                <div className="flex">
                  {Array(5)
                    .fill(1)
                    .map((_, index) => (
                      <img
                        key={index}
                        src="/star.png"
                        alt="rectangle"
                        height={30}
                        width={30}
                        className=""
                      />
                    ))}
                </div>

                <p className="text-sm leading-6">
                  Exceptional service from start to finish. The team at
                  SubhMangalPlanning listened to our ideas and brought them to
                  life beautifully. Highly recommend them for anyone planning a
                  wedding!
                </p>
              </div>
              <img
                src="/rectangle.png"
                alt="rectangle"
                height={380}
                width={344}
                className="absolute top-14 md:left-24  z-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ServiceReview;
