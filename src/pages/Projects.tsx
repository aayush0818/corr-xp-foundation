import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const categories = ['All', 'Infrastructure', 'Oil & Gas', 'Commercial', 'Marine', 'Industrial'];

const projectsData = [
  {
    id: 1,
    title: 'Harbor Bridge Restoration',
    category: 'Infrastructure',
    location: 'New York, NY',
    year: '2024',
    description: 'Complete corrosion assessment and protective coating application for a historic harbor bridge.',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Refinery Tank Coating',
    category: 'Oil & Gas',
    location: 'Houston, TX',
    year: '2024',
    description: 'Internal and external coating systems for petroleum storage tanks.',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Multi-Story Parking Repair',
    category: 'Commercial',
    location: 'Chicago, IL',
    year: '2023',
    description: 'Structural concrete repair and waterproofing for a 6-level parking structure.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Port Terminal Protection',
    category: 'Marine',
    location: 'Miami, FL',
    year: '2023',
    description: 'Cathodic protection system installation for marine terminal structures.',
    image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Power Plant Assessment',
    category: 'Industrial',
    location: 'Phoenix, AZ',
    year: '2023',
    description: 'Comprehensive corrosion evaluation of cooling tower structures.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Highway Overpass Repair',
    category: 'Infrastructure',
    location: 'Los Angeles, CA',
    year: '2022',
    description: 'Structural rehabilitation and expansion joint replacement for highway overpasses.',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    title: 'Pipeline Coating Project',
    category: 'Oil & Gas',
    location: 'Midland, TX',
    year: '2022',
    description: 'External pipeline coating and cathodic protection for natural gas transmission lines.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    title: 'Office Tower Facade',
    category: 'Commercial',
    location: 'Seattle, WA',
    year: '2022',
    description: 'Concrete facade repair and protective coating application for a 40-story office building.',
    image: 'https://images.unsplash.com/photo-1464082354059-27db6ce50048?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 9,
    title: 'Marina Dock Restoration',
    category: 'Marine',
    location: 'San Diego, CA',
    year: '2021',
    description: 'Complete rehabilitation of floating dock structures including pile repair.',
    image: 'https://images.unsplash.com/photo-1527015175922-36a306cf0e20?auto=format&fit=crop&w=800&q=80',
  },
];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Our Projects | CORR XP - Portfolio of Infrastructure Protection Work</title>
        <meta
          name="description"
          content="Explore CORR XP's portfolio of successful corrosion protection and concrete rehabilitation projects across infrastructure, oil & gas, commercial, and marine sectors."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-slate pt-32 pb-20">
        <div className="container-custom">
          <AnimatedSection>
            <span className="text-primary font-medium mb-2 block">Our Work</span>
            <h1 className="text-warm-white mb-6 max-w-3xl">
              Projects That Define Excellence
            </h1>
            <p className="text-xl text-warm-white/80 max-w-2xl">
              Explore our portfolio of successful corrosion protection and concrete 
              rehabilitation projects across diverse industries.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="bg-warm-white section-padding">
        <div className="container-custom">
          {/* Category Filter */}
          <AnimatedSection className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-warm-white-dark text-charcoal hover:bg-muted'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.1}>
                <Link to={`/projects/${project.id}`} className="block group">
                  <div className="bg-warm-white rounded-lg overflow-hidden shadow-custom-sm hover:shadow-custom-lg transition-shadow duration-300 border border-border">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-charcoal/60 mb-2">
                        <span>{project.location}</span>
                        <span>•</span>
                        <span>{project.year}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-charcoal/70 text-sm line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate section-padding">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-warm-white mb-4">Have a Similar Project?</h2>
            <p className="text-warm-white/80 max-w-2xl mx-auto mb-8">
              Let's discuss how we can apply our expertise to your infrastructure 
              protection needs.
            </p>
            <Button variant="hero" asChild>
              <Link to="/contact">
                Start Your Project
                <ArrowRight size={18} />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
