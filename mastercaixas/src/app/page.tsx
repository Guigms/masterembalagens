// app/page.tsx

import Image from 'next/image';
import { MessageCircleMore, PhoneIcon, MailIcon } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-[#0B3E63] font-sans">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-8 flex items-center justify-around">
        <div className="flex items-center space-x-4">
          <Image
            src="/logomaster.png"
            alt="Master Caixas Logo"
            width={100}
            height={70}
          />
          <h1 className="text-2xl font-bold text-[#0B3E63]"></h1>
        </div>
        <nav className="space-x-6 font-medium">
          <a href="#produtos" className="hover:text-[#D28B23]">Produtos</a>
          <a href="#sobre" className="hover:text-[#D28B23]">Sobre</a>
          <a href="#contato" className="hover:text-[#D28B23]">Contato</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-[#0B3E63] text-white py-20 px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Caixas de Papelão Personalizadas e Pardas</h2>
        <p className="text-lg">Soluções inteligentes para o seu negócio com qualidade e compromisso</p>
      </section>

      {/* Produtos */}
      <section id="produtos" className="py-20 px-8 bg-[#f4f4f4] text-center">
        <h3 className="text-3xl font-bold text-[#0B3E63] mb-10">Nossos Produtos</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              nome: 'caixa 1',
              imagem: '/produtos/padrao.jpg',
              descricao: 'Ideal para transporte e armazenamento com resistência.'
            },
            {
              nome: 'caixa 2',
              imagem: '/produtos/personalizadas.jpg',
              descricao: 'Com sua marca, tamanho e estilo sob medida.'
            },
            {
              nome: 'caixa 3',
              imagem: '/produtos/ecommerce.jpg',
              descricao: 'Soluções seguras para envio de produtos online.'
            }
          ].map((produto, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition"
            >
              <Image
                src={produto.imagem}
                alt={produto.nome}
                width={300}
                height={200}
                className="rounded-lg mb-4 mx-auto"
              />
              <h4 className="text-xl font-semibold mb-2">{produto.nome}</h4>
              <p>{produto.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20 px-8 text-center">
        <h3 className="text-3xl font-bold mb-6">Sobre a Master Caixas</h3>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:space-x-10">
          <Image
            src="/empresa/fabrica.jpg"
            alt="Fábrica Master Caixas"
            width={500}
            height={300}
            className="rounded-xl mb-6 md:mb-0"
          />
          <p className="text-lg text-gray-700">
            A Master Caixas é uma fábrica especializada na produção de caixas de papelão sob medida,
            oferecendo soluções personalizadas e sustentáveis para empresas de diversos segmentos.
            Com qualidade e agilidade, atendemos todo o Brasil.
          </p>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="bg-[#D28B23] text-white">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-24">
        
        <h3 className="text-3xl font-bold sm:text-4xl">Solicite um Orçamento</h3>
        
        <p className="mx-auto mt-4 max-w-xl text-lg leading-7 text-gray-100">
          Entre em contato conosco e receba um atendimento personalizado.
        </p>

        {/* Informações de Contato */}
        <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-10">
          <div className="flex items-center gap-3">
            <PhoneIcon className="h-6 w-6" />
            <a href="tel:+5585997102427" className="text-lg hover:underline">
              (85) 99710-2427
            </a>
          </div>
          <div className="flex items-center gap-3">
            <MailIcon className="h-6 w-6" />
            <a href="mailto:contato@mastercaixas.com.br" className="text-lg hover:underline">
              contato@mastercaixas.com.br
            </a>
          </div>
        </div>
        
        {/* Botão Principal */}
        <div className="mt-12">
          <a
            href="https://www.contate.me/5585997102427"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-center text-lg font-bold text-[#0B3E63] shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-white/50"
          >
            <MessageCircleMore className="h-7 w-7" />
            Fale conosco pelo WhatsApp
          </a>
        </div>
        
      </div>
    </section>

      {/* Footer */}
      <footer className="py-6 px-8 bg-[#0B3E63] text-white text-center text-sm">
        © {new Date().getFullYear()} Feito por{" "}
            <a
              href="https://gmsolutionti.com.br"
              className="text-white hover:text-black transition-colors"
            >
              GMSolution
            </a>. Todos os direitos Reservados.
      </footer>
    </main>
  );
}
