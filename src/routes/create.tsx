import { createFileRoute } from '@tanstack/react-router';
import { TeamEditor } from '@/components/ccg/teams';
import { ccgHead } from '@/lib/ccg-meta';
export const Route=createFileRoute('/create')({validateSearch:(s:Record<string,unknown>):{city?:string}=>typeof s['city']==='string'?{city:s['city']} : {},head:()=>ccgHead('Create Your Team','Choose your city and ten athletes to build your CCG27 fantasy collective.'),component:CreatePage});
function CreatePage(){const {city}=Route.useSearch();return <TeamEditor initialCity={city || 'London'}/>}
