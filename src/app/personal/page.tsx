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
    { title: "The Social Network", year: "2010", reason: "Great portrayal of tech entrepreneurship and coding culture" },
    { title: "Her", year: "2013", reason: "Fascinating exploration of AI and human connection" },
    { title: "Ex Machina", year: "2014", reason: "Thought-provoking take on artificial intelligence" },
    { title: "The Matrix", year: "1999", reason: "Classic cyberpunk that got me interested in computers" }
  ];

  const favoriteBooks = [
    { title: "Clean Code", author: "Robert C. Martin", reason: "Essential reading for any developer" },
    { title: "The Pragmatic Programmer", author: "David Thomas", reason: "Practical wisdom for software development" },
    { title: "Klara and the Sun", author: "Kazuo Ishiguro", reason: "Beautiful story about AI consciousness" },
    { title: "Project Hail Mary", author: "Andy Weir", reason: "Perfect blend of science and problem-solving" }
  ];

  const favoriteSongs = [
    { title: "Digital Love", artist: "Daft Punk", reason: "Perfect coding soundtrack" },
    { title: "Comptine d'un autre été", artist: "Yann Tiersen", reason: "Helps me focus during long coding sessions" },
    { title: "Resonance", artist: "HOME", reason: "Synthwave vibes for late-night programming" },
    { title: "Touch", artist: "Daft Punk", reason: "Emotional and inspiring for creative work" }
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