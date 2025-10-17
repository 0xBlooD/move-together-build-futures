import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-foreground">
            <Heart className="w-5 h-5 text-tea-red fill-tea-red animate-pulse" />
            <p className="font-medium">
              Esporte é inclusão. Juntos, transformamos vidas.
            </p>
          </div>
          
          <div className="text-sm text-muted-foreground space-y-1">
            <p className="font-bold text-foreground">TEAmo / TEApoio / TEAjudo</p>
            <p>© {new Date().getFullYear()} Projeto TEA - Todos os direitos reservados</p>
            <p>Desenvolvido por: Mateus e Hélitto</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
