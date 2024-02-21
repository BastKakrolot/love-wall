"use client"
import {Button} from "@/components/ui/button";

export default function Home() {
    return (
        <main className="flex min-h-[calc(100vh-57px)] flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            </div>
            <div className="relative flex flex-col gap-4 place-items-center">
                <p className="text-4xl">即将到来...</p>
                <p className="text-2xl">Coming Soon...</p>
                <Button
                    className="cursor-pointer"
                    onClick={() => window.open("https://github.com/BastKakrolot/love-wall/issues/new")}>提建议
                    Suggestion</Button>
            </div>
            <div></div>
        </main>
    );
}
