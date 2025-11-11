import PostCard from "@/components/PostCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp } from "lucide-react";

const trendingPosts = [
  {
    id: 1,
    author: "트렌드헌터",
    authorInitial: "트",
    community: "개발",
    communityColor: "bg-blue-500",
    title: "2024년 가장 인기있는 개발 트렌드 TOP 10",
    content: "올해 가장 주목받은 기술 스택과 프레임워크를 정리해봤습니다.",
    initialVotes: 2845,
    comments: 324,
    timeAgo: "3시간 전",
    image: ""
  },
  {
    id: 2,
    author: "디자이너김",
    authorInitial: "디",
    community: "디자인",
    communityColor: "bg-purple-500",
    title: "AI가 디자인 업계를 완전히 바꾸고 있습니다",
    content: "최근 AI 디자인 툴의 발전이 놀랍습니다. 실제 업무에서의 활용 사례를 공유합니다.",
    initialVotes: 1923,
    comments: 267,
    timeAgo: "5시간 전",
    image: ""
  },
  {
    id: 3,
    author: "커리어코치",
    authorInitial: "커",
    community: "커리어",
    communityColor: "bg-green-500",
    title: "이직 성공 후기: 연봉 2배 올린 비결",
    content: "3년차 개발자에서 시니어 개발자로 이직하면서 배운 점들을 공유합니다.",
    initialVotes: 1654,
    comments: 189,
    timeAgo: "7시간 전",
    image: ""
  }
];

const Trending = () => {
  return (
    <div className="flex-1 max-w-3xl">
      <div className="max-w-3xl mx-auto px-2 py-6">
        <div className="flex gap-6">
          <main className="flex-1 max-w-3xl">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
                <h1 className="text-3xl font-bold">인기 게시물</h1>
              </div>
              <p className="text-muted-foreground">
                지금 가장 많은 관심을 받고 있는 게시물들입니다
              </p>
            </div>

            <Tabs defaultValue="today" className="mb-6">
              <TabsList>
                <TabsTrigger value="today">오늘</TabsTrigger>
                <TabsTrigger value="week">이번 주</TabsTrigger>
                <TabsTrigger value="month">이번 달</TabsTrigger>
                <TabsTrigger value="year">올해</TabsTrigger>
                <TabsTrigger value="all">전체</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="space-y-4">
              {trendingPosts.map((post) => (
                <PostCard
                  key={post.id}
                  id={post.id}
                  author={post.author}
                  authorInitial={post.authorInitial}
                  community={post.community}
                  communityColor={post.communityColor}
                  title={post.title}
                  content={post.content}
                  initialVotes={post.initialVotes}
                  comments={post.comments}
                  timeAgo={post.timeAgo}
                  image={post.image}
                />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Trending;