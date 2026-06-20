declare function gtag(...args: unknown[]): void;

export function trackPageView(path: string, title?: string) {
  if (typeof gtag === 'undefined') return;
  gtag('event', 'page_view', {
    page_path: path,
    page_title: title ?? document.title,
  });
}

export type TrackEventParams = {
  event_category?: string;
  event_label?: string;
  value?: number;
  [key: string]: unknown;
};

export function trackEvent(
  action: string,
  params?: TrackEventParams,
) {
  if (typeof gtag === 'undefined') return;
  gtag('event', action, params ?? {});
}

// Convenience shorthands for the three tracked CTAs
export const GA = {
  takeQuiz:          () => trackEvent('take_quiz_click',          { event_category: 'CTA', event_label: 'Take The Quiz' }),
  getLaunchKit:      () => trackEvent('get_launch_kit_click',     { event_category: 'CTA', event_label: 'Get The Launch Kit' }),
  bookStrategySession: () => trackEvent('book_strategy_session_click', { event_category: 'CTA', event_label: 'Book Strategy Session' }),
};
