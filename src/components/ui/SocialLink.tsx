import { FolderGit2, Link, Mail, SquarePlay } from "lucide-react";
import { SocialLink as SocialLinkType } from "@/types";

const icons: Record<string, React.ElementType> = {
  FolderGit2,
  Link,
  Mail,
  SquarePlay
};

export default function SocialLink({ social }: { social: SocialLinkType }) {
  const Icon = icons[social.icon];
  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-gray-400 hover:text-white"
    >
      {Icon && <Icon size={20} />}
      {social.platform}
    </a>
  );
}
