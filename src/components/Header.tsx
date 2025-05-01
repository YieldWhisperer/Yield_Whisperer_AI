
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="mr-4 hidden md:flex">
            <div className="bg-gradient-to-r from-yield-primary to-yield-secondary bg-clip-text text-transparent font-bold text-xl">
              Yield Whisper
            </div>
          </div>
          <div className="flex md:hidden">
            <div className="bg-gradient-to-r from-yield-primary to-yield-secondary bg-clip-text text-transparent font-bold">
              YW
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ConnectButton showBalance={false} />
        </div>
      </div>
    </header>
  );
}
