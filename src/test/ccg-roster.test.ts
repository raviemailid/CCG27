import { describe, expect, it } from 'vitest';
import { canSaveRoster } from '@/lib/ccg-data';
describe('CCG27 roster requirements',()=>{
 it('allows saving exactly ten unique athletes',()=>{expect(canSaveRoster([1,2,3,4,5,6,7,8,9,10])).toBe(true)});
 it('does not allow saving fewer than ten athletes',()=>{expect(canSaveRoster([1,2,3,4,5,6,7,8,9])).toBe(false)});
 it('does not allow saving more than ten athletes',()=>{expect(canSaveRoster([1,2,3,4,5,6,7,8,9,10,11])).toBe(false)});
 it('does not enforce city or discipline quotas',()=>{expect(canSaveRoster([1,2,3,4,5,6,7,8,9,10])).toBe(true)});
});
import { rarityFor, squadTierFor, maxTeamPower, athletes } from '@/lib/ccg-data';
it('grades athletes into bronze, silver and gold tiers',()=>{expect(rarityFor(74)).toBe('bronze');expect(rarityFor(100)).toBe('silver');expect(rarityFor(120)).toBe('gold')});
it('squad tier reflects power against the best possible lineup',()=>{expect(squadTierFor(maxTeamPower)).toBe('gold');expect(squadTierFor(Math.round(maxTeamPower*0.7))).toBe('silver');expect(squadTierFor(1)).toBe('bronze')});
it('max team power equals the ten highest athlete points',()=>{const top10=[...athletes].map(a=>a.points).sort((a,b)=>b-a).slice(0,10).reduce((s,p)=>s+p,0);expect(maxTeamPower).toBe(top10)});
