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
      '마인딧 코어는 서비스 제공을 위해 필요한 최소한의 개인정보만 수집합니다.',
      '수집된 정보는 베타 신청 안내, 서비스 운영 및 품질 개선 목적에 한해 사용됩니다.',
      '법령에 따라 보관이 필요한 경우를 제외하고, 목적 달성 후에는 안전하게 파기합니다.',
    ],
  },
  terms: {
    title: '이용 약관',
    body: [
      '마인딧 코어 서비스 이용 시 관련 법령 및 본 약관을 준수해야 합니다.',
      '서비스 개선을 위해 기능, UI, 정책은 사전 고지 후 변경될 수 있습니다.',
      '이용자는 계정 및 접근 권한을 안전하게 관리할 책임이 있습니다.',
    ],
  },
} as const;

export default function LegalDialog({ open, onOpenChange, type }: LegalDialogProps) {
  const content = legalContent[type];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{content.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
          {content.body.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}