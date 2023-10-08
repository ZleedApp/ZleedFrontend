import Nav from '@/components/Nav';
import { useRouter } from 'next/router';

export default function Search() {
  const router = useRouter();

  return (
    <>
      <Nav searchTerm={router.query.q} />
    </>
  )
}