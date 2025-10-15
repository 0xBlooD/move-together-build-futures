import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users, Lightbulb } from "lucide-react";

const Historia = () => {
  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossa História</h1>
            <p className="text-lg text-muted-foreground">
              Uma jornada de amor, dedicação e transformação através do esporte inclusivo
            </p>
          </div>

          {/* Origin Story */}
          <div className="max-w-4xl mx-auto space-y-12">
            <Card>
              <CardContent className="p-8 md:p-12">
                <div className="prose max-w-none">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Como tudo começou</h2>
                  <p className="text-lg leading-relaxed mb-4">
                    O Projeto TEA nasceu do sonho de criar um espaço onde crianças com Transtorno do Espectro Autista 
                    pudessem descobrir suas potencialidades através do esporte. Fundado por profissionais apaixonados 
                    por educação física e inclusão, nosso projeto começou em uma pequena quadra, com apenas cinco crianças 
                    e muita determinação.
                  </p>
                  <p className="text-lg leading-relaxed mb-4">
                    Ao longo dos anos, testemunhamos transformações incríveis. Crianças que chegavam tímidas e reservadas 
                    floresceram em atletas confiantes, desenvolvendo não apenas habilidades motoras, mas também competências 
                    sociais e emocionais fundamentais para suas vidas.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Hoje, atendemos mais de 100 crianças, oferecendo diversas modalidades esportivas, sempre com o objetivo 
                    de promover inclusão, respeito e desenvolvimento integral.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Mission & Values */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-8 space-y-4">
                  <Target className="w-12 h-12 text-primary" />
                  <h3 className="text-2xl font-bold">Nossa Missão</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Promover o desenvolvimento físico, social e emocional de crianças com TEA através de atividades 
                    esportivas adaptadas, em um ambiente inclusivo, acolhedor e respeitoso.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-secondary transition-colors">
                <CardContent className="p-8 space-y-4">
                  <Lightbulb className="w-12 h-12 text-secondary" />
                  <h3 className="text-2xl font-bold">Nossa Visão</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ser referência em esporte inclusivo para crianças com TEA, inspirando outras iniciativas e 
                    demonstrando que todos têm o direito de praticar esportes e desenvolver seus talentos.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Values */}
            <Card>
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Nossos Valores</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <Heart className="w-8 h-8 text-destructive flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Inclusão</h4>
                      <p className="text-muted-foreground">
                        Acreditamos que todos merecem oportunidades iguais de participar e se desenvolver.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Users className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Empatia</h4>
                      <p className="text-muted-foreground">
                        Compreendemos e respeitamos as necessidades individuais de cada criança.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Heart className="w-8 h-8 text-secondary flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Respeito</h4>
                      <p className="text-muted-foreground">
                        Valorizamos a diversidade e tratamos a todos com dignidade e consideração.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Target className="w-8 h-8 text-accent flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg mb-2">Desenvolvimento</h4>
                      <p className="text-muted-foreground">
                        Focamos no crescimento contínuo de cada participante em todas as dimensões.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team */}
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Nossa Equipe</h2>
                <p className="text-lg text-center text-muted-foreground mb-8">
                  Profissionais dedicados e apaixonados por fazer a diferença
                </p>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="space-y-3">
                    <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                      <Users className="w-10 h-10 text-primary" />
                    </div>
                    <h4 className="font-bold">Educadores Físicos</h4>
                    <p className="text-sm text-muted-foreground">
                      Especializados em educação adaptada
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
                      <Heart className="w-10 h-10 text-secondary" />
                    </div>
                    <h4 className="font-bold">Psicólogos</h4>
                    <p className="text-sm text-muted-foreground">
                      Suporte emocional e comportamental
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                      <Lightbulb className="w-10 h-10 text-accent-foreground" />
                    </div>
                    <h4 className="font-bold">Voluntários</h4>
                    <p className="text-sm text-muted-foreground">
                      Apoio dedicado em todas as atividades
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quote */}
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardContent className="p-8 text-center">
                <p className="text-xl md:text-2xl font-semibold italic mb-4">
                  "TEAmo, TEApoio, TEAjudo"
                </p>
                <p className="text-muted-foreground">
                  Mais que um slogan, é o nosso compromisso com cada família e cada criança
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Historia;
