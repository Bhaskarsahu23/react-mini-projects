import { Link } from 'react-router-dom';
import CTA from '../components/CTA';
import { projects } from '../constants';
import { arrow } from '../asset/icons';

function Projects() {
  return (
    <section className="max-container ">
      <h1 className="head-text">
        My{' '}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Step into my Projects Page! It's like a treasure trove of my favorite
          creations, blending creativity with practicality. From eye-catching
          websites to interfaces that just make sense, each project tells its
          own story. Whether it's making things user-friendly or tackling
          challenges with cool solutions, I've put my heart into every bit of
          code. So, take a casual stroll through these digital adventures, and
          let the projects do the talking. Curious? Ready to jump in? Let's dive
          together into the world of interactive wonders! 🚀
        </p>
      </div>
      <div className="flex flex-col my-20 gap-16 ">
        {projects.map((project) => (
          <div className="flex">
            <div>
              <h4 className="text-2xl font-poppins font-semibold text-slate-800">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex gap-8">
                <div className="flex items-center gap-2 font-poppins">
                  <Link
                    to={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    Live Link
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="inline-block w-4 h-4 object-contain"
                  />
                </div>
                <div className="flex items-center gap-2 font-poppins">
                  <Link
                    to={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    Github Link
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="inline-block w-4 h-4 object-contain"
                  />
                </div>
              </div>
            </div>
            <div>
              <img
                src={project.img}
                alt={project.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
}
export default Projects;
