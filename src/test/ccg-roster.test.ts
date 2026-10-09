import { describe, expect, it } from 'vitest';
import { canSaveRoster } from '@/lib/ccg-data';
describe('CCG27 roster requirements',()=>{
 it('allows saving exactly ten unique athletes',()=>{expect(canSaveRoster([1,2,3,4,5,6,7,8,9,10])).toBe(true)});
 it('does not allow saving fewer than ten athletes',()=>{expect(canSaveRoster([1,2,3,4,5,6,7,8,9])).toBe(false)});
 it('does not allow saving more than ten athletes',()=>{expect(canSaveRoster([1,2,3,4,5,6,7,8,9,10,11])).toBe(false)});
 it('does not enforce city or discipline quotas',()=>{expect(canSaveRoster([1,2,3,4,5,6,7,8,9,10])).toBe(true)});
});
