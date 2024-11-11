const Hero = () => {
  return (
    <section>
      <img src="/hero.jpeg" alt="hero-image" />
      <div className="absolute bg-[#fff3e3] w-[50%] right-[4rem] top-[35rem] p-16 sm:max-xl:top-[1rem] sm:max-xl:right-[2rem] sm:max-md:w-[75%] sm:max-xl:p-8 md:max-xl:w-[60%] sm-tablet:max-xl:top-[7rem] lg:max-sm-tablet:top-[4rem] lg:max-sm-tablet:w-[70%] ">
        <h3 className="capitalize text-4xl font-bold sm:max-sm-tablet:text-2xl ">
          new arrival
        </h3>
        <h2 className="uppercase text-7xl text-primary my-8 font-bold leading-[5rem] sm:max-sm-tablet:text-4xl ">
          Discover Our New Collection
        </h2>
        <p className="text-2xl mb-8 sm:max-lg:text-base lg:max-sm-tablet:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, dolore
          aspernatur aut voluptates veritatis hic maiores nihil qui
          reprehenderit.
        </p>
        <button className="text-2xl uppercase bg-primary text-white py-6 px-8">
          buy now
        </button>
      </div>
    </section>
  );
};

export default Hero;
