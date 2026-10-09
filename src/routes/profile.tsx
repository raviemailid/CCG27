import { createFileRoute } from '@tanstack/react-router';
import { ProfileScreen } from '@/components/ccg/screens';
import { ccgHead } from '@/lib/ccg-meta';
export const Route=createFileRoute('/profile')({head:()=>ccgHead('Your Profile','Your City Collective Games profile, fantasy team summary and preferences.'),component:ProfileScreen});
