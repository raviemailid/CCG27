import { createFileRoute } from '@tanstack/react-router';
import { ManageTeamScreen } from '@/components/ccg/teams';
import { ccgHead } from '@/lib/ccg-meta';
export const Route=createFileRoute('/teams/$teamId')({head:()=>ccgHead('Team Lineup','Explore the starting ten and manage your CCG27 fantasy athletics roster.'),component:TeamPage});
function TeamPage(){const {teamId}=Route.useParams();return <ManageTeamScreen key={teamId} teamId={teamId}/>}
