/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  Sparkles,
  Search,
  History,
  Zap,
  LineChart,
  MessageSquare,
  Layout,
  ClipboardList,
  Settings,
  ChevronRight,
  CheckCircle2,
  Star,
  Users,
  Gift,
  AlertCircle,
  ExternalLink,
  ShieldCheck,
  MousePointer2
} from "lucide-react";

const Nav = () => null;

const Hero = () => (
  <section id="home" className="relative pt-24 pb-20 px-6 overflow-hidden flex items-center">
    {/* Decorative background blur */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-lavender/10 rounded-full blur-[120px] -z-10" />

    <div className="max-w-5xl mx-auto w-full">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center lg:text-left"
        >
          <h1 className="text-[28px] leading-[1.3] md:text-7xl font-extrabold mb-10 tracking-tight md:leading-[1.1] break-keep">
            타로 상담 중 막히는 순간,<br /> AI가 <span className="text-brand-lavender text-gradient">다음 흐름</span>을<br /> 함께 잡아드립니다
          </h1>
          <p className="text-base md:text-xl text-white/60 mb-12 leading-relaxed max-w-xl break-keep">
            상담 답변이 막히는 순간, 카드 해석과 내담자의 상황을 함께 정리해 상담사가 참고할 수 있는 답변 흐름을 제안하는 타로 상담 보조 프로그램입니다.
          </p>
          <div className="flex justify-center lg:justify-start">
            <a
              href="https://naver.me/GB3FvidT"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap px-10 py-4 rounded-full bg-brand-lavender text-brand-midnight font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-brand-lavender/20 inline-block"
            >
              베타테스트 신청하기
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:ml-auto"
        >
          <div className="relative z-10 w-full lg:w-[500px] aspect-square rounded-[56px] overflow-hidden glass p-4 shadow-2xl shadow-brand-lavender/10">
            <img
              src="/tarotpro/images/regenerated_image_1778762674094.png"
              alt="Mystical tarot cards"
              className="w-full h-full object-cover rounded-[42px] brightness-110 contrast-110 hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight/40 via-transparent to-transparent pointer-events-none" />
          </div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute -bottom-4 -left-8 z-20 glass px-9 py-4 rounded-full border-brand-gold/30 shadow-2xl shadow-brand-gold/5 backdrop-blur-3xl"
          >
            <span className="text-lg font-bold text-brand-gold tracking-tight whitespace-nowrap">현재 10명 한정 무료 테스트 모집중</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Problems = () => (
  <section className="py-40 px-6">
    <div className="max-w-5xl mx-auto text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">상담 중 이런 순간이 있지 않으셨나요?</h2>
      <p className="text-white/50 max-w-3xl mx-auto leading-relaxed">
        카드 해석은 떠오르는데, 말로 풀어내기 어려웠던 순간.
        <br />
        타로프로는 상담사가 참고할 수 있는 답변 초안과 다음 흐름을 제안합니다.
      </p>
    </div>

    <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
      {[
        {
          icon: Search,
          title: "해석이 막히는 순간",
          desc: "비슷한 질문과 카드 조합이 반복될 때, 새로운 관점으로 해석을 정리할 수 있도록 도와줍니다."
        },
        {
          icon: History,
          title: "상담 기록 정리",
          desc: "상담 내용을 일일이 다시 정리하지 않아도, 핵심 질문과 흐름을 남겨두기 쉽게 도와줍니다."
        },
        {
          icon: Zap,
          title: "갑작스러운 질문 대응",
          desc: "내담자의 갑작스러운 질문이나 빠른 대화 흐름 속에서도 참고할 수 있는 답변 방향을 제안합니다."
        },
        {
          icon: LineChart,
          title: "전체 흐름 정리",
          desc: "카드 한 장의 의미에만 머무르지 않고, 전체 상담 흐름과 내담자의 감정선을 함께 정리해줍니다."
        },
      ].map((card, idx) => (
        <motion.div
          key={idx}
          whileHover={{ y: -6, backgroundColor: "rgba(183, 148, 244, 0.05)" }}
          className="glass p-6 md:p-8 rounded-[28px] border-white/5 transition-all flex flex-col gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-brand-lavender/5 flex items-center justify-center border border-brand-lavender/10">
            <card.icon className="w-5 h-5 text-brand-lavender" />
          </div>
          <div>
            <h3 className="text-base font-bold mb-2 tracking-tight">{card.title}</h3>
            <p className="text-[11px] text-white/50 leading-relaxed font-light">{card.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

const Solution = () => (
  <section id="program" className="py-40 px-4 md:px-6">
    <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
      <div className="order-2 lg:order-1">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
          상담사의 통찰력을 돕는<br /><span className="text-brand-lavender">최고의 AI 파트너</span>
        </h2>
        <p className="text-lg text-white/50 mb-12 leading-relaxed">
          타로프로는 상담사를 대체하는 것이 아닙니다. 당신의 직관과 경험을 기술로 증폭시켜 내담자에게 더 명확한 가이드를 제공할 수 있도록 돕습니다.
        </p>
        <div className="space-y-6">
          {[
            "실시간으로 제안되는 상담 답변 초안",
            "직관적인 상담 흐름 및 감정선 분석",
            "체계적인 세션 로그 및 대시보드 관리"
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-5 group">
              <div className="flex-shrink-0 w-7 h-7 rounded-full border border-brand-lavender/30 flex items-center justify-center text-brand-lavender group-hover:bg-brand-lavender group-hover:text-brand-midnight transition-all">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-white/80 font-medium tracking-tight">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 h-full">
        {[
          {
            icon: MessageSquare,
            title: "상담 답변 생성",
            desc: "카드의 상징과 내담자의 상황을 결합하여 상담사가 바로 활용할 수 있는 풍부한 답변 초안을 제안합니다."
          },
          {
            icon: LineChart,
            title: "실시간 흐름 분석",
            desc: "대화의 핵심 키워드를 추출하고 전체적인 운의 흐름과 감정 변화를 대시보드에 시각화하여 보여줍니다."
          },
          {
            icon: ClipboardList,
            title: "체계적 세션 로그",
            desc: "모든 상담 내역은 자동으로 갈무리되어 반복되는 상담 패턴을 분석하고 상담 로그를 자산화합니다."
          },
          {
            icon: Zap,
            title: "Gemini AI 연동",
            desc: "구글의 최신 모델을 통해 타로의 은유를 현대적 언어로 정교하게 치환하여 논리적인 가이드를 제공합니다."
          }
        ].map((card, idx) => (
          <div key={idx} className="glass p-8 md:p-10 rounded-[40px] border-white/5 hover:border-brand-lavender/20 group transition-all flex flex-col justify-center">
            <div className="w-12 h-12 rounded-2xl bg-brand-lavender/5 flex items-center justify-center mb-6 group-hover:bg-brand-lavender group-hover:text-brand-midnight transition-colors">
              <card.icon className="w-5 h-5 text-brand-lavender group-hover:text-inherit" />
            </div>
            <h4 className="font-bold text-base mb-3 tracking-tight">{card.title}</h4>
            <p className="text-[11px] text-white/40 leading-relaxed font-light">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Showcase = () => (
  <section className="py-40 px-4 md:px-6">
    <div className="max-w-5xl mx-auto text-center mb-24">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">직관적인 상담 화면</h2>
      <p className="text-white/40 max-w-xl mx-auto">상담 중 필요한 기능을 빠르게 확인할 수 있도록 구성했습니다.</p>
    </div>

    <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-20 md:gap-6">
      {[
        {
          img: "/tarotpro/images/regenerated_image_1778762674094.png",
          title: "1. 상담 답변 보조",
          desc: "질문과 카드 정보를 바탕으로 상담사가 참고할 수 있는 답변 초안을 제안합니다. 상황을 구체적으로 입력할수록 더 자연스러운 상담 흐름을 잡을 수 있습니다."
        },
        {
          img: "/tarotpro/images/regenerated_image_1778762676811.png",
          title: "2. 상담 흐름 분석",
          desc: "현재 상담이 어떤 방향으로 흘러가고 있는지 정리해줍니다. 핵심 고민, 내담자가 원하는 것, 속마음, 주의할 점을 참고할 수 있습니다."
        },
        {
          img: "/tarotpro/images/2.png",
          title: "3. 무료/유료 흐름 관리",
          desc: "무료 상담과 심층 상담의 흐름을 구분해 운영할 수 있도록 구성했습니다. 상담사가 직접 흐름을 보며 다음 단계로 이어갈 수 있습니다."
        },
        {
          img: "/tarotpro/images/1.png",
          title: "4. 모델/API 설정",
          desc: "AI 사용을 위한 기본 설정 화면입니다. Google Gemini API 키를 입력하면 바로 사용할 수 있으며, 발급 방법은 별도 안내해드립니다."
        },
      ].map((item, idx) => (
        <div key={idx} className="group">
          <div className="rounded-[32px] md:rounded-[40px] overflow-hidden glass p-2 md:p-3 mb-5 md:mb-8 transition-all duration-700 group-hover:scale-[1.03]">
            <img src={item.img} alt={item.title} className="w-full aspect-[4/5] object-cover rounded-[24px] md:rounded-[32px] brightness-100 group-hover:brightness-110 transition-all duration-700" />
          </div>
          <div className="px-1 md:px-4 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{item.title}</h3>
            <p className="text-[12px] md:text-[13px] text-white/40 leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const BetaRecruitment = () => (
  <section id="apply" className="py-20 px-4 md:px-6">
    <div className="max-w-5xl mx-auto glass rounded-[40px] p-6 md:p-14 relative overflow-hidden ring-1 ring-white/10 shadow-2xl shadow-brand-lavender/5">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-lavender/10 rounded-full blur-[120px] -mr-60 -mt-60" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[100px] -ml-40 -mb-40" />

      <div className="text-center mb-10 max-w-2xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">베타 테스트 모집 안내</h2>
        <p className="text-sm md:text-base text-white/50 leading-relaxed">현재 실제 상담 환경에서 프로그램을 테스트해주실 분을 찾고 있습니다. 아직 초기 버전이라 사용 환경에 따라 오류가 있을 수 있으며, 기능과 문구는 피드백을 받아 계속 개선 중입니다.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 relative z-10">
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-brand-lavender font-bold text-lg">
            <div className="w-8 h-8 rounded-lg bg-brand-lavender/10 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
            <span>모집 대상</span>
          </div>
          <ul className="space-y-3.5 text-sm md:text-[15px] text-white/60">
            <li className="flex items-start gap-3 tracking-tight leading-snug">• 타로 상담을 실제로 진행 중이거나, 유료 상담을 준비 중인 분</li>
            <li className="flex items-start gap-3 tracking-tight leading-snug">• 실제 손님 상담 또는 상담 연습에 프로그램을 적용해볼 수 있는 분</li>
            <li className="flex items-start gap-3 tracking-tight leading-snug">• AI 답변을 그대로 복사하기보다, 상담 보조 자료로 활용해볼 수 있는 분</li>
            <li className="flex items-start gap-3 tracking-tight leading-snug">• 무료 상담 이후 심층 상담으로 이어지는 흐름을 테스트해보고 싶은 분</li>
            <li className="flex items-start gap-3 tracking-tight leading-snug">• 사용 후 좋았던 점, 불편했던 점, 개선점을 구체적으로 알려주실 분</li>
          </ul>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3 text-brand-gold font-bold text-lg">
            <div className="w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center">
              <Gift className="w-4 h-4" />
            </div>
            <span>참여 혜택</span>
          </div>
          <ul className="space-y-3.5 text-sm md:text-[15px] text-white/60">
            <li className="flex items-start gap-3 tracking-tight leading-snug">• 7일간 무료로 실제 상담 또는 연습 상담에 사용 가능</li>
            <li className="flex items-start gap-3 tracking-tight leading-snug">• 피드백을 남겨주신 분께는 추가 무료 사용 기간 제공</li>
            <li className="flex items-start gap-3 tracking-tight leading-snug">• 브랜드명과 기본 안내 문구가 적용된 개인 세팅 버전 우선 제공</li>
            <li className="flex items-start gap-3 tracking-tight leading-snug">• 정식 출시 시 초기 테스터 전용 할인 혜택 제공</li>
            <li className="flex items-start gap-3 tracking-tight leading-snug">• 추후 관련 프로그램 테스트 시 우선 참여 기회 제공</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 pt-8 border-t border-white/5 flex justify-center">
        <a
          href="https://naver.me/GB3FvidT"
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap px-10 py-4 rounded-full bg-brand-lavender text-brand-midnight font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-brand-lavender/20 inline-block"
        >
          베타테스트 신청하기
        </a>
      </div>
    </div>
  </section>
);

const Guide = () => (
  <section className="py-32 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-center text-4xl font-bold mb-20 tracking-tight">사용 전 확인해주세요</h2>

      <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
        {[
          {
            icon: Zap,
            title: "인터넷 연결이 필요합니다",
            content: <>본 프로그램은 AI와 실시간으로 연결되어 답변을 생성합니다.<br />사용 중에는 안정적인 인터넷 환경을 권장드립니다.</>
          },
          {
            icon: ShieldCheck,
            title: "Google Gemini API 키가 필요합니다",
            content: <>AI 답변 생성을 위해 Google Gemini API 키를 입력해야 합니다.<br />API 키 발급 방법은 별도 안내에 따라 진행하실 수 있습니다.</>
          },
          {
            icon: Layout,
            title: "실행 파일로 바로 사용할 수 있습니다",
            content: <>별도의 개발 프로그램이나 복잡한 설치 과정 없이,<br />제공된 실행 파일을 실행하여 사용할 수 있습니다.</>
          },
          {
            icon: MousePointer2,
            title: "AI 사용을 위한 간단한 설정이 필요합니다",
            content: <>Google Gemini API 키를 입력해야 합니다.<br />키는 발급 할 수 있도록 별도 안내해드립니다.</>
          },
        ].map((item, idx) => (
          <div key={idx} className="flex gap-6 group items-start">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl glass border-brand-lavender/20 flex flex-col items-center justify-center transition-all group-hover:bg-brand-lavender group-hover:text-brand-midnight">
              <span className="text-[9px] uppercase font-bold opacity-50 tracking-tighter">Step</span>
              <span className="text-xl font-bold leading-none">0{idx + 1}</span>
            </div>
            <div className="pt-1">
              <h3 className="text-lg font-bold mb-2 tracking-tight">{item.title}</h3>
              <div className="text-[13px] text-white/40 leading-relaxed font-light">{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Warnings = () => (
  <section className="px-4 md:px-6 pb-40">
    <div className="max-w-5xl mx-auto glass border-white/10 p-6 md:p-12 rounded-[40px] ring-1 ring-white/5">
      <div className="flex items-center gap-4 text-white/80 mb-8 font-bold text-lg">
        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
          <AlertCircle className="w-5 h-5 opacity-60" />
        </div>
        <span>꼭 확인해주세요</span>
      </div>
      <div className="grid md:grid-cols-2 gap-10 text-[13px] text-white/40 leading-loose">
        <ul className="space-y-4">
          <li className="flex gap-3"><span>•</span> <span>본 프로그램은 상담사를 대체하는 도구가 아니라 상담 보조 도구입니다.</span></li>
          <li className="flex gap-3"><span>•</span> <span>AI 답변은 참고용이며, 최종 상담 판단과 전달은 상담사가 직접 해야 합니다.</span></li>
          <li className="flex gap-3"><span>•</span> <span>내담자의 민감한 개인정보는 입력하지 않는 것을 권장합니다.</span></li>
          <li className="flex gap-3"><span>•</span> <span>베타 테스트 기간에는 상황에 따라 오류나 응답 지연이 발생할 수 있습니다.</span></li>
        </ul>
        <ul className="space-y-4">
          <li className="flex gap-3"><span>•</span> <span>테스트 중 발견된 오류, 불편한 점, 개선 의견은 프로그램 개선에 활용됩니다.</span></li>
          <li className="flex gap-3"><span>•</span> <span>참여 중 남겨주신 후기와 피드백은 프로그램 개선 및 홍보 자료로 활용될 수 있습니다.</span></li>
          <li className="flex gap-3"><span>•</span> <span>자료 활용 시 개인을 식별할 수 있는 정보는 익명 처리됩니다.</span></li>
          <li className="flex gap-3"><span>•</span> <span>본 프로그램의 무단 공유, 복제, 재판매는 엄격히 금지됩니다.</span></li>
        </ul>
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen bg-brand-midnight text-white selection:bg-brand-lavender/30">
      <main>
        <Hero />
        <Problems />
        <Solution />
        <Showcase />
        <BetaRecruitment />
        <Guide />
        <Warnings />
      </main>
    </div>
  );
}
