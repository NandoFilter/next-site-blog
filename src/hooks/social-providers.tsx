import { LinkIcon } from 'lucide-react'
import Image from 'next/image'

export type ShareConfig = {
  url: string,
  title?: string,
  text?: string
}

export type SocialProvider = 'linkedin' | 'facebook' | 'slack' | 'copyLink'

export const SOCIAL_PROVIDERS = {
  linkedin: {
    name: 'LinkedIn',
    icon: <Image src={'/assets/icons/linkedin.svg'} alt="LinkedIn" width={16} height={16} />,
    shareUrl: (config: ShareConfig) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(config.url)}`,
  },
  facebook: {
    name: 'Facebook',
    icon: <Image src={'/assets/icons/facebook.svg'} alt="Facebook" width={16} height={16} />,
    shareUrl: (config: ShareConfig) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(config.url)}`,
  },
  slack: {
    name: 'Slack',
    icon: <Image src={'/assets/icons/slack.svg'} alt="Slack" width={16} height={16} />,
    shareUrl: (config: ShareConfig) => `https://slack.com/share?url=${encodeURIComponent(config.url)}&text=${encodeURIComponent(config.title || '')}`,
  },
  copyLink: {
    name: 'Copiar link',
    icon: <LinkIcon className="h-4 w-4" />,
    shareUrl: (config: ShareConfig) => config.url,
  },
}
