import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Trophy, Sparkles } from "lucide-react";
import Layout from "@/components/Layout";
import teaHero from "@/assets/tea-hero.png";

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDEzNGgxMHYxMEgzNnptMjAgMGgxMHYxMEg1NnpNMTYgMTM0aDEwdjEwSDE2em0wLTIwaDEwdjEwSDE2em0yMCAwaDEwdjEwSDM2em0yMCAwaDEwdjEwSDU2em0tNDAgMGgxMHYxMEgxNnptMC0yMGgxMHYxMEgxNnptMjAgMGgxMHYxMEgzNnptMjAgMGgxMHYxMEg1NnptLTQwIDBoMTB2MTBIMTZ6bTAgMjBoMTB2MTBIMTZ6bTIwIDBoMTB2MTBIMzZ6bTIwIDBoMTB2MTBINTZ6bTAgMjBoMTB2MTBINTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Text Content */}
            <div className="space-y-8 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 animate-in fade-in slide-in-from-left-4 duration-700">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Transformando vidas através do esporte</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-in fade-in slide-in-from-left-6 duration-700 delay-100">
                Esporte é inclusão.{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Juntos, transformamos vidas.
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground animate-in fade-in slide-in-from-left-8 duration-700 delay-200">
                Oferecemos atividades esportivas inclusivas para crianças com Transtorno do Espectro Autista (TEA), 
                promovendo desenvolvimento físico, social e emocional através do esporte.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-in fade-in slide-in-from-left-10 duration-700 delay-300">
                <Link to="/inscricoes">
                  <Button size="lg" className="text-lg px-8 shadow-lg hover:shadow-xl transition-shadow">
                    Fazer Inscrição
                  </Button>
                </Link>
                <Link to="/doacoes">
                  <Button size="lg" variant="secondary" className="text-lg px-8 shadow-lg hover:shadow-xl transition-shadow">
                    <Heart className="w-5 h-5 mr-2" />
                    Fazer Doação
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20">
                <img 
                  src={teaHero} 
                  alt="Criança com TEA praticando esportes" 
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center space-y-2">
                <Users className="w-12 h-12 mx-auto text-primary" />
                <h3 className="text-3xl font-bold">100+</h3>
                <p className="text-muted-foreground">Crianças atendidas</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-secondary transition-colors">
              <CardContent className="p-6 text-center space-y-2">
                <Trophy className="w-12 h-12 mx-auto text-secondary" />
                <h3 className="text-3xl font-bold">5+</h3>
                <p className="text-muted-foreground">Modalidades esportivas</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-accent transition-colors">
              <CardContent className="p-6 text-center space-y-2">
                <Heart className="w-12 h-12 mx-auto text-destructive" />
                <h3 className="text-3xl font-bold">100%</h3>
                <p className="text-muted-foreground">Dedicação e amor</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 shadow-lg">
              <CardContent className="p-8 text-center space-y-4">
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="text-lg italic text-foreground">
                  O projeto mudou completamente a vida do meu filho. Ele desenvolveu habilidades sociais, 
                  ganhou confiança e fez amigos verdadeiros. O esporte realmente transforma!
                </p>
                <div className="pt-4 border-t">
                  <p className="font-semibold">Maria Silva</p>
                  <p className="text-sm text-muted-foreground">Mãe de participante</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-tea-green text-white">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold">Faça parte dessa transformação</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            Seja através de uma inscrição ou de uma doação, você pode fazer a diferença na vida de uma criança.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link to="/inscricoes">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Inscrever agora
              </Button>
            </Link>
            <Link to="/historia">
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 hover:bg-white/20 border-white text-white">
                Conheça nossa história
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
