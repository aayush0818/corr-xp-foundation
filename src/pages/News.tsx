import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { ArrowRight, Calendar, User, Clock, TrendingUp, Newspaper } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const newsData = [
  {
    id: 1,
    title: 'CORR XP India Completes Major Infrastructure Retrofitting Project',
    excerpt: 'Our team successfully completed a large-scale structural retrofitting project using advanced CFRP systems for enhanced seismic performance.',
    date: '2024-12-15',
    category: 'Project Update',
    author: 'CORR XP Team',
    readTime: '3 min',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    featured: true,
  },
  {
    id: 2,
    title: 'New Fiber Wrapping Techniques for RCC Structures',
    excerpt: 'Introducing advanced FRP strengthening solutions that improve load-carrying capacity, stiffness, and ductility of existing structures.',
    date: '2024-11-28',
    category: 'Technical',
    author: 'Engineering Team',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 3,
    title: 'Expanding Services to Industrial Facilities Sector',
    excerpt: 'CORR XP India now offers specialized structural repair and protection services for manufacturing plants and processing facilities.',
    date: '2024-10-20',
    category: 'Company News',
    author: 'Management',
    readTime: '4 min',
    image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 4,
    title: 'Understanding Corrosion Control in Concrete Structures',
    excerpt: 'A comprehensive guide to treating corroded reinforcement and applying anti-corrosion systems for extended service life.',
    date: '2024-09-15',
    category: 'Educational',
    author: 'Technical Division',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 5,
    title: 'Bridge Rehabilitation Project Successfully Delivered',
    excerpt: 'CORR XP India completes structural repair and strengthening of a major infrastructure bridge using carbon fiber systems.',
    date: '2024-08-10',
    category: 'Project Update',
    author: 'Project Team',
    readTime: '3 min',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 6,
    title: 'Steel Coating Best Practices: ISO Guidelines',
    excerpt: 'Learn about surface preparation, anti-corrosive coatings, and zinc-rich coating applications as per ISO standards.',
    date: '2024-07-22',
    category: 'Technical',
    author: 'Coating Specialists',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
];

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

const NewsPage = () => {
  const featuredNews = newsData.find(n => n.featured);
  const otherNews = newsData.filter(n => !n.featured);

  return (
    <>
      <Helmet>
        <title>News & Updates | CORR XP India - Structural Repair Insights</title>
        <meta
          name="description"
          content="Stay updated with CORR XP India's latest project updates, technical insights, and company news in structural repair and retrofitting."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-slate overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-dark via-slate to-slate" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent" />
          <div className="absolute inset-0 pattern-lines opacity-40" />
        </div>
        
        <div className="container-custom relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Newspaper className="w-4 h-4 text-primary" />
                <span className="text-primary text-sm font-medium">News & Updates</span>
              </div>
              
              <h1 className="text-warm-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Latest Updates &{' '}
                <span className="text-primary">Technical Insights</span>
              </h1>
              
              <p className="text-lg text-warm-white/80 max-w-2xl leading-relaxed">
                Stay informed about our latest projects, technical innovations, and developments 
                in structural repair, protection, and retrofitting.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredNews && (
        <section className="bg-warm-white section-padding">
          <div className="container-custom">
            <AnimatedSection>
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="relative">
                  <div className="aspect-[16/10] rounded overflow-hidden shadow-custom-lg">
                    <img
                      src={featuredNews.image}
                      alt={featuredNews.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded flex items-center gap-1">
                      <TrendingUp size={12} />
                      Featured
                    </span>
                  </div>
                </div>
                <div>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded inline-block mb-4">
                    {featuredNews.category}
                  </span>
                  <div className="flex items-center gap-3 text-charcoal/60 text-sm mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {formatDate(featuredNews.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {featuredNews.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4 leading-tight">
                    {featuredNews.title}
                  </h2>
                  <p className="text-charcoal/70 mb-6 leading-relaxed">
                    {featuredNews.excerpt}
                  </p>
                  <Button variant="default" size="lg">
                    <span>Read Full Story</span>
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="bg-warm-white-dark section-padding">
        <div className="container-custom">
          <AnimatedSection className="mb-10">
            <span className="font-script text-accent text-lg block mb-2">Latest Stories</span>
            <h2 className="text-charcoal">More Updates</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherNews.map((article, index) => (
              <AnimatedSection key={article.id} delay={index * 0.1}>
                <article className="bg-warm-white rounded overflow-hidden border border-border hover:shadow-custom-lg transition-all duration-300 group h-full flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-charcoal/50 text-xs mb-2">
                      <span>{formatDate(article.date)}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-charcoal mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-charcoal/70 text-sm line-clamp-2 flex-1">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
                      <span className="text-xs text-charcoal/60 flex items-center gap-1">
                        <User size={12} />
                        {article.author}
                      </span>
                      <span className="text-primary font-medium text-sm group-hover:underline flex items-center gap-1">
                        Read
                        <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-slate section-padding-sm">
        <div className="container-custom">
          <AnimatedSection className="text-center max-w-xl mx-auto">
            <span className="font-script text-primary text-lg mb-2 block">Stay Connected</span>
            <h2 className="text-warm-white mb-4">Subscribe to Updates</h2>
            <p className="text-warm-white/70 mb-6 text-sm">
              Get the latest technical insights and project updates delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded bg-warm-white text-charcoal placeholder:text-charcoal/50 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <Button variant="hero" type="submit">
                Subscribe
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default NewsPage;