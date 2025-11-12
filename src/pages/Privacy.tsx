import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Shield } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-10 pb-8 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            홈으로 돌아가기
          </Button>
        </Link>

        <Card className="p-8">
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Shield className="h-8 w-8 text-primary" />
                <h1 className="text-3xl font-bold text-foreground">
                  개인정보처리방침
                </h1>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>최종 업데이트: 2025년 11월 13일</span>
              </div>
            </div>

            <div className="space-y-6 text-foreground">
              <section>
                <h2 className="text-xl font-bold mb-3">1. 수집하는 개인정보</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  J-Community은 서비스 제공을 위해 다음과 같은 개인정보를
                  수집합니다:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>필수 정보: 이메일 주소, 사용자명, 비밀번호</li>
                  <li>선택 정보: 프로필 사진, 자기소개</li>
                  <li>자동 수집 정보: IP 주소, 쿠키, 접속 기록</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">
                  2. 개인정보의 이용 목적
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  수집된 개인정보는 다음의 목적으로 이용됩니다:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>회원 가입 및 본인 확인</li>
                  <li>서비스 제공 및 개선</li>
                  <li>부정 이용 방지 및 보안 유지</li>
                  <li>공지사항 전달 및 고객 지원</li>
                  <li>통계 분석 및 맞춤형 서비스 제공</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">
                  3. 개인정보의 보유 및 이용 기간
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  회원 탈퇴 시까지 개인정보를 보유하며, 탈퇴 후에는 관련 법령에
                  따라 일정 기간 보관 후 파기합니다. 법령에 의해 보존이 필요한
                  경우 해당 기간 동안 보관합니다.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">
                  4. 개인정보의 제3자 제공
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  J-Community은 원칙적으로 사용자의 개인정보를 제3자에게
                  제공하지 않습니다. 다만, 법령의 규정에 의거하거나 수사
                  목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가
                  있는 경우 제공할 수 있습니다.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">
                  5. 개인정보 처리 위탁
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  서비스 제공을 위해 다음과 같이 개인정보 처리를 위탁하고
                  있습니다:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>클라우드 서비스 제공업체 (데이터 저장 및 관리)</li>
                  <li>이메일 발송 대행 업체 (알림 발송)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">6. 사용자의 권리</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  사용자는 언제든지 다음의 권리를 행사할 수 있습니다:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>개인정보 열람 요구</li>
                  <li>개인정보 정정 및 삭제 요구</li>
                  <li>개인정보 처리 정지 요구</li>
                  <li>회원 탈퇴 및 동의 철회</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">
                  7. 개인정보 보호책임자
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  개인정보 보호와 관련된 문의사항은 아래의 개인정보
                  보호책임자에게 연락주시기 바랍니다.
                </p>
                <div className="mt-3 p-4 bg-secondary/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">이름:</strong> 개인정보
                    보호팀
                    <br />
                    <strong className="text-foreground">이메일:</strong>{" "}
                    pjy008008@gmail.com
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">8. 쿠키의 사용</h2>
                <p className="text-muted-foreground leading-relaxed">
                  J-Community은 사용자의 편의를 위해 쿠키를 사용합니다. 쿠키는
                  웹사이트 방문 시 자동으로 생성되며, 사용자는 브라우저 설정을
                  통해 쿠키 사용을 거부할 수 있습니다.
                </p>
              </section>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                개인정보 보호와 관련하여 궁금한 사항이 있으시면 언제든지
                연락주시기 바랍니다.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;
