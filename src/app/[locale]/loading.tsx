// src/app/[locale]/loading.tsx
import { MessageLoading } from '@/components/ui/message-loading';

export default function Loading() {
  // This UI is shown by Next.js automatically during page navigations
  // when the new route segment is loading data or rendering.
  // Its "aggressiveness" in appearing is managed by Next.js's Suspense boundaries.
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{ backgroundColor: '#F2F2F2' }} // Specific background color
    >
      <MessageLoading />
    </div>
  );
}
