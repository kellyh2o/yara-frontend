import { getShowEntries, getShowNewEntryForm } from './journal.selectors';
import { JOURNAL_INITIAL_MOCK_STATE } from '../state/journal-initial-mock-state';

const state = JOURNAL_INITIAL_MOCK_STATE;

describe('Journal selectors', () => {
    it('should retrieve showEntries', () => {
        expect(getShowEntries.projector(state)).toBe(state.showEntries);    });
    
    it('should retrieve showNewEntryForm', () => {
        expect(getShowNewEntryForm.projector(state)).toBe(!state.showEntries);
    });
});