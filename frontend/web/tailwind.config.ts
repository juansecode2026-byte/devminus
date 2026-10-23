import type { Config } from 'tailwindcss';

// Las clases leen los tokens de src/lib/tokens.css. Los valores viven allí, no aquí.
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        text: 'var(--color-text)',
        muted: 'var(--color-text-muted)',
        accent: 'var(--color-accent)',
        'accent-ink': 'var(--color-accent-ink)',
        'accent-soft': 'var(--color-accent-soft)',
        ok: 'var(--color-ok)',
        warn: 'var(--color-warn)',
        bad: 'var(--color-bad)',
        line: 'var(--color-line)',
        'line-strong': 'var(--color-line-strong)',
        'line-nav': 'var(--color-line-nav)',
        'surface-1': 'var(--color-surface-1-top)',
        'surface-2': 'var(--color-surface-2-top)',
        nav: 'var(--color-surface-nav)',
        menu: 'var(--color-surface-menu)',
      },
      fontFamily: {
        display: 'var(--font-display)',
        sans: 'var(--font-body)',
        mono: 'var(--font-mono)',
      },
      fontSize: {
        label: ['var(--text-label-size)', { lineHeight: '16px', letterSpacing: '0.12em' }],
        sm: ['var(--text-sm-size)', { lineHeight: '20px' }],
        'body-sm': ['var(--text-body-sm-size)', { lineHeight: '24px' }],
        base: ['var(--text-base-size)', { lineHeight: '26px' }],
        md: ['var(--text-md-size)', { lineHeight: '28px' }],
        lg: ['var(--text-lg-size)', { lineHeight: '28px', letterSpacing: '-0.015em' }],
        xl: ['var(--text-xl-size)', { lineHeight: '32px', letterSpacing: '-0.02em' }],
        '2xl': ['var(--text-2xl)', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        hero: ['var(--text-hero)', { lineHeight: '1.04', letterSpacing: '-0.035em' }],
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        pill: 'var(--radius-pill)',
      },
      maxWidth: {
        container: 'var(--container)',
        prose: '60ch',
        lead: '52ch',
        h2: '18ch',
        desc: 'var(--measure-desc)',
      },
      boxShadow: {
        'nav-active': 'var(--shadow-nav-active)',
      },
      transitionDuration: {
        fast: 'var(--dur-fast)',
      },
      transitionTimingFunction: {
        brand: 'var(--ease)',
      },
      keyframes: {
        aparecer: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        aparecer: 'aparecer var(--dur-fade) var(--ease)',
      },
    },
  },
  plugins: [],
} satisfies Config;
