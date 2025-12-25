import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { ArrowRight, Calendar, User, Clock, TrendingUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const newsData = [
  {
    id: 1,
    title: 'CORR XP Wins Infrastructure Excellence Award 2024',
    excerpt:
      'Our team has been recognized for outstanding contributions to infrastructure protection with the prestigious Industry Excellence Award at the National Engineering Summit.',
    date: '2024-12-15',
    category: 'Company News',
    author: 'CORR XP Team',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    featured: true,
  },
  {
    id: 2,
    title: 'New Innovations in Cathodic Protection Technology',
    excerpt:
      'Our R&D team has developed a breakthrough in cathodic protection systems that promises 40% improvement in corrosion prevention for marine structures.',
    date: '2024-11-28',
    category: 'Innovation',
    author: 'Dr. Meera Iyer',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 3,
    title: 'CORR XP Expands Operations to Southeast Asia',
    excerpt:
      'We are excited to announce the opening of our new regional office in Singapore, marking our first international expansion to serve clients across Southeast Asia.',
    date: '2024-10-20',
    category: 'Expansion',
    author: 'Corporate Communications',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 4,
    title: 'Industry Report: State of Infrastructure Corrosion 2024',
    excerpt:
      'Our annual report reveals critical insights into the current state of infrastructure corrosion in India and emerging protection strategies that could save billions.',
    date: '2024-09-15',
    category: 'Research',
    author: 'Research Division',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 5,
    title: 'Partnership with National Highway Authority',
    excerpt:
      'CORR XP signs a landmark multi-year agreement to provide corrosion assessment services for over 500 bridges in the national highway network.',
    date: '2024-08-10',
    category: 'Partnerships',
    author: 'Business Development',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 6,
    title: 'CEO Featured in Engineering Today Magazine',
    excerpt:
      'Our CEO Dr. Rajesh Kumar discusses the future of sustainable infrastructure protection and the role of technology in an exclusive interview.',
    date: '2024-07-22',
    category: 'Media',
    author: 'PR Team',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
];

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    'Company News': 'bg-primary',
    'Innovation': 'bg-accent',
    'Expansion': 'bg-green-600',
    'Research': 'bg-blue-600',
    'Partnerships': 'bg-purple-600',
    'Media': 'bg-orange-600',
  };
  return colors[category] || 'bg-primary';
};

const NewsPage = () => {
  const featuredNews = newsData.find(n => n.featured);
  const otherNews = newsData.filter(n => !n.featured);

  return (
    <>
      <Helmet>
        <title>News & Media | CORR XP - Latest Updates and Industry Insights</title>
        <meta
          name="description"
          content="Stay updated with CORR XP's latest news, industry insights, research publications, and company announcements in corrosion protection and concrete rehabilitation."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1920&q=80)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        
        <div className="container-custom relative z-10 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="font-script text-primary text-xl md:text-2xl mb-4 block">
              News & Media
            </span>
            <h1 className="text-warm-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Latest Updates &{' '}
              <span className="text-primary">Industry Insights</span>
            </h1>
            <p className="text-xl text-warm-white/85 max-w-2xl leading-relaxed">
              Stay informed about our latest projects, innovations, and developments in 
              the field of corrosion protection and infrastructure preservation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredNews && (
        <section className="bg-warm-white section-padding">
          <div className="container-custom">
            <AnimatedSection>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="aspect-[16/10] rounded overflow-hidden shadow-custom-xl">
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
                    <span className={`px-3 py-1 ${getCategoryColor(featuredNews.category)} text-white text-xs font-medium rounded`}>
                      {featuredNews.category}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-4 text-charcoal/60 text-sm mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {formatDate(featuredNews.date)}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={14} />
                      {featuredNews.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {featuredNews.readTime}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4 leading-tight">
                    {featuredNews.title}
                  </h2>
                  <p className="text-charcoal/70 text-lg mb-8 leading-relaxed">
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
          <AnimatedSection className="mb-12">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-script text-accent text-lg block mb-2">Latest Stories</span>
                <h2 className="text-charcoal">More News</h2>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherNews.map((article, index) => (
              <AnimatedSection key={article.id} delay={index * 0.1}>
                <article className="bg-warm-white rounded overflow-hidden shadow-custom-sm hover:shadow-custom-xl transition-all duration-500 group h-full flex flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-dark/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 ${getCategoryColor(article.category)} text-white text-xs font-medium rounded`}>
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-charcoal/50 text-sm mb-3">
                      <span>{formatDate(article.date)}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-charcoal/70 text-sm line-clamp-3 flex-1">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                      <span className="text-sm text-charcoal/60 flex items-center gap-1">
                        <User size={14} />
                        {article.author}
                      </span>
                      <span className="text-primary font-medium text-sm group-hover:underline flex items-center gap-1">
                        Read More
                        <ArrowRight size={14} />
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
      <section className="bg-slate section-padding relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-30" />
        
        <div className="container-custom relative z-10">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <span className="font-script text-primary text-lg mb-2 block">Stay Connected</span>
            <h2 className="text-warm-white mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-warm-white/70 mb-8">
              Get the latest industry insights, project updates, and corrosion protection 
              best practices delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded bg-warm-white text-charcoal placeholder:text-charcoal/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="hero" type="submit" size="lg">
                Subscribe
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default NewsPage;
