import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const conversations = [
  { id: 1, user: "김철수", avatar: "", lastMessage: "안녕하세요!", time: "5분 전", unread: 2 },
  { id: 2, user: "이영희", avatar: "", lastMessage: "네, 알겠습니다.", time: "1시간 전", unread: 0 },
  { id: 3, user: "박민수", avatar: "", lastMessage: "좋은 하루 되세요~", time: "2시간 전", unread: 0 },
  { id: 4, user: "정수진", avatar: "", lastMessage: "감사합니다!", time: "어제", unread: 1 },
];

const Messages = () => {
  return (
    <div className="min-h-screen w-full bg-background">
      <div className="max-w-screen-2xl mx-auto px-4 py-4">
        <div className="flex gap-6">  
          <main className="flex-1 max-w-5xl">
            <Card className="p-6">
              <h1 className="text-2xl font-bold mb-6">메시지</h1>
              
              <div className="grid md:grid-cols-3 gap-4">
                {/* 대화 목록 */}
                <div className="md:col-span-1 space-y-2">
                  <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="대화 검색..."
                      className="pl-10"
                    />
                  </div>
                  
                  {conversations.map((conv) => (
                    <button
                      key={conv.id}
                      className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors text-left"
                    >
                      <Avatar>
                        <AvatarImage src={conv.avatar} />
                        <AvatarFallback>{conv.user[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-medium text-sm truncate">{conv.user}</p>
                          <span className="text-xs text-muted-foreground">{conv.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                      </div>
                      {conv.unread > 0 && (
                        <div className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                          {conv.unread}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
                
                {/* 대화 창 */}
                <div className="md:col-span-2 border rounded-lg p-4 flex flex-col h-[500px]">
                  <div className="flex items-center gap-3 pb-4 border-b">
                    <Avatar>
                      <AvatarFallback>김</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">김철수</p>
                      <p className="text-xs text-muted-foreground">온라인</p>
                    </div>
                  </div>
                  
                  <div className="flex-1 py-4 space-y-4 overflow-y-auto">
                    <div className="flex gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>김</AvatarFallback>
                      </Avatar>
                      <div className="bg-secondary rounded-lg p-3 max-w-xs">
                        <p className="text-sm">안녕하세요! 궁금한 점이 있어서 메시지 남깁니다.</p>
                      </div>
                    </div>
                    <div className="flex gap-3 justify-end">
                      <div className="bg-primary text-primary-foreground rounded-lg p-3 max-w-xs">
                        <p className="text-sm">네, 무엇이 궁금하신가요?</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-4 border-t">
                    <Input placeholder="메시지를 입력하세요..." />
                    <Button size="icon">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Messages;
