import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, MessageSquare, TrendingUp, Users, CheckCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const notifications = [
  {
    id: 1,
    type: "comment",
    user: "김철수",
    userInitial: "김",
    action: "님이 회원님의 게시물에 댓글을 남겼습니다",
    content: "정말 유익한 정보네요! 감사합니다.",
    time: "5분 전",
    read: false,
    icon: MessageSquare
  },
  {
    id: 2,
    type: "upvote",
    user: "이영희",
    userInitial: "이",
    action: "님이 회원님의 게시물을 추천했습니다",
    content: "\"React 최신 트렌드 정리\"",
    time: "1시간 전",
    read: false,
    icon: TrendingUp
  },
  {
    id: 3,
    type: "follow",
    user: "박민수",
    userInitial: "박",
    action: "님이 회원님을 팔로우했습니다",
    content: "",
    time: "2시간 전",
    read: true,
    icon: Users
  },
  {
    id: 4,
    type: "comment",
    user: "정수진",
    userInitial: "정",
    action: "님이 회원님의 댓글에 답글을 남겼습니다",
    content: "저도 같은 경험을 했어요!",
    time: "3시간 전",
    read: true,
    icon: MessageSquare
  },
  {
    id: 5,
    type: "upvote",
    user: "최동욱",
    userInitial: "최",
    action: "님이 회원님의 댓글을 추천했습니다",
    content: "\"저도 동의합니다. 정말 좋은 의견이네요.\"",
    time: "어제",
    read: true,
    icon: TrendingUp
  }
];

const Notifications = () => {
  return (
    <div className="flex-1 max-w-3xl">
      <div className="max-w-3xl mx-auto px-2 py-6">
        <div className="flex gap-6">
          <main className="flex-1 max-w-3xl">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Bell className="h-8 w-8 text-primary" />
                  <h1 className="text-3xl font-bold">알림</h1>
                </div>
                <Button variant="ghost" size="sm" className="gap-2">
                  <CheckCheck className="h-4 w-4" />
                  모두 읽음
                </Button>
              </div>

              <Tabs defaultValue="all">
                <TabsList className="mb-6">
                  <TabsTrigger value="all">전체</TabsTrigger>
                  <TabsTrigger value="unread">읽지 않음</TabsTrigger>
                  <TabsTrigger value="comments">댓글</TabsTrigger>
                  <TabsTrigger value="upvotes">추천</TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-3">
                  {notifications.map((notification) => {
                    const Icon = notification.icon;
                    return (
                      <div
                        key={notification.id}
                        className={`flex gap-4 p-4 rounded-lg transition-colors cursor-pointer ${
                          notification.read
                            ? "hover:bg-secondary/50"
                            : "bg-primary/5 hover:bg-primary/10"
                        }`}
                      >
                        <Avatar>
                          <AvatarImage src="" />
                          <AvatarFallback>{notification.userInitial}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start gap-2 mb-1">
                            <Icon className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                            <p className="text-sm">
                              <span className="font-semibold">{notification.user}</span>
                              <span className="text-muted-foreground"> {notification.action}</span>
                            </p>
                          </div>
                          {notification.content && (
                            <p className="text-sm text-muted-foreground ml-6 mb-1">
                              {notification.content}
                            </p>
                          )}
                          <p className="text-xs text-muted-foreground ml-6">
                            {notification.time}
                          </p>
                        </div>
                        {!notification.read && (
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                        )}
                      </div>
                    );
                  })}
                </TabsContent>

                <TabsContent value="unread">
                  <p className="text-center text-muted-foreground py-8">
                    읽지 않은 알림만 표시됩니다
                  </p>
                </TabsContent>

                <TabsContent value="comments">
                  <p className="text-center text-muted-foreground py-8">
                    댓글 알림만 표시됩니다
                  </p>
                </TabsContent>

                <TabsContent value="upvotes">
                  <p className="text-center text-muted-foreground py-8">
                    추천 알림만 표시됩니다
                  </p>
                </TabsContent>
              </Tabs>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Notifications;