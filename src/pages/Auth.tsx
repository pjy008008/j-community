import { useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // UI 프로토타입이므로 실제 인증은 하지 않음
    toast({
      title: isLogin ? "로그인 시뮬레이션" : "회원가입 시뮬레이션",
      description:
        "이것은 UI 프로토타입입니다. 실제 인증 기능은 백엔드 연동 후 작동합니다.",
    });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center shadow-medium mb-4">
              <span className="text-2xl font-bold text-primary-foreground">
                J
              </span>
            </div>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">
            {isLogin ? "로그인" : "회원가입"}
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            커뮤니티에 참여하고 다양한 이야기를 나누세요
          </p>
        </div>

        {/* Auth Card */}
        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="username">사용자명</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="사용자명 입력"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required={!isLogin}
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">비밀번호</Label>
              <Input
                id="password"
                type="password"
                placeholder="비밀번호 입력 (8자 이상)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
              />
            </div>

            {isLogin && (
              <div className="flex items-center justify-end">
                <Button
                  type="button"
                  variant="link"
                  className="text-sm text-primary p-0 h-auto"
                >
                  비밀번호를 잊으셨나요?
                </Button>
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-gradient-primary hover:opacity-90 transition-opacity shadow-medium"
            >
              {isLogin ? "로그인" : "회원가입"}
            </Button>
          </form>

          <Separator className="my-6" />

          <div className="space-y-3">
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() =>
                toast({
                  title: "소셜 로그인",
                  description: "소셜 로그인은 백엔드 연동 후 지원됩니다.",
                })
              }
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google로 계속하기
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() =>
                toast({
                  title: "소셜 로그인",
                  description: "소셜 로그인은 백엔드 연동 후 지원됩니다.",
                })
              }
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              GitHub로 계속하기
            </Button>
          </div>

          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground">
              {isLogin ? "계정이 없으신가요?" : "이미 계정이 있으신가요?"}{" "}
              <Button
                type="button"
                variant="link"
                className="text-primary p-0 h-auto font-semibold"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "회원가입" : "로그인"}
              </Button>
            </p>
          </div>
        </Card>

        {/* Privacy Notice */}
        <p className="text-xs text-center text-muted-foreground">
          로그인 시{" "}
          <Link to="/terms">
            <a href="#" className="text-primary hover:underline">
              이용약관
            </a>
          </Link>
          과{" "}
          <a href="#" className="text-primary hover:underline">
            개인정보처리방침
          </a>
          에 동의하는 것으로 간주됩니다.
        </p>

        {/* Back to Home */}
        <div className="text-center">
          <Link to="/">
            <Button variant="ghost" className="text-sm">
              ← 홈으로 돌아가기
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;
