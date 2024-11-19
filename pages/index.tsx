import { FC } from "react";
import { FaUser, FaFolderClosed, FaLinkedin } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { CgBrowser } from "react-icons/cg";
import { FaMobileScreenButton } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdMiscellaneousServices } from "react-icons/md";

import Image from "next/image";

const Home: FC = () => {
  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 p-4 md:p-0 flex items-center'>
        <div>
          <h2 className='font-bold text-3xl my-2'>Hello, i&rsquo;m</h2>
          <h1 className='font-bold text-4xl my-2'>Ravi Choppari</h1>
          <p className='my-4 text-md'>
            Freelance UI designer, Fullstack developer, & Data Miner. I create
            seamless web experiences for end-users.
          </p>
          <div className='flex gap-4'>
            <a
              href='#about'
              className='bg-primary py-2 px-4 rounded border border-primary flex gap-2 items-center'
            >
              About me <FaUser />
            </a>
            <a
              href='#Projects'
              className='bg-secondary py-2 px-4 rounded border border-primary flex items-center gap-2'
            >
              Projects <FaFolderClosed />
            </a>
          </div>
        </div>
        <div className='my-4 rounded-full bg-primary shadow'>
          <Image
            className='rounded-full'
            src='/profile.png'
            width={500}
            height={500}
            alt='Picture of the author'
          />
        </div>
      </div>
      <div id='about' className='my-4 p-4 md:p-0'>
        <h3 className='text-primary font-bold text-lg'>About me:</h3>
        <p className='text-sm my-2'>
          Hi, my name is Ravi Choppari, i am a Fullstack web developer,
          UI designer, and Mobile developer. I jhave honed my skills in Web
          Development and advance i have core understanding of advance UI design
          principles. Here are the major skiills i have.{" "}
        </p>
        <div className='flex items-center gap-4'>
          <h1 className='text-primary font-bold  text-5xl'>12+</h1>
          <h2>
            Years of experience. Specialised in building apps, while ensuring a
            seamless web experience for end users.
          </h2>
        </div>
        <div className='grid gird-cols-6 md:grid-cols-4 gap-4 my-8 font-bold'>
          <div className='p-4 border border-primary bg-primary h-40 flex flex-col justify-end'>
            <MdDesignServices size={"32px"} />
            <h2>
              UI & UX <br />
              DESIGNING
            </h2>
          </div>
          <div className='p-4 border border-primary bg-primary flex flex-col justify-end'>
            <CgBrowser size={"32px"} />
            <h2>
              WEB <br />
              DEVELOPMENT
            </h2>
          </div>
          <div className='p-4 border border-primary bg-primary flex flex-col justify-end'>
            <FaMobileScreenButton size={"32px"} />
            <h2>
              MOBILE <br />
              DEVELOPMENT
            </h2>
          </div>
          <div className='p-4 border border-primary bg-primary flex flex-col justify-end'>
            <MdMiscellaneousServices size={"32px"} />
            <h2>
              Springboot <br />
              Nodejs
            </h2>
          </div>
        </div>
        <div>
          <div className='my-4'>
            <h3 className='text-primary font-bold text-lg mb-4'>
              The service I offer:
            </h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center'>
              <div className='p-4 border-2 border-primary rounded flex flex-col items-center'>
                <MdDesignServices size={"32px"} />
                <h2 className='text-sm mb-4 text-primary font-bold mt-2 mb-4'>
                  UI & UX DESIGNING
                </h2>
                <p className='text-sm'>
                  I design beautiful web interfaces with figma
                </p>
              </div>
              <div className='p-4 border-2 border-primary rounded flex flex-col items-center'>
                <CgBrowser size={"32px"} />
                <h2 className='text-sm mb-4 text-primary font-bold mt-2 mb-4'>
                  WEB DEVELOPMENT
                </h2>
                <p className='text-sm'>
                  I develop frontend with ReactJS/VueJS/NextJS
                </p>
              </div>
              <div className='p-4 border-2 border-primary rounded flex flex-col items-center'>
                <MdMiscellaneousServices size={"32px"} />
                <h2 className='text-sm mb-4 text-primary font-bold mt-2 mb-4'>
                  Springboot/NodeJS
                </h2>
                <p className='text-sm'>
                  I develop Rest services with Springboot/NodeJS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='Projects' className='mt-6 mb-4'>
        <h3 className='text-primary font-bold text-lg mb-2'>
          Featured projects:
        </h3>
        <p className='text-sm'>
          I have worked on many projects over the course of being a Web
          Developer, here are a few of my live, real-world projects
        </p>
      </div>
      <div id='contact' className='mt-6 mb-4'>
        <h3 className='text-primary font-bold text-lg mb-2'>
          Connect with me:
        </h3>
        <p className='text-sm'>Satisfied with me? Please contact me</p>
        
        <div className='text-sm text-primary underline flex items-center gap-2 my-2'>
          <FaLinkedin  />
          <a
            href='https://www.linkedin.com/in/choppari-ravi-6182a23a/'
            className='text-sm text-primary underline'
          >
            https://www.linkedin.com
          </a>
        </div>
        <div className='text-sm text-primary underline flex items-center gap-2 my-2'>
          <BiLogoGmail />
          <a
            href='mailto:choppari.ravi2020@gmail.com'
            className='text-sm text-primary underline'
          >
            choppari.ravi2020@gmail.com
          </a>
        </div>
        <div className='text-sm text-primary underline flex items-center gap-2 my-2'>
          <FaInstagram />
          <a
            href='https://www.instagram.com/choppariravi/'
            className='text-sm text-primary underline'
            target="_blank"
          >
            https://www.instagram.com
          </a>
          
        </div>
        <div className='text-sm text-primary underline flex items-center gap-2 my-2'>
          <FaSquareXTwitter />
          <a
            href='https://www.instagram.com/choppariravi/'
            className='text-sm text-primary underline'
            target="_blank"
          >
            https://x.com
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
