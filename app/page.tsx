"use client";

import { useState, useRef, type FormEvent, type ChangeEvent } from "react";
import { Coffee, CupSoda, Wine, CheckCircle2, X, Smile, Frown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const MOOD_OPTIONS = [
  { id: "Senang", label: "Senang", icon: Smile },
  { id: "Sedih", label: "Sedih", icon: Frown },
  { id: "Bingung", label: "Bingung", icon: HelpCircle },
];

const COFFEE_OPTIONS = [
  {
    id: "Rasa Mantan",
    label: "Kopi Cold Brew",
    description: "Sebuah pahitnya rasa dikala berakhirnya suatu hubungan, tapi tetap meninggalkan kenangan yang manis.",
    icon: CupSoda,
    iconColor: "text-brand-blue",
  },
  {
    id: "Lembaran Baru",
    label: "Kopi Susu",
    description: "Kenangan manis dan pahitnya yang terukir di waktu lampau, tetapi tetap memberi rasa yang hangat untuk memulai lembaran baru.",
    icon: Coffee,
    iconColor: "text-brand-cyan",
  },
  {
    id: "Teman Cerita",
    label: "Non-Coffee",
    description: "Manisnya sebuah situasi yang kita rasakan diawal kehidupan.",
    icon: Wine,
    iconColor: "text-brand-blue",
  },
];

export default function App() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [modalStep, setModalStep] = useState<"mood" | "menu">("mood");
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [bingungText, setBingungText] = useState("");
  const [selectedCoffee, setSelectedCoffee] = useState<string | null>(null);
  const [orderComplete, setOrderComplete] = useState(false);
  const orderRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowMenuModal(true);
  };

  const resetModal = () => {
    setModalStep("mood");
    setSelectedMood(null);
    setBingungText("");
    setSelectedCoffee(null);
  };

  const closeModal = () => {
    setShowMenuModal(false);
    resetModal();
  };

  const handleOrder = () => {
    setShowMenuModal(false);
    resetModal();
    setOrderComplete(true);
    setTimeout(() => {
      setOrderComplete(false);
      setFormData({ name: "", phone: "", email: "" });
    }, 5000);
  };

  const scrollToOrder = () => {
    orderRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-brand-light font-sans text-gray-800 selection:bg-brand-cyan selection:text-white relative overflow-x-hidden flex flex-col">
      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-brand-light">
        <div className="absolute top-[-10%] left-[-15%] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-[80px] bg-brand-cyan rotate-12 opacity-50 mix-blend-multiply blur-[30px] md:blur-none"></div>
        <div className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full bg-brand-blue opacity-50 mix-blend-multiply blur-[40px] md:blur-none"></div>
        <div className="absolute top-[25%] right-[10%] w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] bg-brand-gray rounded-[30px] rotate-45 opacity-40 blur-[20px] md:blur-none"></div>
        <div className="absolute bottom-[20%] left-[8%] w-[120px] h-[120px] sm:w-[200px] sm:h-[200px] rounded-full border-[20px] sm:border-[30px] border-brand-cyan opacity-40 blur-[20px] md:blur-none"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="relative z-10 w-full bg-transparent px-6 sm:px-12 py-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 border-2 border-brand-blue rounded-full flex items-center justify-center">
            <span className="font-serif italic font-bold text-lg text-brand-blue">CK</span>
          </div>
          <h1 className="text-xl font-serif font-bold tracking-tight text-brand-blue hidden sm:block">Cerita Kopi</h1>
        </div>
        <div className="flex items-center">
          <button
            onClick={scrollToOrder}
            className="bg-brand-blue hover:bg-brand-blue/90 text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-xs sm:text-sm tracking-widest transition-colors shadow-lg shadow-brand-blue/30 uppercase cursor-pointer"
          >
            Order Disini
          </button>
        </div>
      </nav>

      <main className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-6 sm:px-12 pb-20">

        {/* Hero Section */}
        <section className="grid lg:grid-cols-12 gap-12 lg:gap-6 mt-8 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-4 flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
  
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black leading-[1.1] text-slate-900 tracking-tight">
                Terjemahkan <br /> <span className="text-brand-blue">Rasa di Hati</span> <br /> Menjadi Secangkir Kopi.
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
                Kami persembahkan rasa yang berbicara, mendengar, dan memberi solusi atas setiap perjalanan hidupmu. Multiple meaning&apos;s of the untold story.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-8 lg:col-start-5 relative flex items-center justify-center min-h-[400px]"
          >
            <div className="relative w-full h-[400px] flex justify-center items-end">
              <div className="absolute bottom-10 w-3/4 max-w-md h-2 bg-slate-800/10 rounded-full blur-[1px]"></div>
              <div className="absolute left-[10%] sm:left-[20%] bottom-12 flex flex-col items-center">
                <div className="relative w-20 sm:w-24 h-28 sm:h-32 bg-slate-300 rounded-t-full opacity-40">
                  <div className="absolute -top-6 -left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transform -rotate-12 animate-pulse">
                    <span className="text-xl">🙁</span>
                  </div>
                  <div className="absolute -top-12 left-6 sm:left-8 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-xl">🙂</span>
                  </div>
                  <div className="absolute top-2 -right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transform rotate-12">
                    <span className="text-xl">😶</span>
                  </div>
                </div>
                <p className="text-[10px] sm:text-xs font-bold uppercase mt-4 opacity-50">The Storyteller</p>
              </div>
              <div className="absolute right-[10%] sm:right-[20%] bottom-12 flex flex-col items-center">
                <div className="w-20 sm:w-24 h-28 sm:h-32 bg-brand-blue rounded-t-full opacity-80 shadow-[0_0_30px_rgba(44,134,215,0.4)] relative overflow-hidden">
                  <div className="absolute top-4 left-4 sm:left-6 w-12 h-12 bg-brand-cyan rounded-full blur-xl opacity-60"></div>
                </div>
                <p className="text-[10px] sm:text-xs font-bold uppercase mt-4 text-brand-blue">The Listener</p>
              </div>
              <div className="absolute bottom-24 sm:bottom-28 left-[30%] w-[40%] h-[1px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-40"></div>
            </div>
          </motion.div>
        </section>

        {/* Story & Philosophy Details */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-xl shadow-xl p-8 sm:p-10 rounded-[32px] border border-white space-y-6"
            >
              <h2 className="text-3xl font-serif font-black text-slate-900 leading-tight">Filosofi Kami</h2>
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  Mengambil keputusan merupakan hal kritis yang tiap manusia pernah merasakannya, cobalah untuk berbicara pada dirimu sendiri agar kau mengerti apa arti kata &apos;hidup&apos; setelah kau mencoba untuk lebih terbuka.
                </p>
                <p>
                  <strong>Cerita Kopi</strong> disini menghadirkan sebuah cita rasa classic, juga memberi kesan pada tiap perjalanan hidup yang telah kamu lewati. Kami bersedia membantu customer yang memilih untuk tidak bercerita dengan menawarkan produk kami yang memiliki arti dan gagasan di tiap prosesnya.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/80 backdrop-blur-xl shadow-xl p-8 sm:p-10 rounded-[32px] border border-white space-y-6"
            >
              <h2 className="text-3xl font-serif font-black text-slate-900 leading-tight">Cerita di Balik Segelas Kopi</h2>
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  Kami adalah produsen yang berstatus pelajar yang berusaha membuat sebuah kopi yang bisa berbicara, mendengar dan memberi solusi. Kami sangat mengerti tentang adanya datang dan pergi karena manusia begitu adanya, dan customer pun begitu juga kehadirannya.
                </p>
                <p>
                  Kami bertujuan tidak hanya untuk menjual sebuah kopi disertai rasa, tapi kami juga bertujuan untuk memberi kenangan dari beberapa cerita yang customer berikan ke kita atas keadaan yang telah dilalui, walapun kami hanya mendengar dan memberi solusi lewat produk kami.
                </p>
                <p>
                  Banyak cerita yang tak terungkap, pun dibalik itu ada suatu arti yang begitu besar bagi sang pendengar dan pencerita. Biar kami sesuaikan ceritamu dengan produk kami, agar yang terlalu menjanggal dapat menjadi leluasa lega dalam hati.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Order Form — full width matching philosophy cards above */}
        <section ref={orderRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] shadow-2xl border border-slate-100 p-8 sm:p-10 lg:p-14"
          >
            {orderComplete ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center space-y-4"
              >
                <div className="w-20 h-20 bg-brand-cyan/20 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 text-brand-blue" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-slate-800">Cerita Diterima</h4>
                <p className="text-sm text-slate-500">Barista kami sedang mendengarkannya dan menerjemahkannya untukmu.</p>
              </motion.div>
            ) : (
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Left: heading */}
                <div className="space-y-4">
                  <p className="text-xs font-extrabold text-brand-blue uppercase tracking-widest">Order Sekarang</p>
                  <h3 className="text-4xl sm:text-5xl font-serif font-black text-slate-900 leading-tight tracking-tight">
                    Tuangkan <br /> Ceritamu
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                    Biar kami meracik jawaban untuk perasaanmu hari ini. Isi datamu, lalu pilih kopi yang paling pas.
                  </p>
                </div>

                {/* Right: form fields */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase ml-4">Nama Lengkap*</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Siapa namamu?"
                      className="w-full px-6 py-4 rounded-full bg-slate-50 border-none focus:ring-2 focus:ring-brand-cyan text-sm outline-none transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase ml-4">No. Whatsapp*</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0812..."
                        className="w-full px-6 py-4 rounded-full bg-slate-50 border-none focus:ring-2 focus:ring-brand-cyan text-sm outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase ml-4">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="@gmail.com"
                        className="w-full px-6 py-4 rounded-full bg-slate-50 border-none focus:ring-2 focus:ring-brand-cyan text-sm outline-none transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-blue text-white py-4 mt-2 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-blue-600 transition-colors shadow-lg shadow-brand-blue/30 cursor-pointer"
                  >
                    Pilih Menu
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </section>

      </main>

      {/* Footer */}
      <div className="h-1 bg-gradient-to-r from-transparent via-brand-cyan to-transparent w-full opacity-30 mt-auto relative z-10"></div>

      {/* Modal */}
      <AnimatePresence>
        {showMenuModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/50 backdrop-blur-sm"
            onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="bg-white rounded-[40px] shadow-2xl p-8 sm:p-10 w-full max-w-md relative overflow-hidden"
            >
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors cursor-pointer z-10"
              >
                <X className="w-4 h-4 text-slate-500" />
              </button>

              <AnimatePresence mode="wait" initial={false}>

                {/* Step 1: Mood selection */}
                {modalStep === "mood" && (
                  <motion.div
                    key="mood"
                    initial={{ x: 0, opacity: 1 }}
                    exit={{ x: -60, opacity: 0 }}
                    transition={{ duration: 0.22, ease: "easeInOut" }}
                  >
                    <div className="mb-6">
                      <p className="text-xs font-extrabold text-brand-blue uppercase tracking-widest mb-1">Cerita Kopi</p>
                      <h3 className="text-3xl font-serif font-black text-slate-900 tracking-tight">Bagaimana perasaanmu?</h3>
                      <p className="text-sm text-slate-500 mt-1">Ceritakan, biar kami temukan kopi yang paling pas.</p>
                    </div>

                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {MOOD_OPTIONS.map((mood) => {
                        const Icon = mood.icon;
                        const isSelected = selectedMood === mood.id;
                        return (
                          <button
                            key={mood.id}
                            onClick={() => setSelectedMood(mood.id)}
                            className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                              isSelected
                                ? "border-brand-blue bg-brand-blue/5"
                                : "border-slate-100 bg-white hover:border-brand-blue/30 hover:bg-slate-50"
                            }`}
                          >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isSelected ? "bg-brand-blue/10" : "bg-slate-100"}`}>
                              <Icon className={`w-5 h-5 ${isSelected ? "text-brand-blue" : "text-slate-400"}`} />
                            </div>
                            <span className={`text-xs font-bold ${isSelected ? "text-brand-blue" : "text-slate-500"}`}>{mood.label}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Textbox khusus Bingung */}
                    <AnimatePresence>
                      {selectedMood === "Bingung" && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22 }}
                          className="overflow-hidden mb-4"
                        >
                          <div className="space-y-1.5 pt-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase ml-4">Ceritakan Apa yang kamu rasakan</label>
                            <textarea
                              rows={3}
                              value={bingungText}
                              onChange={(e) => setBingungText(e.target.value)}
                              placeholder="Tuliskan apa yang ada di pikiranmu..."
                              className="w-full px-5 py-3 rounded-[20px] bg-slate-50 border-none focus:ring-2 focus:ring-brand-cyan text-sm resize-none outline-none transition-all"
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Tombol Lihat Menu */}
                    <AnimatePresence>
                      {selectedMood && (selectedMood !== "Bingung" || bingungText.trim()) && (
                        <motion.button
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          onClick={() => setModalStep("menu")}
                          className="w-full bg-brand-blue text-white py-3.5 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-blue-600 transition-colors shadow-lg shadow-brand-blue/30 cursor-pointer"
                        >
                          Lihat Menu →
                        </motion.button>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}

                {/* Step 2: Coffee menu */}
                {modalStep === "menu" && (
                  <motion.div
                    key="menu"
                    initial={{ x: 60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -60, opacity: 0 }}
                    transition={{ duration: 0.22, ease: "easeInOut" }}
                  >
                    <button
                      onClick={() => setModalStep("mood")}
                      className="flex items-center gap-1 text-xs font-bold text-slate-400 hover:text-brand-blue transition-colors cursor-pointer mb-5"
                    >
                      ← Kembali
                    </button>

                    <div className="mb-5">
                      <p className="text-xs font-extrabold text-brand-blue uppercase tracking-widest mb-1">Our Signature Brews</p>
                      <h3 className="text-3xl font-serif font-black text-slate-900 tracking-tight">Pilih Rasa Ceritamu</h3>
                      <p className="text-sm text-slate-500 mt-1">Pilih satu yang paling mewakili perasaanmu.</p>
                    </div>

                    <div className="space-y-3 mb-5">
                      {COFFEE_OPTIONS.map((option) => {
                        const Icon = option.icon;
                        const isSelected = selectedCoffee === option.id;
                        return (
                          <button
                            key={option.id}
                            onClick={() => setSelectedCoffee(option.id)}
                            className={`w-full flex gap-4 items-center p-4 rounded-3xl border-2 transition-all cursor-pointer text-left ${
                              isSelected
                                ? "border-brand-blue bg-brand-blue/5"
                                : "border-slate-100 bg-white hover:border-brand-blue/20 hover:bg-slate-50"
                            }`}
                          >
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors ${isSelected ? "bg-brand-blue/10" : "bg-slate-50"}`}>
                              <Icon className={`w-5 h-5 ${isSelected ? "text-brand-blue" : option.iconColor}`} />
                            </div>
                            <div>
                              <h4 className="text-base font-bold text-slate-800">{option.label}</h4>
                              <p className="text-xs text-slate-500 italic mt-0.5">{option.description}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <button
                      onClick={handleOrder}
                      disabled={!selectedCoffee}
                      className="w-full bg-brand-blue text-white py-3.5 rounded-full font-bold text-sm tracking-widest uppercase transition-all shadow-lg shadow-brand-blue/30 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:enabled:bg-blue-600"
                    >
                      Pesan Sekarang
                    </button>
                  </motion.div>
                )}

              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
