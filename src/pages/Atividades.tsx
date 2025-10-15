import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Heart, Target, Zap, Brain } from "lucide-react";

const Atividades = () => {
  const activities = [
    {
      icon: Trophy,
      name: "Futsal",
      color: "text-primary",
      bgColor: "bg-primary/10",
      benefits: [
        "Desenvolvimento de coordenação motora",
        "Trabalho em equipe e cooperação",
        "Melhora da socialização",
        "Consciência espacial",
      ],
      description: "O futsal é uma das atividades mais populares, trabalhando habilidades motoras e sociais em um ambiente divertido e inclusivo.",
    },
    {
      icon: Zap,
      name: "Corrida e Atletismo",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      benefits: [
        "Desenvolvimento cardiovascular",
        "Disciplina e foco",
        "Autoconfiança e superação",
        "Controle de energia",
      ],
      description: "Atividades de corrida e atletismo adaptadas que promovem resistência, concentração e sensação de conquista pessoal.",
    },
    {
      icon: Target,
      name: "Artes Marciais",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
      benefits: [
        "Autodisciplina e respeito",
        "Controle emocional",
        "Força e flexibilidade",
        "Concentração e memória",
      ],
      description: "Judô e karatê adaptados, enfatizando respeito, disciplina e desenvolvimento de habilidades de autocontrole.",
    },
    {
      icon: Users,
      name: "Natação",
      color: "text-tea-blue",
      bgColor: "bg-primary/10",
      benefits: [
        "Relaxamento sensorial",
        "Coordenação bilateral",
        "Fortalecimento muscular",
        "Redução de ansiedade",
      ],
      description: "A natação oferece benefícios sensoriais únicos, ajudando no relaxamento e desenvolvimento motor global.",
    },
    {
      icon: Heart,
      name: "Dança e Movimento",
      color: "text-tea-puzzle",
      bgColor: "bg-tea-puzzle/10",
      benefits: [
        "Expressão corporal",
        "Ritmo e coordenação",
        "Criatividade",
        "Integração sensorial",
      ],
      description: "Atividades de dança adaptada que trabalham expressão, ritmo e permitem que as crianças se expressem através do movimento.",
    },
    {
      icon: Brain,
      name: "Jogos Cooperativos",
      color: "text-accent",
      bgColor: "bg-accent/10",
      benefits: [
        "Resolução de problemas",
        "Comunicação",
        "Empatia",
        "Habilidades sociais",
      ],
      description: "Jogos e brincadeiras que enfatizam cooperação ao invés de competição, desenvolvendo habilidades sociais essenciais.",
    },
  ];

  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossas Atividades</h1>
            <p className="text-lg text-muted-foreground">
              Oferecemos diversas modalidades esportivas adaptadas para promover o desenvolvimento 
              integral de crianças com TEA
            </p>
          </div>

          {/* Activities Grid */}
          <div className="max-w-6xl mx-auto space-y-8">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <Card 
                  key={index}
                  className="overflow-hidden hover:shadow-lg transition-shadow border-2 hover:border-primary/50"
                >
                  <CardHeader className={`${activity.bgColor} border-b`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-full bg-background flex items-center justify-center`}>
                        <Icon className={`w-8 h-8 ${activity.color}`} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl md:text-3xl">{activity.name}</CardTitle>
                      </div>
                      <Badge variant="secondary" className="hidden md:inline-flex">
                        Modalidade
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 md:p-8">
                    <p className="text-lg mb-6 text-muted-foreground">
                      {activity.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-4">Benefícios:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {activity.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className={`w-2 h-2 rounded-full ${activity.bgColor} mt-2 flex-shrink-0`}></div>
                            <p className="text-muted-foreground">{benefit}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="max-w-4xl mx-auto mt-16">
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                  Metodologia Adaptada
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Todas as nossas atividades são cuidadosamente adaptadas às necessidades individuais de cada criança. 
                    Trabalhamos com grupos pequenos, garantindo atenção personalizada e um ambiente acolhedor.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Nossa equipe multidisciplinar desenvolve planos de atividades individualizados, respeitando o ritmo 
                    e as particularidades de cada participante, sempre com foco no desenvolvimento global da criança.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary mb-2">5+</p>
                      <p className="text-sm">Modalidades disponíveis</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-secondary mb-2">3x</p>
                      <p className="text-sm">Aulas por semana</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-accent mb-2">100%</p>
                      <p className="text-sm">Adaptadas e inclusivas</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Atividades;
