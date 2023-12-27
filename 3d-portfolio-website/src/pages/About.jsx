import CTA from '../components/CTA';
import { skills } from '../constants';

function About() {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{' '}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Bhaskar Sahu
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          👋 Hi! I'm Bhaskar Sahu, a Frontend Developer who enjoys making ideas
          come alive with awesome and easy-to-use interfaces. I'm all about
          creating websites that not only work well but also look great. My
          journey in web development began with a love for turning ideas into
          interactive wonders. Let's team up and build something amazing
          together!
        </p>
        <p>
          Excited about making cool websites, I'm a frontend web developer on a
          mission to mix creativity with practicality. I want to make websites
          look awesome and work smoothly by adding a touch of innovation. My aim
          is to create designs that catch your eye and work well on any device.
          I love blending code and design to make the web a fun and friendly
          space for everyone. Join me on this journey where we turn every
          project into a user-friendly digital masterpiece! 🚀
        </p>
        <p>
          I'm a regular person who enjoys turning ideas into lively web
          experiences. When I'm not coding, you'll probably catch me trying out
          new coffee, watching football, or playing FIFA. I truly believe that
          websites should have a friendly touch, so I enjoy adding quirky
          details to designs. Balancing work and play is key, and I'm here to
          bring warmth and authenticity to the digital world. Let's make the web
          not just work well but also feel a bit more human and fun!
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
}
export default About;
