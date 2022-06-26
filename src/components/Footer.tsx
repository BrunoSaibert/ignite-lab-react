import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="w-full mt-20 p-5 flex items-center justify-between border-t border-gray-600 bg-gray-900">
      <div className=" flex items-center gap-6">
        <Logo />
        <p className="text-gray-400">
          Rocketseat - Todos os direitos reservados
        </p>
      </div>

      <a href="" className="text-gray-400">
        Políticas de privacidade
      </a>
    </footer>
  );
}
