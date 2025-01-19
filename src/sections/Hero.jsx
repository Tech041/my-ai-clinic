import Button from "../components/Button.jsx";

const Hero = () => {
  return (
    <section
      className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32"
      id="hero"
    >
      <div className="container flex justify-between">
        <div className="  flex-1 z-2 max-w-512 max-lg:max-w-388">
          <div className="caption small-2 uppercase text-p3">
            Automated clinic
          </div>
          <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
            Very easy to use.
          </h1>
          <p className="max-w-440 mb-14 body-1 max-md:mb-10">
            Developed to automate health care delivery, reduce human error and
            improve general health care services.
          </p>
          <a href="#pricing"> 
            <Button icon="/images/zap.svg">Try it now</Button>
          </a>{" "}
        </div>

        <div className="hidden flex-1 md:block hero-img_res">
          <img
            src="/images/hero_ai.jpeg"
            className=" w-[700px] h-[400px] max-md:hidden max-lg:h-auto"
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
