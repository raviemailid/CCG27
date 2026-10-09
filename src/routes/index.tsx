import { createFileRoute } from '@tanstack/react-router';
import { HomeScreen } from '@/components/ccg/home';
import { ccgHead } from '@/lib/ccg-meta';
export const Route = createFileRoute('/')({ head:()=>ccgHead('City Collective Games · Fantasy Athletics','Four cities. One collective. Build your fantasy athletics team for CCG27 in May 2027.'), component:HomeScreen });
