import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Clock, MapPin, Calendar } from "lucide-react";

const Inscricoes = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Inscrição enviada com sucesso! ✓",
      description: "Em breve entraremos em contato. Obrigado!",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Inscrições</h1>
            <p className="text-lg text-muted-foreground">
              Faça parte do Projeto TEA e proporcione uma experiência transformadora para sua criança
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {/* Left Column - Info */}
            <div className="md:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Informações Práticas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Clock className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">Horários</p>
                        <p className="text-sm text-muted-foreground">
                          Segunda a Sexta<br />
                          14h às 18h
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm">Local</p>
                        <p className="text-sm text-muted-foreground">
                          Centro Esportivo Municipal<br />
                          Rua das Flores, 123
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Quem pode se inscrever?</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      Crianças de 4 a 12 anos
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      Com diagnóstico de TEA
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      Laudo médico recente
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      Disponibilidade semanal
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Form */}
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Formulário de Inscrição</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="childName">Nome da Criança *</Label>
                        <Input id="childName" required placeholder="Nome completo" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="birthDate">Data de Nascimento *</Label>
                        <Input id="birthDate" type="date" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="sport">Esporte de Interesse *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma modalidade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="futsal">Futsal</SelectItem>
                          <SelectItem value="corrida">Corrida e Atletismo</SelectItem>
                          <SelectItem value="artes-marciais">Artes Marciais</SelectItem>
                          <SelectItem value="natacao">Natação</SelectItem>
                          <SelectItem value="danca">Dança e Movimento</SelectItem>
                          <SelectItem value="jogos">Jogos Cooperativos</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="diagnosis">Informações sobre o Diagnóstico</Label>
                      <Textarea 
                        id="diagnosis" 
                        placeholder="Forneça informações relevantes sobre o diagnóstico, nível de suporte necessário, etc."
                        className="min-h-24"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="guardianName">Nome do Responsável *</Label>
                        <Input id="guardianName" required placeholder="Nome completo" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone *</Label>
                        <Input id="phone" type="tel" required placeholder="(00) 00000-0000" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input id="email" type="email" required placeholder="email@exemplo.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Endereço Completo *</Label>
                      <Input id="address" required placeholder="Rua, número, bairro, cidade" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="observations">Observações Adicionais</Label>
                      <Textarea 
                        id="observations" 
                        placeholder="Informações adicionais que considere importantes (medicações, restrições, preferências, etc.)"
                        className="min-h-24"
                      />
                    </div>

                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Enviando..." : "Enviar Inscrição"}
                      </Button>
                    </div>

                    <p className="text-xs text-muted-foreground text-center">
                      * Campos obrigatórios. Suas informações serão tratadas com confidencialidade.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Inscricoes;
