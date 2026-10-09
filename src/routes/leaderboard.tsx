import { createFileRoute } from '@tanstack/react-router';
import { LeaderboardScreen } from '@/components/ccg/screens';
import { ccgHead } from '@/lib/ccg-meta';
export const Route=createFileRoute('/leaderboard')({validateSearch:(s:Record<string,unknown>):{city?:string}=>typeof s['city']==='string'?{city:s['city']} : {},head:()=>ccgHead('Fantasy Leaderboard','Follow CCG27 fantasy team standings across London, Helsinki, Brussels and Amsterdam.'),component:LeaderboardPage});
function LeaderboardPage(){const {city}=Route.useSearch();return <LeaderboardScreen initialCity={city || ''}/>}
