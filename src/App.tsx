/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, MouseEvent } from 'react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const showPending = (e: MouseEvent) => {
    e.preventDefault();
    const t = document.getElementById('mwa-toast');
    if (t) {
      t.classList.add('show');
      setTimeout(() => t.classList.remove('show'), 3500);
    }
  };

  return (
    <>
      <header className={isScrolled ? 'scrolled' : ''}>
        <nav className="container flex justify-between items-center w-full px-6">
          <div className="logo text-lg serif gold-text font-medium" style={{ fontSize: '1.125rem' }}>
            Breynner Riascos
          </div>
          
          <button 
            className="md:hidden flex flex-col gap-1.5 p-2 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            <span className={`block w-6 h-0.5 bg-[#1A1A1A] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#1A1A1A] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#1A1A1A] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          <ul className={`
            nav-links flex gap-8 text-[0.875rem] uppercase tracking-[0.05em] font-medium
            md:static md:flex-row md:bg-transparent md:p-0 md:w-auto md:h-auto md:translate-x-0
            fixed top-0 left-0 w-full h-screen bg-[#FAFAF8] p-8 flex-col items-center justify-center transition-transform duration-500 ease-in-out z-40
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}>
            <li><a href="#progetti" onClick={() => setIsMenuOpen(false)} className="text-[#6B6B6B] hover:text-[#C9A84C] transition-colors">Progetti</a></li>
            <li><a href="#chi-sono" onClick={() => setIsMenuOpen(false)} className="text-[#6B6B6B] hover:text-[#C9A84C] transition-colors">Chi sono</a></li>
            <li><a href="#contatti" onClick={() => setIsMenuOpen(false)} className="text-[#6B6B6B] hover:text-[#C9A84C] transition-colors">Contatti</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* HERO SECTION */}
        <section id="hero" className="min-h-svh flex flex-col items-center justify-center text-center px-6 pt-[80px] bg-[#FAFAF8]">
          <div className="fade-in">
            <p className="uppercase tracking-[0.15em] gold-text text-[0.75rem] font-medium mb-4">WEB DESIGNER · ITALIA</p>
            <h1 className="text-h1 mb-6 max-w-[850px] leading-[1.1] text-[#1A1A1A] font-normal px-4">Il tuo business merita un sito web che funciona davvero.</h1>
            <p className="text-[#6B6B6B] text-base md:text-[1.125rem] max-w-[580px] mx-auto mb-10 leading-[1.7]">
              Un sito dovrebbe essere l'anima della tua attività. Se non riesce a trasmettere 
              chi sei, esiste — ma non lavora per te. Creo siti web per attività locali, 
              con attenzione al dettaglio e alle personas dietro ogni progetto.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center">
              <a href="#progetti" className="inline-flex items-center justify-center gold-bg text-white px-8 py-3.5 rounded-[2px] text-[0.9rem] tracking-[0.05em] min-h-[48px] hover:opacity-90 transition-opacity">
                Guarda i proyectos →
              </a>
              <a href="#contatti" className="inline-flex items-center justify-center border gold-border gold-text px-8 py-3.5 rounded-[2px] text-[0.9rem] tracking-[0.05em] min-h-[48px] hover:bg-[rgba(201,168,76,0.08)] transition-colors">
                Parliamo del tuo sito
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <span className="pill px-4 py-1.5 rounded-full text-[0.8rem] text-[#6B6B6B]">5+ demo & concept</span>
              <span className="pill px-4 py-1.5 rounded-full text-[0.8rem] text-[#6B6B6B]">Consegna in 2–3 settimane</span>
              <span className="pill px-4 py-1.5 rounded-full text-[0.8rem] text-[#6B6B6B]">Rispondo entro 24h</span>
            </div>
          </div>
        </section>

        {/* CHI SONO */}
        <section id="chi-sono" className="bg-[#F0EBE1] py-24 md:py-32 overflow-hidden">
          <div className="container flex flex-col items-center text-center">
            <div className="fade-in max-w-[800px]">
              <p className="uppercase tracking-widest gold-text text-[0.7rem] font-semibold mb-6">CHI SONO</p>
              <h2 className="text-h2 mb-10 text-[#1A1A1A] font-normal">Non un'agenzia. Una persona.</h2>
              <div className="text-[#6B6B6B] leading-relaxed space-y-8 text-[1rem]">
                <p>
                  Mi chiamo Breynner Riascos. So cosa significa avere un'attività che ami 
                  e non riuscire a farla vedere online nel modo giusto. Ho lavorato con 
                  gelaterie, agenzie immobiliari, ristoranti e brand indipendenti — 
                  ogni progetto trattato come se fosse il mio.
                </p>
                <p>
                  Per me ogni cliente è una collaborazione, non una transazione.
                </p>
                <a href="#come-lavoro" className="inline-block gold-text text-[0.875rem] border-b gold-border pb-0.5 mt-4 hover:opacity-70 transition-opacity">
                  → Scopri come lavoro insieme a te
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PROGETTI */}
        <section id="progetti" className="py-24 md:py-32 bg-[#FAFAF8]">
          <div className="container">
            <div className="fade-in mb-16 px-4 md:px-0">
              <p className="uppercase tracking-widest gold-text text-[0.7rem] font-semibold mb-4">VETRINA PROGETTI</p>
              <h2 className="text-h2 text-[#1A1A1A] font-normal">Esempi di ciò che posso creare.</h2>
              <p className="text-[#6B6B6B] mt-4 max-w-[600px] leading-relaxed">
                Questi progetti sono demo e prototipi realizzati per mostrare il mio approccio al design e alla funzionalità. 
                Sono visioni di como immagino il web per diverse realtà.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Featured Project */}
              <div className="md:col-span-2 card-project fade-in shadow-sm hover:shadow-md transition-shadow">
                <a href="https://industreestore.netlify.app/" target="_blank" rel="noopener noreferrer" className="block group border-[0.5px] border-[rgba(26,26,26,0.08)] rounded-[2px] overflow-hidden hover:border-[rgba(201,168,76,0.4)] transition-all">
                  <div className="h-[300px] md:h-[450px] bg-[#1A1A1A] relative overflow-hidden">
                    <img 
                      src="https://img.sanishtech.com/u/319b78bd7160086098267771eb30cab1.png" 
                      alt="Silted Industree" 
                      className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 to-transparent"></div>
                    <span className="serif text-white text-3xl md:text-5xl absolute bottom-8 left-8 z-10">Silted Industree</span>
                  </div>
                  <div className="p-8 md:p-10 bg-white">
                    <p className="gold-text text-[0.7rem] uppercase tracking-widest mb-2 font-semibold">Demo · Brand abbigliamento independiente</p>
                    <p className="text-[#6B6B6B] text-[0.9rem] mb-6">"Un'identità visiva forte per chi vive fuori dagli schemi."</p>
                    <span className="gold-text text-[0.875rem] border-b border-transparent group-hover:border-[#C9A84C] pb-0.5 transition-all">Esplora la Demo →</span>
                  </div>
                </a>
              </div>

              {/* Other Projects */}
              {[
                { 
                  name: "Agenzia Fine Properties", 
                  type: "Immobiliare di lusso", 
                  image: "https://img.sanishtech.com/u/056fb208ecbeae6f46daf9f064aa0028.png", 
                  desc: "Lusso, esclusività e proprietà che el mercado non vedrà mai.",
                  url: "https://oikaiao.netlify.app/"
                },
                { 
                  name: "Gelateria Babbi", 
                  type: "Locale storico · Cesena", 
                  image: "https://img.sanishtech.com/u/b0b413f1af6e0a4ee7f1c9fb0da419ae.png", 
                  desc: "Il gusto artigianale portato online con calore e semplicità.",
                  url: "https://gelateriababbi.netlify.app/"
                },
                { 
                  name: "Ristorante Sabbioni", 
                  type: "Ristorante · Rimini", 
                  image: "https://img.sanishtech.com/u/6e5c125709e9c41fec5f570f81b54ed9.png", 
                  desc: "Pesce fresco e cucina romagnola a due passi dal mare.",
                  url: "https://ristorantesabboni.netlify.app/"
                },
                { 
                  name: "Agenzia Cecchini", 
                  type: "Immobiliare locale · Cesena", 
                  image: "https://img.sanishtech.com/u/b28363dfa84f6735ccb2ab2bd6dcda4f.png", 
                  desc: "La casa giusta a Cesena, trovata con chi conosce ogni quartiere.",
                  url: "https://agenziacecchini.netlify.app/"
                }
              ].map((proj) => (
                <div key={proj.name} className="card-project fade-in transition-all">
                  <a href={proj.url} target="_blank" rel="noopener noreferrer" className="block group border-[0.5px] border-[rgba(26,26,26,0.08)] rounded-[2px] overflow-hidden card-shadow transition-all">
                    <div className="h-[200px] md:h-[260px] bg-[#f5f5f5] relative overflow-hidden">
                      <img 
                        src={proj.image} 
                        alt={proj.name} 
                        className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                    </div>
                    <div className="p-6 md:p-8 bg-white">
                      <p className="gold-text text-[0.7rem] uppercase tracking-widest mb-2 font-semibold">Demo · {proj.type}</p>
                      <p className="text-[#6B6B6B] text-[0.9rem] mb-6 line-clamp-1">{proj.desc}</p>
                      <span className="gold-text text-[0.875rem] border-b border-transparent group-hover:border-[#C9A84C] pb-0.5 transition-all">Esplora la Demo →</span>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

         <section id="come-lavoro" className="bg-[#F0EBE1] py-32 md:py-48 border-y border-[rgba(0,0,0,0.05)]">
          <div className="container px-6">
            <div className="fade-in mb-24 md:text-center md:flex md:flex-col md:items-center">
              <p className="uppercase tracking-[0.2em] gold-text text-[0.75rem] font-semibold mb-8">IL MIO PROCESSO</p>
              <h2 className="text-h2 mb-8 text-[#1A1A1A] font-normal tracking-tight">Semplice. Senza sorprese.</h2>
              <p className="text-[#6B6B6B] max-w-[700px] leading-relaxed text-[1.125rem]">
                So che affidarsi a qualcuno per il tuo sito può sembrare un rischio. 
                Per questo ho un processo trasparente, progettato per darti controllo e tranquillità.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-x-20 lg:gap-x-28">
              <div className="fade-in group">
                <div className="mb-8 flex items-end gap-4">
                  <span className="serif text-[4rem] leading-none gold-text opacity-20 group-hover:opacity-40 transition-opacity">01</span>
                  <div className="h-[0.5px] flex-1 bg-gold-border opacity-30 mb-2"></div>
                </div>
                <h3 className="text-[1.5rem] mb-6 font-normal serif text-[#1A1A1A]">"Mi scrivi"</h3>
                <p className="text-[#6B6B6B] text-[1rem] leading-[1.8]">
                   Raccontami del tuo progetto — nessun impegno, nessun preventivo a freddo. 
                   Ci prendiamo il tempo per capire se siamo il "match" giusto per lavorare insieme.
                </p>
              </div>

              <div className="fade-in group">
                <div className="mb-8 flex items-end gap-4">
                  <span className="serif text-[4rem] leading-none gold-text opacity-20 group-hover:opacity-40 transition-opacity">02</span>
                  <div className="h-[0.5px] flex-1 bg-gold-border opacity-30 mb-2"></div>
                </div>
                <h3 className="text-[1.5rem] mb-6 font-normal serif text-[#1A1A1A]">"Progettiamo insieme"</h3>
                <p className="text-[#6B6B6B] text-[1rem] leading-[1.8]">
                  Definiamo contenuti, stile e obiettivi. Tu sei sempre coinvolto nel processo — 
                  niente scatole chiuse o "colpi di scena" finali. Ogni scelta è condivisa.
                </p>
              </div>

              <div className="fade-in group">
                <div className="mb-8 flex items-end gap-4">
                  <span className="serif text-[4rem] leading-none gold-text opacity-20 group-hover:opacity-40 transition-opacity">03</span>
                  <div className="h-[0.5px] flex-1 bg-gold-border opacity-30 mb-2"></div>
                </div>
                <h3 className="text-[1.5rem] mb-6 font-normal serif text-[#1A1A1A]">"Il tuo sito è live"</h3>
                <p className="text-[#6B6B6B] text-[1rem] leading-[1.8]">
                  Consegna in 2–3 settimane. Il lancio è solo l'inizio: ti accompagno nei primi 
                  passi e resto il tuo punto di riferimento per ogni evoluzione futura.
                </p>
              </div>
            </div>

            <div className="fade-in mt-32 text-center">
              <a href="#contatti" className="inline-flex items-center justify-center gold-bg text-white px-12 py-4 rounded-[2px] text-[1rem] tracking-[0.1em] hover:opacity-90 transition-all font-medium uppercase shadow-lg shadow-gold-border/20">
                Inizia ora il tuo progetto →
              </a>
            </div>
          </div>
        </section>

        {/* CONTATTI */}
        <section id="contatti" className="bg-[#F0EBE1] py-24 md:py-32">
          <div className="container text-center flex flex-col items-center">
            <div className="fade-in max-w-[650px]">
              <p className="uppercase tracking-widest gold-text text-[0.7rem] font-semibold mb-6">CONTATTI</p>
              <h2 className="text-h2 mb-6 text-[#1A1A1A] font-normal">Parliamo del tuo progetto.</h2>
              <p className="text-[#6B6B6B] mb-14 leading-[1.7] text-[1rem]">
                Hai un'attività senza sito, o un sito che non ti rappresenta più? 
                Scrivimi — nessun impegno, nessuna fretta. Mi piace capire prima di proporre.
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 mb-10 w-full justify-center">
                <a href="#" onClick={showPending} className="flex items-center justify-center gap-3 gold-bg text-white px-10 py-4 rounded-[2px] text-[0.85rem] flex-1 min-h-[52px] hover:opacity-90 transition-all font-medium tracking-widest uppercase">
                  Email
                </a>
                <a href="https://wa.me/393520073174" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 gold-bg text-white px-10 py-4 rounded-[2px] text-[0.85rem] flex-1 min-h-[52px] hover:opacity-90 transition-all font-medium tracking-widest uppercase">
                  WhatsApp Direct
                </a>
                <a href="https://www.instagram.com/wrldbrey/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 border gold-border gold-text px-10 py-4 rounded-[2px] text-[0.85rem] flex-1 min-h-[52px] hover:bg-[rgba(201,168,76,0.08)] transition-all font-medium tracking-widest uppercase">
                  Instagram @wrldbrey
                </a>
              </div>
              <p className="text-[#6B6B6B] text-[0.75rem] italic opacity-80">Rispondo entro 24 ore. Sempre.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1A1A1A] py-14 text-white/50 border-t border-[rgba(201,168,76,0.2)]">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-8 text-[0.7rem] tracking-wide">
          <p className="serif italic text-white/80 text-[0.9rem]">Breynner Riascos — Web Designer · Italia</p>
          
          <div className="flex gap-8 uppercase font-medium">
            <a href="#" onClick={showPending} className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" onClick={showPending} className="hover:text-white transition-colors">Cookie Policy</a>
            <span className="opacity-40">© 2026</span>
          </div>
        </div>
      </footer>

      <div id="mwa-toast">📄 Documento in fase di redazione</div>
    </>
  );
}
