"use client"
import { useState } from 'react';
import { Star, Send, Heart } from 'lucide-react';
import { Button } from 'src/components/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "src/components/Card"
import { Input } from "src/components/input";
import { Textarea } from "src/components/textarea";
import { toast } from "sonner";
import { FavoriteCard } from "src/components/FavoriteCard"
import { submitRec } from 'src/lib/submitRec';

export default function PersonalCornerPage() {
  const [filmForm, setFilmForm] = useState({ title: '', reason: '', recommender: '' });
  const [bookForm, setBookForm] = useState({ title: '', reason: '', recommender: '' });
  const [songForm, setSongForm] = useState({ title: '', reason: '', recommender: '' });

  const handleSubmitRecommendation = async (
    type: 'film' | 'book' | 'song',
    form: any,
    setForm: any
  ) => {
    try {
      await submitRec(type, form);
      toast.success(`Thanks for the ${type} recommendation!`);
      setForm({ title: '', reason: '', recommender: '' });
    } catch (e: any) {
      toast.error(e?.message ?? "Something went wrong");
    }
  };

  type Film = { title: string; year: string; reason: string; image?: string; };
  const favoriteFilms = [
    { title: "Cinema Paradiso", year: "1988", reason: "Perfect potrayal of life and love, my favorite film and the comfort of my soul, everytime I see it life makes sense again!", image: "films/cinemaparadiso.png" },
    { title: "Solaris", year: "1972", reason: "No matter how long we travel through the cosmos, we will carry the weight of the human condition with us, inescapably.", image: "films/solaris.png" },
    { title: "A Clockwork Orange", year: "1971", reason: "A bizarre collision of absuridity and dread. No really, the film is so absurd but beautifully made that has become one o fmy favorites", image: "films/aclockworkorange.png" },
    { title: "Blade Runner: Director's Cut", year: "2007", reason: "Cyberpunk dystopian society clashes with desire of replicants to experience being human.", image: "films/bladerunner.png" }
  ];

  type Book = { title: string; author: string; reason: string; image?: string; };
  const favoriteBooks = [
    { title: "La Ciudad Y los Perros", author: "Mario Vargas Llosa", reason: "In this coming of age novel, the cadets\’ journey from adolescence to adulthood unfolds within the Leoncio Prado Military Academy, a world that mirrors the wider hypocrisies of Peruvian society. The novel exposes how the same institutions that shape the boys also condemn them for reflecting their own corruption.", image: "books/laciudadylosperros.png" },
    { title: "Beneath the wheel", author: "Hermann Hesse", reason: "A reminder that chasing success and studies can break you. Caring for your soul and not losing yourself in the pressure is what keeps you truly alive.", image: "books/beneaththewheel.png" },
    { title: "The Man Who Laughs", author: "Victor Hugo", reason: "A disfigured man cast aside, rises from humble means to a life of power. In that climb his heart and values are tested against the weight of his new world.", image: "books/themanwholaughs.png" },
    { title: "Firepunch", author: "Tatsuki Fujimoto", reason: "A ruined world full of pain and cruelty, yet through all the suffering it reminds us to keep living.", image: "books/firepunch.png" }
  ];

  type Song = { title: string; artist: string; reason: string; image?: string; };
  const favoriteSongs = [
    { title: "Alberto Balsalm", artist: "Aphex Twin", reason: "“Alberto Balsalm” is Aphex Twin at his most approachable: Dreamy synths, and a haunting warmth that feels timeless.", image: "songs/albertobalsalm.png" },
    { title: "Veridis Quo", artist: "Daft Punk", reason: "It carries a bittersweet, almost mystical feeling — calm and contemplative, but with a quiet tension underneath.", image: "songs/veridisquo.png" },
    { title: "I see right through to you", artist: "Dj Encore", reason: "The song feels like pure longing dressed as trance — the vocals ache with desire to be understood, while the beat keeps pushing forward, like chasing something just out of reach.", image: "songs/iseerightthroughtoyou.png" },
    { title: "Children", artist: "Robert Miles", reason: "\“Children\” feels full of longing, with a piano melody that aches for something distant. It\’s sad but also soothing, like holding onto a memory you don’t want to let go of.", image: "songs/children.png" }
  ];

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
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {favoriteFilms.map((f) => (
                <FavoriteCard
                  key={f.title}
                  image={f.image}
                  title={f.title}
                  subtitle={f.year}
                  reason={f.reason}
                />
              ))}
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
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {favoriteBooks.map((b) => (
                <FavoriteCard
                  key={b.title}
                  image={b.image}
                  title={b.title}
                  subtitle={`by ${b.author}`}
                  reason={b.reason}
                />
              ))}
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
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {favoriteSongs.map((s) => (
                <FavoriteCard
                  key={s.title}
                  image={s.image}
                  title={s.title}
                  subtitle={`by ${s.artist}`}
                  reason={s.reason}
                />
              ))}
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