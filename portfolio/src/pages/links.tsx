import Background from "./components/Background";
import Image from "next/image";

const Links = () => {
  return (
    <section id="lets-talk" className=" font-playfair overflow-x-clip">
      <Background />
      <div className="flex flex-col items-center">
        <Image
          src="/assets/ProfilePicture.webp"
          alt="Sean's Profile Picture"
          width={400}
          height={400}
          priority
          className="rounded-full w-[80vw] h-[80vw] mt-6 object-cover"
        />
        <h1
          className="text-5xl lg:text-6xl tracking-tighter pt-4 lg:pt-20"
          style={{
            textShadow: "10px 10px 25px #5ACEBA7D",
          }}
          >
          Hi! I&apos;m Sean Chuah
        </h1>
        <p
          className="px-4 py-6 text-center"
          style={{
            textShadow: "2px 2px 10px #5ACEBA7D",
          }}
        >
          An ex-audio engineer now diving into IT and software hustle. My dream? Making kick-ass games that everyone can enjoy.
        </p>
        <div className="w-full lg:h-full h-px lg:w-px bg-secondaryColor mx-10 transition-all duration-300"/>
        <div className="flex flex-col lg:flex-row items-center justify-center pt-6 lg:pt-32">
          <div className="flex flex-col lg:gap-16 w-full lg:w-[35vw] items-center transition-all duration-300">
            <div>
              <h1
                className="text-3xl lg:text-4xl tracking-tight text-center"
                style={{
                  textShadow: "2px 2px 10px #5ACEBA7D",
                }}
              >
                Contact Me
              </h1>
              <p
                className="font-lato text-md font-light text-center px-4"
                style={{
                  textShadow: "2px 2px 10px #5ACEBA7D",
                }}
              >
                I&apos;m always open to freelance work or open-souce projects!
              </p>
            </div>
            <div className="flex flex-col lg:gap-6 h-[24vh] lg:pl-0 pl-12 w-full lg:w-auto mb-4 lg:mb-0 lg:h-[40vh] justify-center">
              <Details
                type="WhatsApp"
                description="+6016 3540 886"
                href="https://wa.me/60163540886"
                icon="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384C196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3l44-12z"
              />
              <Details
                type="Email"
                description="chuahtseyung2002@gmail.com"
                href="mailto:chuahtseyung2002@gmail.com"
                icon="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM218 271.7L64.2 172.4C66 156.4 79.5 144 96 144H352c16.5 0 30 12.4 31.8 28.4L230 271.7c-1.8 1.2-3.9 1.8-6 1.8s-4.2-.6-6-1.8zm29.4 26.9L384 210.4V336c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V210.4l136.6 88.2c7 4.5 15.1 6.9 23.4 6.9s16.4-2.4 23.4-6.9z"
              />
              <Details
                type="Resume"
                description="Chuah Tse Yung Resume"
                href="https://docs.google.com/document/d/1S-V6vihxCVKVA7KS5fJp4dH42RvHdvu0Xr56raQi_j8/edit?usp=sharing"
                icon="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V304H176c-35.3 0-64 28.7-64 64V512H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM176 352h32c30.9 0 56 25.1 56 56s-25.1 56-56 56H192v32c0 8.8-7.2 16-16 16s-16-7.2-16-16V448 368c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24H192v48h16zm96-80h32c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H304c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H320v96h16zm80-112c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v32h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V432 368z"
              />
            </div>
          </div>
          <div className="w-full lg:h-full h-px lg:w-px bg-secondaryColor mx-10 transition-all duration-300"/>
          <div className="flex flex-col pt-5 lg:pt-0 lg:gap-16 w-full lg:w-[35vw] items-center transition-all duration-300">
            <div>
              <h1
                className="text-3xl lg:text-4xl tracking-tight text-center"
                style={{
                  textShadow: "2px 2px 10px #5ACEBA7D",
                }}
              >
                Social Media
              </h1>
              <p
                className="font-lato text-md font-light text-center px-4"
                style={{
                  textShadow: "2px 2px 10px #5ACEBA7D",
                }}
              >
                Drop a follow if you find my stuff interesting!
              </p>
            </div>
            <div className="flex flex-col lg:gap-6 h-[40vh] lg:h-[50vh] lg:pl-0 pl-12 w-full lg:w-auto justify-center">
              <Details
                type="Portfolio"
                description="schuah.me"
                href="/"
                icon="M384 32c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96C0 60.7 28.7 32 64 32H384zM320 313.4V176c0-8.8-7.2-16-16-16H166.6c-12.5 0-22.6 10.1-22.6 22.6c0 6 2.4 11.8 6.6 16L184 232l-66.3 66.3C114 302 112 306.9 112 312s2 10 5.7 13.7l36.7 36.7c3.6 3.6 8.5 5.7 13.7 5.7s10-2 13.7-5.7L248 296l33.4 33.4c4.2 4.2 10 6.6 16 6.6c12.5 0 22.6-10.1 22.6-22.6z"
              />
              <Details
                type="GitHub"
                description="github.com/DoughnutsNCookies"
                href="https://github.com/DoughnutsNCookies"
                icon="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"
              />
              <Details
                type="LinkedIn"
                description="linkedin.com/in/chuahtseyung"
                href="https://linkedin.com/in/chuahtseyung"
                icon="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
              />
              <Details
                type="YouTube"
                description="youtube.com/@chuahtseyung"
                href="https://youtube.com/@chuahtseyung"
                icon="M186.8 202.1l95.2 54.1-95.2 54.1V202.1zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-42 176.3s0-59.6-7.6-88.2c-4.2-15.8-16.5-28.2-32.2-32.4C337.9 128 224 128 224 128s-113.9 0-142.2 7.7c-15.7 4.2-28 16.6-32.2 32.4-7.6 28.5-7.6 88.2-7.6 88.2s0 59.6 7.6 88.2c4.2 15.8 16.5 27.7 32.2 31.9C110.1 384 224 384 224 384s113.9 0 142.2-7.7c15.7-4.2 28-16.1 32.2-31.9 7.6-28.5 7.6-88.1 7.6-88.1z"
              />
              <Details
                type="Instagram"
                description="instagram.com/sean.chuahtseyung"
                href="https://www.instagram.com/sean.chuahtseyung"
                icon="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface DetailsProps {
  type: string;
  description: string;
  href: string;
  icon: string;
}

const Details = (props: DetailsProps) => {
  const { type, description, href, icon } = props;

  return (
    <a
      href={href}
      target="_blank"
      className="font-lato font-light text-md lg:text-xl transition-all cursor-pointer"
    >
      <div className="flex flex-row items-center lg:gap-5">
        <div className="h-14 lg:h-20 w-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="fill-accentColor transition-all w-full mt-3 transform h-10 lg:h-14"
          >
            <path d={icon} />
          </svg>
        </div>
        <div className="flex flex-col">
          <h1
            className="text-md lg:text-2xl font-semibold tracking-tight cursor-pointer"
            style={{
              textShadow: "2px 2px 10px #5ACEBA7D",
            }}
          >
            {type}
          </h1>
          <p
            className="text-xs transition-all cursor-pointer"
            style={{
              textShadow: "2px 2px 10px #5ACEBA7D",
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default Links;