import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    id: 'item-1',
    question: 'Q1. 마인딧 코어는 어떤 서비스인가요?',
    answer: (
      <>
        마인딧 코어는 정신건강 전문가가 프로그램을 보다 효율적으로 설계·운영하고,
        <br />
        참여자의 지속적인 경험까지 관리할 수 있도록 돕는 운영 시스템입니다.
      </>
    ),
  },
  {
    id: 'item-2',
    question: 'Q2. 현재 정식 출시된 서비스인가요?',
    answer: (
      <>
        아직 베타 테스트 및 초기 연구·개발 단계에 있는 프로젝트입니다.
        <br />
        현재는 전문가 대상 사용성 테스트와 피드백 수집을 중심으로 운영되고 있습니다.
      </>
    ),
  },
  {
    id: 'item-3',
    question: 'Q3. 어떤 전문가를 대상으로 하나요?',
    answer: (
      <>
        정신건강복지센터, 상담센터, 병원, 코치 및 정신건강 관련 프로그램을 운영하는
        <br />
        전문가와 기관을 대상으로 하고 있습니다.
      </>
    ),
  },
  {
    id: 'item-4',
    question: 'Q4. 오프라인 프로그램에서도 사용할 수 있나요?',
    answer:
      '네. 마인딧 코어는 오프라인과 디지털 활동을 함께 연결하는 혼합형(Hybrid) 운영 구조를 기반으로 설계되고 있습니다.',
  },
  {
    id: 'item-5',
    question: 'Q5. 베타 테스트는 어떻게 참여하나요?',
    answer: (
      <>
        랜딩페이지 하단의 베타 테스트 신청 폼에 이메일을 남겨주시면 검토 후 순차적으로 안내드릴 예정입니다.
        <br />
        선정된 베타 테스터에게는 추후 정식 오픈 시 할인 혜택 및 우선 사용 기회가 제공될 수 있습니다.
      </>
    ),
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="pt-10 md:pt-14 pb-20 md:pb-28">
      <div className="container max-w-4xl">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-heading text-foreground mb-4">자주 묻는 질문</h2>
        </div>

        <div className="bg-card border border-border rounded-base px-6 md:px-8" style={{ borderRadius: '12px' }}>
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-base md:text-lg py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}