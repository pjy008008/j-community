import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  ArrowUp,
  ArrowDown,
  MessageSquare,
  Share2,
  Bookmark,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface PostCardProps {
  id: number;
  title: string;
  content: string;
  author: string;
  authorInitial: string;
  community: string;
  communityColor: string;
  initialVotes: number;
  comments: number;
  timeAgo: string;
  image?: string;
}

const PostCard = ({
  id,
  title,
  content,
  author,
  authorInitial,
  community,
  communityColor,
  initialVotes,
  comments,
  timeAgo,
  image,
}: PostCardProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [votes, setVotes] = useState(initialVotes);
  const [voteStatus, setVoteStatus] = useState<"up" | "down" | null>(null);
  const [isSaved, setIsSaved] = useState(false);

  const handleVote = (type: "up" | "down") => {
    if (voteStatus === type) {
      setVotes(initialVotes);
      setVoteStatus(null);
    } else {
      if (type === "up") {
        setVotes(voteStatus === "down" ? initialVotes + 2 : initialVotes + 1);
      } else {
        setVotes(voteStatus === "up" ? initialVotes - 2 : initialVotes - 1);
      }
      setVoteStatus(type);
    }
  };

  const handleComment = () => {
    navigate(`/post/${id}`);
  };

  const handleShare = async () => {
    const url = `${window.location.origin}/post/${id}`;
    try {
      await navigator.clipboard.writeText(url);
      toast({
        title: "링크가 복사되었습니다",
        description: "클립보드에 게시물 링크가 복사되었습니다.",
      });
    } catch (error) {
      toast({
        title: "복사 실패",
        description: "링크 복사에 실패했습니다.",
        variant: "destructive",
      });
    }
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    toast({
      title: isSaved ? "저장 취소" : "저장됨",
      description: isSaved
        ? "게시물 저장이 취소되었습니다."
        : "게시물이 저장되었습니다.",
    });
  };

  return (
    <Card className="overflow-hidden hover:border-border/80 transition-colors">
      <div className="flex">
        {/* Vote Section */}
        <div className="flex flex-col items-center gap-1 bg-secondary/30 p-2 w-12">
          <button
            onClick={() => handleVote("up")}
            className={`p-1 rounded hover:bg-secondary transition-colors ${
              voteStatus === "up" ? "text-accent" : "text-muted-foreground"
            }`}
          >
            <ArrowUp className="h-5 w-5" />
          </button>
          <span
            className={`text-sm font-bold ${
              voteStatus === "up"
                ? "text-accent"
                : voteStatus === "down"
                ? "text-destructive"
                : "text-foreground"
            }`}
          >
            {votes}
          </span>
          <button
            onClick={() => handleVote("down")}
            className={`p-1 rounded hover:bg-secondary transition-colors ${
              voteStatus === "down"
                ? "text-destructive"
                : "text-muted-foreground"
            }`}
          >
            <ArrowDown className="h-5 w-5" />
          </button>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-3">
          {/* Header */}
          <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
            <Avatar className="h-5 w-5">
              <AvatarFallback
                className={`${communityColor} text-white text-xs`}
              >
                {community[0]}
              </AvatarFallback>
            </Avatar>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/community/${community}`);
              }}
              className="font-semibold text-foreground hover:underline"
            >
              j/{community}
            </button>
            <span>•</span>
            <span>u/{author}</span>
            <span>•</span>
            <span>{timeAgo}</span>
          </div>

          {/* Title */}
          <h3
            onClick={() => navigate(`/post/${id}`)}
            className="font-semibold text-lg mb-2 text-foreground hover:text-primary cursor-pointer"
          >
            {title}
          </h3>

          {/* Content */}
          <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
            {content}
          </p>

          {/* Image */}
          {image && (
            <div className="mb-3 rounded-lg overflow-hidden">
              <img
                src={image}
                alt="Post content"
                className="w-full max-h-96 object-cover"
              />
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-4 text-muted-foreground">
            <button
              onClick={handleComment}
              className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-secondary transition-colors"
            >
              <MessageSquare className="h-4 w-4" />
              <span className="text-sm font-medium">{comments} 댓글</span>
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-secondary transition-colors"
            >
              <Share2 className="h-4 w-4" />
              <span className="text-sm font-medium">공유</span>
            </button>
            <button
              onClick={handleSave}
              className={`flex items-center gap-1.5 px-2 py-1 rounded hover:bg-secondary transition-colors ${
                isSaved ? "text-primary" : ""
              }`}
            >
              <Bookmark
                className={`h-4 w-4 ${isSaved ? "fill-current" : ""}`}
              />
              <span className="text-sm font-medium">저장</span>
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
