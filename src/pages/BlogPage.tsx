import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Tag, ArrowRight, Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Skeleton } from "@/components/ui/skeleton";

const BlogPage = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/blog.json');
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const allTags = [...new Set(posts.flatMap(post => post.tags))];

  const filteredPosts = posts.filter(post => {
    const searchTermMatch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const tagMatch = selectedTag === 'all' || post.tags.includes(selectedTag);
    return searchTermMatch && tagMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge variant="secondary" className="mb-4">
            {t('blog.badge', { defaultValue: 'KUZO Insights' })}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black text-foreground mb-4">
            {t('blog.title', { defaultValue: 'The KUZO Tennis Blog' })}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('blog.description', { defaultValue: 'Your source for expert tennis tips, academy news, and inspiring stories from the court.' })}
          </p>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder={t('blog.search_placeholder', { defaultValue: 'Search articles...' })}
                className="w-full pl-10 pr-4 py-2 rounded-lg border bg-background"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2 items-center">
              <Tag className="text-muted-foreground w-5 h-5" />
              <Button variant={selectedTag === 'all' ? 'default' : 'outline'} onClick={() => setSelectedTag('all')}>{t('blog.tags_all', { defaultValue: 'All' })}</Button>
              {allTags.map(tag => (
                <Button key={tag} variant={selectedTag === tag ? 'default' : 'outline'} onClick={() => setSelectedTag(tag)}>
                  {t(`blog.tags_${tag}`, { defaultValue: tag.charAt(0).toUpperCase() + tag.slice(1) })}
                </Button>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="h-full flex flex-col overflow-hidden">
                  <CardHeader className="p-0">
                    <Skeleton className="aspect-video w-full" />
                  </CardHeader>
                  <CardContent className="flex-1 p-6">
                    <Skeleton className="h-4 w-1/4 mb-2" />
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full mt-1" />
                  </CardContent>
                  <CardFooter className="p-6 border-t">
                    <div className="flex items-center justify-between w-full">
                      <Skeleton className="h-4 w-1/3" />
                      <Skeleton className="h-4 w-1/3" />
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12 text-red-500">
              <p>{t('blog.error', { defaultValue: 'Failed to load blog posts. Please try again later.' })}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="p-0">
                      <div className="aspect-video overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 p-6">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {post.tags.map(tag => (
                          <Badge key={tag} variant="secondary">{t(`blog.tags_${tag}`, { defaultValue: tag })}</Badge>
                        ))}
                      </div>
                      <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                      <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter className="p-6 border-t">
                      <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;