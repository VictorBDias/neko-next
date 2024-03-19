import { DateFile } from '@/components/dateFile';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      {/* <DateFile /> */}
      <h1>Home</h1>

      <h1>
        <Link href={'/imc'}>Imc</Link>
      </h1>
    </div>
  );
}
