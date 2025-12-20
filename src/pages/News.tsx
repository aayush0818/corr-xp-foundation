import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { ArrowRight, Calendar } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const newsData = [
  {
    id: 1,
    title: 'CORR XP Wins Infrastructure Excellence Award 2024',
    excerpt:
      'Our team has been recognized for outstanding contributions to infrastructure protection with the prestigious Industry Excellence Award.',
    date: '2024-12-15',
    category: 'Company News',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'New Innovations in Cathodic Protection Technology',
    excerpt:
      'Our R&D team has developed a breakthrough in cathodic protection systems that promises 40% improvement in corrosion prevention.',
    date: '2024-11-28',
    category: 'Innovation',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'CORR XP Expands Operations to Southeast Asia',
    excerpt:
      'We are excited to announce the opening of our new regional office in Singapore, serving clients across Southeast Asia.',
    date: '2024-10-20',
    category: 'Expansion',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Industry Report: State of Infrastructure Corrosion 2024',
    excerpt:
      'Our annual report reveals critical insights into the current state of infrastructure corrosion and emerging protection strategies.',
    date: '2024-09-15',
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Partnership with National Transportation Authority',
    excerpt:
      'CORR XP signs multi-year agreement to provide corrosion assessment services for the national highway bridge network.',
    date: '2024-08-10',
    category: 'Partnerships',
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'CEO Featured in Engineering Today Magazine',
    excerpt:
      'Our CEO discusses the future of sustainable infrastructure protection in an exclusive interview with Engineering Today.',
    date: '2024-07-22',
    category: 'Media',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
  },
];

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const NewsPage = () => {
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
      <section className="bg-slate pt-32 pb-20">
        <div className="container-custom">
          <AnimatedSection>
            <span className="text-primary font-medium mb-2 block">News & Media</span>
            <h1 className="text-warm-white mb-6 max-w-3xl">Latest Updates & Industry Insights</h1>
            <p className="text-xl text-warm-white/80 max-w-2xl">
              Stay informed about our latest projects, innovations, and developments in 
              the field of corrosion protection and infrastructure preservation.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured Article */}
      <section className="bg-warm-white section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <Link to={`/news/${newsData[0].id}`} className="block group">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                  <img
                    src={newsData[0].image}
                    alt={newsData[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-primary font-medium text-sm">{newsData[0].category}</span>
                  <h2 className="text-2xl md:text-3xl font-semibold mt-2 mb-4 group-hover:text-primary transition-colors">
                    {newsData[0].title}
                  </h2>
                  <p className="text-charcoal/70 mb-4 leading-relaxed">{newsData[0].excerpt}</p>
                  <div className="flex items-center gap-2 text-charcoal/60 text-sm">
                    <Calendar size={16} />
                    <span>{formatDate(newsData[0].date)}</span>
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* News Grid */}
      <section className="bg-warm-white-dark section-padding">
        <div className="container-custom">
          <AnimatedSection className="mb-12">
            <h2 className="text-center">More News</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.slice(1).map((article, index) => (
              <AnimatedSection key={article.id} delay={index * 0.1}>
                <Link to={`/news/${article.id}`} className="block group">
                  <div className="bg-warm-white rounded-lg overflow-hidden shadow-custom-sm hover:shadow-custom-lg transition-shadow duration-300">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-accent text-sm font-medium">{article.category}</span>
                        <span className="text-charcoal/50 text-sm">{formatDate(article.date)}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-charcoal/70 text-sm line-clamp-2">{article.excerpt}</p>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-slate section-padding">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h2 className="text-warm-white mb-4">Stay in the Loop</h2>
            <p className="text-warm-white/80 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter for the latest industry insights, project updates, 
              and corrosion protection best practices.
            </p>
            <form className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md bg-warm-white text-charcoal placeholder:text-charcoal/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="hero" type="submit">
                Subscribe
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default NewsPage;
