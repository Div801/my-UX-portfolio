import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

type LinkItem = { label: 'Case Study' | 'Figma' | 'Live' | 'GitHub'; href: string };
type Brand = { alt: string; src?: string; textFallback?: string };

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;      // remote image URL
  color: string;      // tailwind gradient string
  tags: string[];
  links?: LinkItem[];
  brand?: Brand;
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Kapruka E-commerce Redesign',
      category: 'UI/UX Design',
      description:
        'Checkout and product discovery improvements through heuristic audit, prototypes, and remote usability tests.',
      // Pexels: e-commerce vibe
      image:
        'https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=1600',
      color: 'from-pink-300 to-purple-300',
      tags: ['Heuristic Review', 'Wireframes', 'Usability Testing', 'UI'],
      links: [
        { label: 'Case Study', href: 'https://www.figma.com/board/A2l24Xnrwerk4FVCbVr5x3/KaprukaRedesign-UXResearch.?node-id=10-463&t=o9h71H7ht7jto5SR-1' },
        { label: 'Figma', href: 'https://www.figma.com/design/OfH2ynj4YySkO0ZWIvBuGh/kapruka-Design-File?node-id=0-1&t=80V9JyXYGUOVoTLV-1' },
      ],

      brand: {
        alt: 'Kapruka',
        src: 'https://your-cdn.com/kapruka-logo-new.png',
        textFallback: 'Kapruka',
      },
    },
    {
      id: 2,
      title: 'Nenasala.lk Website Redesign',
      category: 'UI/UX Design',
      description:
        'Accessibility-first refresh: clearer IA, modern visuals, and WCAG-aligned contrast for Sri Lankan users.',
      // Pexels: clean laptop workspace
      image:
        'https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=1600',
      color: 'from-green-300 to-blue-300',
      tags: ['Accessibility', 'Responsive UI'],
      links: [
        { label: 'Case Study', href: 'https://www.notion.so/Nenasala-lk-UX-research-237dc64d10128026a5caff6994ea3131?source=copy_link' },
        { label: 'Figma', href: 'https://www.figma.com/design/ZZuzLGRaB4BU9pR2tdS4eC/Nenasala.lk.Remake?node-id=87-300&t=nwARZS6XgIYXdgUp-1' },
      ],
    },
    {
      id: 3,
      title: 'AI Dream Visualizer',
      category: 'Experimental App',
      description:
        'An innovative self-initiated app that transforms imagination into dream-like visuals using AI models.',
      // Pexels: dreamy abstract AI vibe
      image:
        'https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg?auto=compress&cs=tinysrgb&w=1600',
      color: 'from-purple-300 to-indigo-300',
      tags: [ 'Innovation', 'Mobile App'],
      links: [
        { label: 'Figma', href: 'https://www.figma.com/proto/8nES5kGl12Yv6tW9rcwIUr/Dream-Journal-Dream-visualizer?page-id=0%3A1&node-id=1-2&viewport=179%2C262%2C0.29&t=WulBxIrM5JouJnbp-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2' },
      ],
    },
    {
      id: 4,
      title: 'Banking App Redesign (WIP)',
      category: 'UI/UX Design',
      description:
        'Exploring secure, accessible money management with clearer limits/fees visibility and simpler flows.',
      // Pexels: fintech phone payment
      image:
        'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1600',
      color: 'from-orange-300 to-pink-300',
      tags: ['FinTech', 'Mobile'],
      links: [
        { label: 'Figma', href: 'https://www.figma.com/file/your-banking' },
        { label: 'Case Study', href: 'https://your-site/case-studies/banking' },
      ],
    },
  ];

  const primaryLink = (p: Project) =>
    p.links?.find((l) => l.label === 'Case Study')?.href || p.links?.[0]?.href;

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-thin text-gray-800 mb-6">UI/UX Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A selection of recent redesign projects that showcase my approach to solving complex user experience challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      'https://images.pexels.com/photos/25922596/pexels-photo-25922596.jpeg?auto=compress&cs=tinysrgb&w=1600';
                  }}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                />
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-purple-500 bg-purple-50 px-3 py-1 rounded-full">
                    {project.category}
                  </span>

                  <motion.a
                    href={primaryLink(project)}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title}`}
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-gray-50 rounded-full hover:bg-pink-50 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-pink-500" />
                  </motion.a>
                </div>

                <h3 className="text-xl font-medium text-gray-800 mb-3 group-hover:text-pink-600 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap gap-3 mb-3">
                    {project.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium underline underline-offset-4 decoration-pink-400 hover:text-purple-500"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}

                {project.links?.some((l) => l.label === 'Case Study') ? (
                  <a
                    href={project.links.find((l) => l.label === 'Case Study')!.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-pink-500 font-medium group-hover:text-purple-500 transition-colors duration-300"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                ) : (
                  <button
                    className="flex items-center text-pink-500 font-medium group-hover:text-purple-500 transition-colors duration-300"
                    onClick={() => window.open(project.image, '_blank')}
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
