import { useSEO } from "../hooks/useSEO";

type Props = { title: string };

export default function ComingSoon({ title }: Props) {
  useSEO({
    title: `${title} | UCF Fashion Society`,
    description: `${title} page for UCF Fashion Society is coming soon.`,
  });
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-[#373333]">
      <h1 className="text-3xl md:text-5xl font-bold uppercase">{title}</h1>
      <p className="mt-4 text-lg">Coming soon.</p>
    </div>
  );
}
