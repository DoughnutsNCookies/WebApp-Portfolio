export const HomePage = () => {
  return (
    <section id="home">
      <div className="flex flex-col items-center justify-center h-screen overflow-hidden from-black via-zinc-600/20 to-black">
        <nav className="animate-fade-in">
          <ul className="flex items-center justify-center gap-4"></ul>
        </nav>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <h1 className="cursor-text z-10 text-transparent duration-1000 bg-white text-edge-outline animate-title text-5xl lg:text-9xl whitespace-nowrap bg-clip-text tracking-tighter">
          I'm Sean Chuah
        </h1>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="text-center animate-fade-in text-xl lg:text-3xl font-lato font-light tracking-wide" style={{
                textShadow: "2px 2px 10px #5ACEBA7D",
              }}>
          <p className="max-w-[53rem] px-6 lg:px-0">An ex-audio engineer now diving into IT and Software hustle. My dream? Making kick-ass games that everyone can enjoy.</p>
        </div>
      </div>
    </section>
  );
};