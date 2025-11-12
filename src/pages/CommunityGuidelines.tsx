import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Heart, MessageCircle, Shield, Users } from "lucide-react";

const CommunityGuidelines = () => {
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
                <Users className="h-8 w-8 text-primary" />
                <h1 className="text-3xl font-bold text-foreground">커뮤니티 가이드</h1>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Calendar className="h-4 w-4" />
                <span>최종 업데이트: 2025년 11월 13일</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                J-Community은 모두가 안전하고 즐겁게 소통할 수 있는 공간을 만들기 위해 
                커뮤니티 가이드라인을 운영하고 있습니다. 모든 회원은 아래의 규칙을 준수해야 합니다.
              </p>
            </div>

            <div className="space-y-6 text-foreground">
              <section className="border-l-4 border-primary pl-4">
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold">1. 서로 존중하기</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  모든 회원은 서로를 존중해야 합니다. 다음과 같은 행위는 금지됩니다:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>욕설, 비방, 혐오 발언</li>
                  <li>인종, 성별, 종교, 성적 지향에 대한 차별</li>
                  <li>개인정보 유출 및 명예훼손</li>
                  <li>괴롭힘 및 스토킹 행위</li>
                </ul>
              </section>

              <section className="border-l-4 border-primary pl-4">
                <div className="flex items-center gap-2 mb-3">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold">2. 건설적인 대화</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  의견이 다를 수 있지만, 건설적인 토론을 지향합니다:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>논리적이고 사실에 근거한 주장</li>
                  <li>상대방의 의견을 경청하고 이해하려는 태도</li>
                  <li>감정적인 공격이 아닌 내용에 대한 비판</li>
                  <li>건전한 토론 문화 유지</li>
                </ul>
              </section>

              <section className="border-l-4 border-primary pl-4">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold">3. 적절한 콘텐츠</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  커뮤니티에 게시되는 모든 콘텐츠는 적절해야 합니다:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>불법적인 내용 게시 금지</li>
                  <li>성인물 및 폭력적 콘텐츠 제한</li>
                  <li>스팸 및 광고성 게시물 금지</li>
                  <li>저작권을 침해하는 콘텐츠 금지</li>
                  <li>허위 정보 및 가짜 뉴스 유포 금지</li>
                </ul>
              </section>

              <section className="border-l-4 border-primary pl-4">
                <h2 className="text-xl font-bold mb-3">4. 커뮤니티 규칙 준수</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  각 커뮤니티는 고유한 규칙을 가질 수 있습니다:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>커뮤니티별 주제와 관련된 게시물 작성</li>
                  <li>커뮤니티 운영자의 지침 준수</li>
                  <li>커뮤니티의 분위기와 문화 존중</li>
                  <li>적절한 플레어(태그) 사용</li>
                </ul>
              </section>

              <section className="border-l-4 border-primary pl-4">
                <h2 className="text-xl font-bold mb-3">5. 투표 시스템 올바르게 사용하기</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  업보트/다운보트는 콘텐츠의 질을 평가하는 도구입니다:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>가치 있고 유익한 콘텐츠에 업보트</li>
                  <li>규칙 위반이나 부적절한 콘텐츠에 다운보트</li>
                  <li>단순히 의견이 다르다는 이유로 다운보트 자제</li>
                  <li>투표 조작 행위 금지</li>
                </ul>
              </section>

              <section className="border-l-4 border-primary pl-4">
                <h2 className="text-xl font-bold mb-3">6. 계정 관리</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  건전한 커뮤니티 운영을 위한 계정 관리 규칙:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>다중 계정을 이용한 조작 행위 금지</li>
                  <li>타인의 계정 도용 금지</li>
                  <li>봇이나 자동화 프로그램 사용 제한</li>
                  <li>본인 계정의 보안 유지</li>
                </ul>
              </section>

              <section className="bg-secondary/50 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-3 text-foreground">위반 시 조치</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  가이드라인을 위반할 경우 다음과 같은 조치가 취해질 수 있습니다:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>경고 및 주의 조치</li>
                  <li>게시물 또는 댓글 삭제</li>
                  <li>일시적 계정 정지 (3일, 7일, 30일)</li>
                  <li>영구 계정 정지</li>
                  <li>심각한 위반의 경우 법적 조치</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">신고 및 문의</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  가이드라인을 위반하는 콘텐츠나 사용자를 발견하셨나요?
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4 bg-secondary/30">
                    <h3 className="font-bold text-foreground mb-2">콘텐츠 신고</h3>
                    <p className="text-sm text-muted-foreground">
                      게시물이나 댓글의 신고 버튼을 클릭하여 부적절한 콘텐츠를 신고할 수 있습니다.
                    </p>
                  </Card>
                  <Card className="p-4 bg-secondary/30">
                    <h3 className="font-bold text-foreground mb-2">문의하기</h3>
                    <p className="text-sm text-muted-foreground">
                      가이드라인에 대한 문의사항은 pjy008008@gmail.com으로 연락주세요.
                    </p>
                  </Card>
                </div>
              </section>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                모두가 즐거운 커뮤니티를 만들기 위해 함께 노력해주셔서 감사합니다.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CommunityGuidelines;
