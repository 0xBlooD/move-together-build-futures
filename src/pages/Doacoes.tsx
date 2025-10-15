import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Gift, Users, Trophy } from "lucide-react";

const Doacoes = () => {
  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Faça uma Doação</h1>
            <p className="text-lg text-muted-foreground">
              Sua contribuição transforma vidas e possibilita que mais crianças tenham acesso ao esporte inclusivo
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* Impact Section */}
            <Card className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="text-center text-2xl md:text-3xl">
                  Seu apoio faz a diferença!
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-lg mb-8 text-muted-foreground">
                  Cada doação nos ajuda a garantir que mais crianças pratiquem esportes e se desenvolvam 
                  em um ambiente inclusivo e acolhedor.
                </p>

                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold">Uniformes</h3>
                    <p className="text-sm text-muted-foreground">
                      Garantimos que todas as crianças tenham uniformes adequados
                    </p>
                  </div>

                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
                      <Trophy className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="font-bold">Equipamentos</h3>
                    <p className="text-sm text-muted-foreground">
                      Materiais esportivos de qualidade e adaptados
                    </p>
                  </div>

                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-destructive/20 flex items-center justify-center mx-auto">
                      <Heart className="w-8 h-8 text-destructive" />
                    </div>
                    <h3 className="font-bold">Profissionais</h3>
                    <p className="text-sm text-muted-foreground">
                      Equipe qualificada e dedicada às crianças
                    </p>
                  </div>

                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                      <Gift className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <h3 className="font-bold">Infraestrutura</h3>
                    <p className="text-sm text-muted-foreground">
                      Manutenção e melhoria dos espaços
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* PIX Section */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-primary">
                <CardHeader>
                  <CardTitle className="text-center">Doar via PIX</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-white p-8 rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-4">
                      {/* QR Code Placeholder */}
                      <div className="w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/30">
                        <div className="text-center space-y-2">
                          <div className="text-6xl">📱</div>
                          <p className="text-sm text-muted-foreground px-4">
                            Escaneie o QR Code<br />com seu app de banco
                          </p>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t">
                        <p className="text-sm font-semibold mb-2">Chave PIX (CNPJ):</p>
                        <code className="px-4 py-2 bg-muted rounded text-sm">
                          12.345.678/0001-90
                        </code>
                      </div>
                    </div>
                  </div>

                  <div className="text-center text-sm text-muted-foreground">
                    <p>Aceitamos doações de qualquer valor.</p>
                    <p>Toda contribuição é bem-vinda! ❤️</p>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                {/* Transparency */}
                <Card>
                  <CardHeader>
                    <CardTitle>Transparência</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Todos os recursos recebidos são utilizados exclusivamente para:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Aquisição de uniformes e equipamentos esportivos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Pagamento de profissionais especializados</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Manutenção da infraestrutura</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Materiais de apoio pedagógico</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>Organização de eventos e atividades especiais</span>
                      </li>
                    </ul>
                    <p className="text-sm text-muted-foreground pt-4 border-t">
                      Mantemos total transparência sobre o uso dos recursos e compartilhamos 
                      relatórios periódicos com nossos doadores.
                    </p>
                  </CardContent>
                </Card>

                {/* Other Ways to Help */}
                <Card className="bg-gradient-to-br from-secondary/5 to-accent/5">
                  <CardHeader>
                    <CardTitle>Outras formas de ajudar</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Seja Voluntário</p>
                        <p className="text-muted-foreground">
                          Doe seu tempo e habilidades para apoiar nossas atividades
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Gift className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Doação de Materiais</p>
                        <p className="text-muted-foreground">
                          Equipamentos esportivos, brinquedos e materiais pedagógicos
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Divulgue o Projeto</p>
                        <p className="text-muted-foreground">
                          Compartilhe nossa causa nas redes sociais e com amigos
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Thank You Message */}
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardContent className="p-8 text-center space-y-4">
                <Heart className="w-16 h-16 mx-auto text-destructive fill-destructive" />
                <h3 className="text-2xl md:text-3xl font-bold">Muito Obrigado!</h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Sua generosidade possibilita que transformemos vidas através do esporte. 
                  Cada contribuição nos aproxima de um mundo mais inclusivo e acolhedor para todas as crianças.
                </p>
                <p className="text-xl font-semibold pt-4">
                  TEAmo • TEApoio • TEAjudo
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Doacoes;

