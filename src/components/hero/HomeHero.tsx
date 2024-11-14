const Hero = () => {
  return (
    <section>
      <img src="/hero.jpeg" alt="hero-image" />
      <div className="absolute bg-[#fff3e3] w-[50%] rounded-lg top-64 right-12 py-12 px-12 max-mdTabelt:top-40 max-mdTabelt:py-8 max-mdTabelt:px-8 max-phone:top-36 max-phone:right-8 max-phone:w-[55%]  max-phone:px-4 max-phone1:top-32 max-phone1:right-4 max-phone1:w-[60%] max-phone1:py-4 max-phone2:top-28 max-phone3:px-3">
        <h3 className="capitalize  font-semibold max-mdScreen:text-sm max-mdTabelt:text-xs max-phone:text-[10px] max-phone2:text-[9px] ">
          new arrival
        </h3>
        <h2 className="uppercase text-5xl text-primary my-8 font-bold w-[90%] leading-[4.2rem] max-bgScreen:w-full max-mdScreen:text-4xl max-mdScreen:my-4 max-mdTabelt:text-3xl max-smTablet:text-2xl max-phone:text-xl max-phone1:text-lg max-phone1:my-1  max-phone2:text-base max-phone3:text-sm  ">
          Discover Our New Collection
        </h2>
        <p className="text-lg mb-8 sm:max-lg:text-base lg:max-sm-tablet:text-base max-mdScreen:text-sm max-mdTabelt:text-xs max-phone:text-[11px] max-phone:mb-4 max-phone2:text-[10px] max-phone3:text-[9px] max-phone3:mb-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, dolore
          aspernatur aut voluptates veritatis hic maiores nihil qui
          reprehenderit.
        </p>
        <button className="font-bold uppercase bg-primary text-white py-6 px-20 max-mdScreen:py-3 max-mdScreen:px-10 max-mdTabelt:px-8 max-mdTabelt:text-xs max-phone1:px-6 max-phone1:text-[10px] max-phone2:py-1 max-phone2:text-[9px] max-phone2:px-4">
          buy now
        </button>
      </div>
    </section>
  );
};

export default Hero;
