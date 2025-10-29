import Image from "next/image";

export function Chicken() {
  return (
    <div className="w-8 h-8 -translate-y-4">
      <Image
        src="/chicken.svg?height=32&width=32"
        alt="Chicken"
        width={32}
        height={32}
      />
    </div>
  );
}
