import { useState } from 'react'

const projects = [
  {
    id: 'rmx-crm',
    name: 'RMX CRM',
    tagline: 'CRM multi-tenant para gestão de campo',
    description: 'Sistema completo para empresas de serviço de ar-condicionado. Gestão de clientes, ordens de serviço, orçamentos, estoque, equipe técnica e financeiro com mais de 30 telas.',
    stack: ['React 19', 'Firebase', 'Tailwind CSS', 'Recharts', 'Framer Motion'],
    url: 'https://github.com/doughslima-cyber/rmx-crm',
    live: 'https://arsync.web.app',
    highlights: ['Multi-tenant real', 'Orçamento público compartilhável', 'Dashboard financeiro', 'App Check + reCAPTCHA'],
  },
  {
    id: 'nobel-trading',
    name: 'Nobel Trading',
    tagline: 'Gestão de trading company',
    description: 'Sistema de controle de pedidos, importações (BLs), preços internacionais e DRE financeiro para operações de comércio exterior.',
    stack: ['React 18', 'TypeScript', 'shadcn/ui', 'TanStack Query', 'Firebase', 'Recharts'],
    url: 'https://github.com/doughslima-cyber/nobel-trading',
    live: null,
    highlights: ['TypeScript + shadcn', 'Modo mock para dev', 'PWA', 'Roles por custom claims'],
  },
  {
    id: 'mda-solucoes',
    name: 'MDA Soluções',
    tagline: 'Gestão de manutenção residencial',
    description: 'Sistema interno para gestão de serviços de manutenção: clientes, leads, orçamentos, ordens de serviço, agenda, financeiro e relatórios.',
    stack: ['React 19', 'Firebase', 'Tailwind CSS', 'DnD Kit', 'Recharts'],
    url: 'https://github.com/doughslima-cyber/mda-solucoes',
    live: null,
    highlights: ['Drag-and-drop Kanban', 'Exportação XLS/PDF', 'PWA', 'Gestão de prestadores'],
  },
  {
    id: 'growth-advisor',
    name: 'Growth Advisor',
    tagline: 'Plataforma para planejadores financeiros',
    description: 'Ferramenta de gestão comercial para operações de planejamento financeiro: pipeline de captação, métricas e dashboard.',
    stack: ['React 18', 'Firebase Auth', 'Firestore', 'Tailwind CSS v4', 'Vite'],
    url: 'https://github.com/doughslima-cyber/growth-advisor',
    live: null,
    highlights: ['Pipeline visual de vendas', 'Métricas por consultor', 'Autenticação real', 'Firebase Hosting'],
  },
]

const techIcons = [
  { name: 'React' },
  { name: 'TypeScript' },
  { name: 'JavaScript' },
  { name: 'Tailwind CSS' },
  { name: 'Vite' },
  { name: 'shadcn/ui' },
  { name: 'Framer Motion' },
  { name: 'Firebase' },
  { name: 'Firestore' },
  { name: 'Cloud Functions' },
  { name: 'Gemini AI' },
  { name: 'Git / GitHub' },
  { name: 'GitHub Pages' },
  { name: 'Figma' },
]

function App() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full z-50 bg-dark/90 backdrop-blur-md border-b border-dark-3/50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold gradient-text">
            Douglas Lima
          </a>
          <div className="hidden sm:flex gap-6 text-sm text-light-2">
            <a href="#projects" className="hover:text-accent transition-colors">Projetos</a>
            <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
            <a href="#about" className="hover:text-accent transition-colors">Sobre</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contato</a>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-sm px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Disponível para novos projetos
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Sistemas que <span className="gradient-text">resolvem</span> problemas reais
          </h1>
          <p className="text-lg md:text-xl text-light-2 max-w-2xl mx-auto mb-10 leading-relaxed">
            Gerente financeiro de formação, dev por paixão. Construo sistemas completos
            com React, Firebase e Tailwind — do zero ao deploy, focando em entregar
            valor real para o negócio.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#projects"
              className="bg-accent text-dark font-semibold px-8 py-3 rounded-xl hover:bg-accent/90 transition-all hover:scale-105">
              Ver projetos
            </a>
            <a href="#contact"
              className="border border-light-3 text-light px-8 py-3 rounded-xl hover:bg-light/5 transition-all">
              Contato
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos</h2>
          <p className="text-light-2 mb-12 max-w-xl">Sistemas reais, em produção, construídos do zero.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <article key={p.id}
                className="glass-card p-6 group cursor-pointer hover:border-accent/40 transition-all"
                onClick={() => setActiveProject(activeProject === p.id ? null : p.id)}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-light">{p.name}</h3>
                  <span className="text-accent text-sm group-hover:translate-x-1 transition-transform">
                    {activeProject === p.id ? '▲' : '▼'}
                  </span>
                </div>
                <p className="text-accent text-sm mb-2">{p.tagline}</p>
                <p className="text-light-2 text-sm leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.stack.map((tech) => (
                    <span key={tech}
                      className="text-xs bg-dark-3/60 text-light-2 px-2.5 py-1 rounded-md">{tech}</span>
                  ))}
                </div>
                {activeProject === p.id && (
                  <div className="border-t border-dark-3/50 pt-4 mt-2">
                    <h4 className="text-sm font-semibold text-light mb-2">Destaques</h4>
                    <ul className="space-y-1 mb-4">
                      {p.highlights.map((h) => (
                        <li key={h} className="text-sm text-light-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-3">
                      <a href={p.url} target="_blank" rel="noopener noreferrer"
                        className="text-sm text-light-2 hover:text-accent transition-colors flex items-center gap-1"
                        onClick={(e) => e.stopPropagation()}>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                        Código
                      </a>
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noopener noreferrer"
                          className="text-sm text-accent hover:text-accent/80 transition-colors flex items-center gap-1"
                          onClick={(e) => e.stopPropagation()}>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 px-6 bg-dark-2/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stack & Skills</h2>
          <p className="text-light-2 mb-12 max-w-xl">Tecnologias que uso no dia a dia.</p>
          <div className="flex flex-wrap gap-3">
            {techIcons.map((t) => (
              <span key={t.name}
                className="glass-card px-4 py-2 text-sm text-light-2 hover:text-accent hover:border-accent/30 transition-all">{t.name}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre</h2>
          <p className="text-light-2 mb-12 max-w-xl">Nem só de código vive o dev.</p>
          <div className="glass-card p-8 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-accent mb-2">🎯 Gerente financeiro que programa</h3>
              <p className="text-light-2 leading-relaxed">
                36 anos, gerente financeiro com viés tech. Minha carreira começou na saúde,
                passou por uma startup de tecnologia (FP&A + M&A) e pelos últimos 5 anos
                no mercado financeiro, onde criei áreas de FP&A do zero baseado em dados.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-accent mb-2">💻 Dev por paixão</h3>
              <p className="text-light-2 leading-relaxed">
                Construo sistemas web completos — React, Firebase, Tailwind — do frontend
                ao deploy. Cada projeto é um problema real resolvido do zero.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-accent mb-2">📊 Minha filosofia</h3>
              <p className="text-light-2 leading-relaxed">
                Nada de dashboard Frankenstein, métrica de vaidade ou número sem história.
                Nunca mascarar problema, sempre reconciliar números, sempre recomendar ação.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-dark-2/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contato</h2>
          <p className="text-light-2 mb-10 max-w-lg mx-auto">
            Vamos conversar? Me chama no GitHub, LinkedIn ou e-mail.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://github.com/doughslima-cyber" target="_blank" rel="noopener noreferrer"
              className="glass-card px-6 py-3 text-light-2 hover:text-accent hover:border-accent/30 transition-all flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/douglas-silva-7a9808129" target="_blank" rel="noopener noreferrer"
              className="glass-card px-6 py-3 text-light-2 hover:text-accent hover:border-accent/30 transition-all flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a href="mailto:doughslima@gmail.com"
              className="glass-card px-6 py-3 text-light-2 hover:text-accent hover:border-accent/30 transition-all flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              E-mail
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-dark-3/30">
        <div className="max-w-6xl mx-auto text-center text-light-3 text-sm">
          <p>&copy; {new Date().getFullYear()} Douglas Lima. Feito com React + Tailwind.</p>
        </div>
      </footer>
    </div>
  )
}

export default App