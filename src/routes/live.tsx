import { createFileRoute } from '@tanstack/react-router';
import { LiveScreen } from '@/components/ccg/screens';
import { ccgHead } from '@/lib/ccg-meta';
export const Route=createFileRoute('/live')({head:()=>ccgHead('Live Event Centre','Explore the CCG27 athletics programme, event previews and mock results.'),component:LiveScreen});
