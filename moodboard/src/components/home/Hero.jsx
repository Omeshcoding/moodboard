const Hero = () => {
  return (
    <>
      <section className="flex flex-col-reverse gap-4 lg:gap-10  md:flex-row px-1 sm:pl-4 lg:pl-20  h-[800px]  text-left  items-center  sm:mt-24 md:mt-0">
        <div className="flex flex-col gap-10 lg:gap-20 md:w-[40%] md:mt-10 pl-14 pr-4 md:pl-0">
          <h1 className=" xl:text-6xl  font-bold text-primary  xl:leading-[75px] max-md:max-w-full text-4xl  md:text-5xl md:leading-[63px] max-w-[500px] lg:max-w-[600px] max-sm:leading-[50px] ">
            Plan Your <br></br>{' '}
            <span className="text-red-900"> Dream Wedding</span> With Us
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            adipisci nesciunt ut aspernatur ipsa dolore temporibus? Harum
            accusantium dolorum asperiores temporibus provident illum fuga
          </p>

          <button
            type="button"
            className="bg-red-900 text-secondary-2 px-4 py-2 w-36 mx-auto md:mx-0"
          >
            Visit Our Site
          </button>
        </div>
        <div className="flex flex-col ml-5 w-[60%] max-md:ml-0 max-md:w-full order-1">
          <div className="w-[100%] mx-auto h-full ">
            <img
              height={1000}
              src="/hero.png"
              width={1000}
              alt="hero-img"
              className="bg-cover w-full h-[100%]  "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
