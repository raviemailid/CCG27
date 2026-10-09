import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { starterTeams, type Team } from '@/lib/ccg-data';
type Store = { teams: Team[]; saveTeam: (team: Team) => void; theme: string; toggleTheme: () => void };
const Context = createContext<Store | null>(null);
export function CCGProvider({ children }: { children: ReactNode }) {
 const [teams,setTeams] = useState(starterTeams); const [theme,setTheme] = useState('dark'); const [ready,setReady] = useState(false);
 useEffect(()=>{ try { const saved=localStorage.getItem('ccg-teams'); if(saved) { const parsed=JSON.parse(saved); if(Array.isArray(parsed) && parsed.every(t=>typeof t.id==='string' && Array.isArray(t.athleteIds))) setTeams(parsed); } setTheme(localStorage.getItem('ccg-theme')==='light'?'light':'dark'); } catch {} setReady(true); },[]);
 useEffect(()=>{ document.documentElement.classList.toggle('light',theme==='light'); if(ready) {localStorage.setItem('ccg-theme',theme); localStorage.setItem('ccg-teams',JSON.stringify(teams));} },[theme,teams,ready]);
 return <Context.Provider value={{teams,theme,toggleTheme:()=>setTheme(t=>t==='dark'?'light':'dark'),saveTeam:team=>setTeams(ts=>ts.some(t=>t.id===team.id)?ts.map(t=>t.id===team.id?team:t):[...ts,team])}}>{children}</Context.Provider>;
}
export function useCCG(){ const ctx=useContext(Context); if(!ctx) throw new Error('CCGProvider missing'); return ctx; }
