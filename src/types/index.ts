/**
 * Core types for KIMZAN Platform Showcase
 */

/**
 * Represents a key feature of the KIMZAN platform
 */
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'automation' | 'analytics' | 'integration' | 'security';
  benefits: string[]
}

/**
 * Represents a client testimonial
 */
export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  role: string;
  quote: string;
  rating: number;
  avatar?: string;
  industry: string
}

/**
 * Represents a use case or success story
 */
export interface UseCase {
  id: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: MetricResult[];
  imageUrl?: string
}

/**
 * Represents a measurable result or metric
 */
export interface MetricResult {
  label: string;
  value: string;
  improvement: string
}

/**
 * Represents a platform capability or integration
 */
export interface Capability {
  id: string;
  name: string;
  description: string;
  type: 'api' | 'integration' | 'tool' | 'service';
  status: 'available' | 'coming-soon' | 'beta';
  logoUrl?: string
}

/**
 * Represents demo data for interactive showcases
 */
export interface DemoData {
  id: string;
  type: 'workflow' | 'dashboard' | 'report' | 'automation';
  title: string;
  description: string;
  previewData: Record<string, unknown>;
  interactionPoints: InteractionPoint[]
}

/**
 * Represents an interactive point in a demo
 */
export interface InteractionPoint {
  id: string;
  label: string;
  description: string;
  action: string;
  coordinates?: {
    x: number;
    y: number
  }
}

/**
 * Represents a pricing tier
 */
export interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: number;
  billingPeriod: 'monthly' | 'annually';
  features: string[];
  highlighted?: boolean;
  cta: string
}

/**
 * Represents a team member
 */
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  linkedin?: string;
  twitter?: string
}

/**
 * Represents a blog post or resource
 */
export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'whitepaper' | 'case-study' | 'video';
  publishDate: string;
  author: string;
  thumbnailUrl?: string;
  url: string;
  tags: string[]
}

/**
 * Represents a contact form submission
 */
export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  message: string;
  interest?: 'demo' | 'pricing' | 'partnership' | 'support' | 'other'
}

/**
 * Represents analytics data for the showcase
 */
export interface AnalyticsData {
  totalUsers: number;
  activeProjects: number;
  automationsRun: number;
  timeSaved: string;
  satisfactionRate: number
}

/**
 * Represents a navigation item
 */
export interface NavItem {
  id: string;
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[]
}

/**
 * Represents a call-to-action button
 */
export interface CTAButton {
  id: string;
  label: string;
  href: string;
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  icon?: string
}
