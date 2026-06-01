import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

type LegalType = 'privacy' | 'terms';

interface LegalDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: LegalType;
}

const legalContent = {
  privacy: {
    title: '개인정보 처리 방침',
    body: [
      '마인딧 코어(Minddit Core)는 베타 테스트 참여자 모집 및 서비스 안내를 위해 아래와 같이 개인정보를 수집·이용합니다.',
      '1. 수집하는 개인정보 항목',
      '* 이메일 주소',
      '2. 개인정보 수집 및 이용 목적',
      '* 베타 테스트 참여 신청 접수',
      '* 베타 테스트 선정 및 안내',
      '* 서비스 개발 진행 상황 및 오픈 안내',
      '* 향후 서비스 관련 공지 및 설문 요청',
      '3. 개인정보 보유 및 이용 기간',
      '수집된 개인정보는 수집일로부터 1년간 보관 후 지체 없이 파기합니다. 다만, 이용자가 삭제를 요청하는 경우 즉시 파기합니다.',
      '4. 개인정보 제3자 제공',
      '마인딧 코어는 이용자의 개인정보를 외부에 제공하지 않습니다.',
      '5. 개인정보 처리 위탁',
      '서비스 운영을 위해 이메일 발송 및 데이터 저장 서비스를 이용할 수 있으며, 이 경우 관련 법령에 따라 안전하게 관리됩니다.',
      '6. 동의 거부 권리',
      '이용자는 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 다만, 동의를 거부할 경우 베타 테스트 신청이 제한될 수 있습니다.',
      '시행일자: 2026년 5월 30일',
      '문의: [이메일 주소 입력]',
    ],
  },
  terms: {
    title: '이용 약관',
    body: [
      '제1조 (목적)',
      '본 약관은 마인딧 코어(Minddit Core)가 제공하는 베타 테스트 참여 신청 및 관련 서비스 이용에 관한 기본 사항을 규정함을 목적으로 합니다.',
      '제2조 (서비스 소개)',
      '마인딧 코어는 정신건강 전문가를 위한 프로그램 운영 지원 서비스를 연구·개발 중인 프로젝트입니다.',
      '현재 제공되는 서비스는 베타 테스트 참여 신청, 서비스 안내 및 관련 정보 제공을 포함합니다.',
      '제3조 (이용 신청)',
      '이용자는 이메일 주소를 입력하여 베타 테스트 참여를 신청할 수 있습니다.',
      '마인딧 코어는 신청자 전원을 선정하는 것을 보장하지 않으며, 내부 기준에 따라 베타 테스트 참여자를 선정할 수 있습니다.',
      '제4조 (서비스 제공 및 변경)',
      '마인딧 코어는 서비스 개선 및 개발 과정에서 제공 내용, 일정 및 기능을 변경할 수 있습니다.',
      '베타 서비스 단계에서는 일부 기능이 변경, 추가 또는 중단될 수 있습니다.',
      '제5조 (이용자의 의무)',
      '이용자는 정확한 정보를 제공하여야 합니다.',
      '이용자는 서비스 운영을 방해하거나 관련 법령에 위반되는 행위를 하여서는 안 됩니다.',
      '제6조 (지식재산권)',
      '마인딧 코어와 관련된 상표, 로고, 콘텐츠 및 서비스에 대한 권리는 마인딧 코어 팀에 귀속됩니다.',
      '이용자는 사전 동의 없이 이를 복제, 배포 또는 상업적으로 이용할 수 없습니다.',
      '제7조 (면책조항)',
      '마인딧 코어는 현재 연구 및 개발 단계의 서비스로, 특정 결과나 효과를 보장하지 않습니다.',
      '서비스 이용 과정에서 발생하는 간접적 손해에 대하여 관련 법령이 허용하는 범위 내에서 책임을 제한할 수 있습니다.',
      '제8조 (약관의 변경)',
      '본 약관은 서비스 운영 및 관련 법령의 변경에 따라 수정될 수 있으며, 변경 시 웹사이트를 통해 안내합니다.',
      '부칙',
      '본 약관은 2026년 5월 30일부터 시행합니다.',
    ],
  },
} as const;

export default function LegalDialog({ open, onOpenChange, type }: LegalDialogProps) {
  const content = legalContent[type];

  const isSectionHeading = (text: string) => {
    const trimmed = text.trim();
    return /^(\d+\.|제\d+조|부칙)/.test(trimmed);
  };

  const isBulletLine = (text: string) => text.trim().startsWith('*');

  const normalizeBullet = (text: string) => text.trim().replace(/^\*\s*/, '• ');

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl h-[78vh] max-h-[78vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>{content.title}</DialogTitle>
        </DialogHeader>
        <div className="min-h-0 flex-1 overflow-y-auto pr-2 space-y-3 text-sm text-muted-foreground leading-relaxed">
          {content.body.map((paragraph, idx) => (
            <p
              key={idx}
              className={
                isSectionHeading(paragraph)
                  ? 'font-semibold text-foreground mt-6 first:mt-0 mb-1'
                  : isBulletLine(paragraph)
                    ? 'pl-1'
                    : undefined
              }
            >
              {isBulletLine(paragraph) ? normalizeBullet(paragraph) : paragraph}
            </p>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}