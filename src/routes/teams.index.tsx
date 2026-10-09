import { createFileRoute } from '@tanstack/react-router';
import { MyTeamsScreen } from '@/components/ccg/teams';
import { ccgHead } from '@/lib/ccg-meta';
export const Route=createFileRoute('/teams/')({head:()=>ccgHead('My Teams','Your CCG27 fantasy athletics teams, rosters and points in one place.'),component:MyTeamsScreen});
