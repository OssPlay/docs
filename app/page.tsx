import { redirect } from 'next/navigation';

// No separate marketing homepage yet — / just goes straight to the docs.
export default function HomePage() {
  redirect('/docs');
}
