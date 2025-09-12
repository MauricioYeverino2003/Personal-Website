"use client"
import { useState } from 'react';
import { Star, Send, Heart } from 'lucide-react';
import { Button } from 'src/components/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "src/components/Card"
import { Input } from "src/components/input";
import { Textarea } from "src/components/textarea";
import { ImageWithFallback } from 'src/components/ImageWithFallback';
import { toast } from "sonner";

export default function PersonalCornerPage() {
  const [filmForm, setFilmForm] = useState({ title: '', reason: '', recommender: '' });
  const [bookForm, setBookForm] = useState({ title: '', reason: '', recommender: '' });
  const [songForm, setSongForm] = useState({ title: '', reason: '', recommender: '' });

  const favoriteFilms = [
    { title: "Cinema Paradiso", year: "1988", reason: "Perfect potrayal of life and love, my favorite film and the comfort of my soul, everytime I see it life makes sense" },
    { title: "Solaris", year: "1972", reason: "No matter how long we travel through the cosmos, we will carry the weight of the human condition with us, inescapably" },
    { title: "A Clockwork Orange", year: "1971", reason: "A bizarre collision of absuridity and dread. No really, the film is so absurd but beautifully made that has become one o fmy favorites"},
    { title: "Blade Runner: Director's Cut", year: "2007", reason: "Cyberpunk dystopian society clashes with desire of replicants to experience being human." }
  ];

  const favoriteBooks = [
    { title: "La Ciudad Y los Perros", author: "Mario Vargas Llosa", reason: "Essential reading for any developer" },
    { title: "Beneath the wheel", author: "Hermann Hesse", reason: "A reminder that chasing success and studies can break you. Caring for your soul and not losing yourself in the pressure is what keeps you truly alive."},
    { title: "The Man Who Laughs", author: "Victor Hugo", reeason: "A disfigured man cast aside, rises from humble means to a life of power. In that climb his heart and values are tested against the weight of his new world."},
    { title: "Firepunch", author: "Tatsuki Fujimoto", reason: "A ruined world full of pain and cruelty, yet through all the suffering it reminds us to keep living."  }
  ];

  const favoriteSongs = [
    { title: "Alberto Balsalm", artist: "Aphex Twin", reason: "Perfect coding soundtrack" },
    { title: "Veridis Quo", artist: "Daft Punk", reason: "Helps me focus during long coding sessions" },
    { title: "Adagio for strings", artist: "Tiesto", reason: "Synthwave vibes for late-night programming" },
    { title: "Serenity", artist: "Armin Van Buuren", reason: "Emotional and inspiring for creative work" }
  ];

  const handleSubmitRecommendation = (type: 'film' | 'book' | 'song', form: any, setForm: any) => {
    if (!form.title || !form.reason || !form.recommender) {
      toast.error('Please fill in all fields');
      return;
    }
    
    toast.success(`Thanks for the ${type} recommendation!`);
    setForm({ title: '', reason: '', recommender: '' });
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl mb-4">Personal Corner</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Beyond coding - discover my favorite films, books, and music that inspire my creative journey
          </p>
        </div>
      </section>

      {/* Favorite Films */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Star className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl">Favorite Films</h2>
              <p className="text-muted-foreground">Movies that shaped my perspective on technology and life</p>
            </div>
          </div>

          <div className="grid gap-6 mb-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {favoriteFilms.map((film, index) => (
                <Card key={index}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{film.title}</CardTitle>
                    <CardDescription>{film.year}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{film.reason}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBtb3ZpZSUyMHRoZWF0ZXJ8ZW58MXx8fHwxNzU3NTY4NzQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Cinema"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Film Recommendation Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Recommend a Film
              </CardTitle>
              <CardDescription>
                Know a great movie I should watch? I'd love to hear about it!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Film title"
                  value={filmForm.title}
                  onChange={(e) => setFilmForm({ ...filmForm, title: e.target.value })}
                />
                <Input
                  placeholder="Your name"
                  value={filmForm.recommender}
                  onChange={(e) => setFilmForm({ ...filmForm, recommender: e.target.value })}
                />
              </div>
              <Textarea
                placeholder="Why should I watch this film?"
                value={filmForm.reason}
                onChange={(e) => setFilmForm({ ...filmForm, reason: e.target.value })}
              />
              <Button 
                onClick={() => handleSubmitRecommendation('film', filmForm, setFilmForm)}
                className="gap-2"
              >
                <Send className="w-4 h-4" />
                Send Recommendation
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Favorite Books */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Star className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl">Favorite Books</h2>
              <p className="text-muted-foreground">Books that expanded my knowledge and imagination</p>
            </div>
          </div>

          <div className="grid gap-6 mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              {favoriteBooks.map((book, index) => (
                <Card key={index}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{book.title}</CardTitle>
                    <CardDescription>by {book.author}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{book.reason}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1652305489491-789257d2e95c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rcyUyMGxpYnJhcnklMjByZWFkaW5nfGVufDF8fHx8MTc1NzY0MjQzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Books and library"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Book Recommendation Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Recommend a Book
              </CardTitle>
              <CardDescription>
                Found a book that changed your perspective? Share it with me!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Book title"
                  value={bookForm.title}
                  onChange={(e) => setBookForm({ ...bookForm, title: e.target.value })}
                />
                <Input
                  placeholder="Your name"
                  value={bookForm.recommender}
                  onChange={(e) => setBookForm({ ...bookForm, recommender: e.target.value })}
                />
              </div>
              <Textarea
                placeholder="Why should I read this book?"
                value={bookForm.reason}
                onChange={(e) => setBookForm({ ...bookForm, reason: e.target.value })}
              />
              <Button 
                onClick={() => handleSubmitRecommendation('book', bookForm, setBookForm)}
                className="gap-2"
              >
                <Send className="w-4 h-4" />
                Send Recommendation
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Favorite Songs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Star className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl">Favorite Songs</h2>
              <p className="text-muted-foreground">Music that fuels my creativity and coding sessions</p>
            </div>
          </div>

          <div className="grid gap-6 mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              {favoriteSongs.map((song, index) => (
                <Card key={index}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{song.title}</CardTitle>
                    <CardDescription>by {song.artist}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{song.reason}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1586363970578-1d95f492f014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGhlYWRwaG9uZXMlMjB2aW55bHxlbnwxfHx8fDE3NTc2MTE4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Music and headphones"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Song Recommendation Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Recommend a Song
              </CardTitle>
              <CardDescription>
                Have a song that inspires you? I'd love to add it to my playlist!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Song title & artist"
                  value={songForm.title}
                  onChange={(e) => setSongForm({ ...songForm, title: e.target.value })}
                />
                <Input
                  placeholder="Your name"
                  value={songForm.recommender}
                  onChange={(e) => setSongForm({ ...songForm, recommender: e.target.value })}
                />
              </div>
              <Textarea
                placeholder="Why do you love this song?"
                value={songForm.reason}
                onChange={(e) => setSongForm({ ...songForm, reason: e.target.value })}
              />
              <Button 
                onClick={() => handleSubmitRecommendation('song', songForm, setSongForm)}
                className="gap-2"
              >
                <Send className="w-4 h-4" />
                Send Recommendation
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}