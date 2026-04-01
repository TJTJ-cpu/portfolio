export default function SkillBadge({ name }: { name: string }) {
  return (
    <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
      {name}
    </span>
  );
}

